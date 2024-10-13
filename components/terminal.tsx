"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// <-----TERMINAL----->

interface TerminalProps {
  containerClassName?: string;
  children: React.ReactNode;
}

const Terminal: React.FC<TerminalProps> = ({
  containerClassName,
  children,
}) => {
  return (
    <div
      className={cn(
        "h-[500px] min-w-[300px]  w-[800px] bg-gray-900  rounded-md md:rounded-xl px-3 py-4 select-none overflow-scroll scroll-smooth no-scrollbar",
        containerClassName
      )}
    >
      {children}
    </div>
  );
};
// <-----TERMINAL INPUT----->
interface userCommandProps {
  input: string;
  output?: string | React.ReactNode;
  description?: string;
}
interface TerminalInputProps {
  containerClassname?: string;
  isCleared: boolean;
  userCommand: userCommandProps[];
  setIsCleared: (value: boolean) => void;
}
const TerminalCommand: React.FC<TerminalInputProps> = ({
  containerClassname,
  setIsCleared,
  isCleared,
  userCommand,
}) => {
  interface previousCommandProp {
    input: string;
    output?: string | React.ReactNode;
    time: string;
  }
  interface historyProp {
    input: string;
    time: string;
  }
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [command, setCommand] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [history, setHistory] = useState<historyProp[]>([]);
  const [previousCommand, setPreviousCommand] = useState<previousCommandProp[]>(
    []
  );
  const [keyUpPress, setKeyUpPress] = useState<number>(1);
  const lastCommandRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cursorPositionRef = useRef<number | null>(null);
  const handleCommand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const input = e.target;
    const cursorPosition = input.selectionStart;
    requestAnimationFrame(() => {
      // Ensures the selection range is set after the value update
      input.setSelectionRange(cursorPosition, cursorPosition); // Set the cursor position
    });
    setCommand(value.toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEntered(true);
    if (command === "") {
      setPreviousCommand([...previousCommand, { input: "", time: time }]);
      return;
    }
    if (command === "clear") {
      if (previousCommand.length === 0) {
        setHistory([...history, { input: command, time: time }]);
        setCommand("");
        setKeyUpPress(1);
        setIsCleared(true);
        return;
      }
      setPreviousCommand([]);
      setHistory([...history, { input: command, time: time }]);
      setCommand("");
      setKeyUpPress(1);
      setIsCleared(true);
      return;
    }
    if (command === "history") {
      setPreviousCommand([
        ...previousCommand,
        {
          input: command,
          output: history.map((item, index) => {
            return (
              <div
                className="w-full flex justify-start items-center"
                key={index}
              >
                <p className=" text-green-800 text-md font-medium w-[20%]">
                  [ {item.time} ] -{" "}
                </p>
                <p key={index} className="text-cyan-600 text-md font-medium ">
                  {item.input}
                </p>
              </div>
            );
          }),
          time: time,
        },
      ]);
      setHistory([...history, { input: command, time: time }]);
      setCommand("");
      setKeyUpPress(1);
      return;
    }
    if (command === "help") {
      setPreviousCommand([
        ...previousCommand,
        {
          input: command,
          output: userCommand.map((item, index) => {
            return (
              <div
                className="w-full flex justify-start items-center gap-2"
                key={index}
              >
                <p className=" text-[#ffbe6f] text-md font-medium ">
                  {" "}
                  {item.input}{" "}
                </p>
                <span>-</span>
                <p key={index} className="text-cyan-600 text-md font-medium ">
                  {item.description}
                </p>
              </div>
            );
          }),
          time: time,
        },
      ]);
      setHistory([...history, { input: command, time: time }]);
      setCommand("");
      setKeyUpPress(1);
      return;
    }

    if (userCommand.some((cmd) => cmd.input === command)) {
      const matchedCommand = userCommand.find((cmd) => cmd.input === command);
      if (matchedCommand) {
        setPreviousCommand([
          ...previousCommand,
          {
            input: command,
            output: matchedCommand.output,
            time: time,
          },
        ]);
        setHistory([...history, { input: command, time: time }]);

        setCommand("");
      }
    } else {
      setPreviousCommand([
        ...previousCommand,
        {
          input: command,
          output: (
            <div className="flex gap-2">
              ⚠️{" "}
              <span className="italic">
                No such command found, Try `help` to see available commands
              </span>
            </div>
          ),
          time: time,
        },
      ]);
      setHistory([...history, { input: command, time: time }]);
      setCommand("");
    }
  };
  function localTime() {
    setTime(
      new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" })
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      localTime();
    }, 1000);
    localTime();
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  useEffect(() => {
    if (lastCommandRef.current) {
      lastCommandRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [previousCommand]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      if (keyUpPress <= history.length && keyUpPress > 0) {
        const previousCommandIndex = history.length - keyUpPress;
        if (previousCommandIndex >= 0) {
          const previousCommandValue = history[previousCommandIndex].input;
          setCommand(previousCommandValue);
          setKeyUpPress(keyUpPress + 1);
        } else {
          setCommand("");
        }
      }
    } else if (e.key === "ArrowDown") {
      if (keyUpPress > 1) {
        setKeyUpPress(keyUpPress - 1);
        const previousCommandIndex = history.length - keyUpPress + 2;
        if (previousCommandIndex >= 0 && history[previousCommandIndex]) {
          const previousCommandValue = history[previousCommandIndex].input;
          setCommand(previousCommandValue);
        }
      } else {
        setCommand("");
        setKeyUpPress(1);
      }
    }
  };
  useEffect(() => {
    if (cursorPositionRef.current !== null) {
      const input = inputRef.current;
      if (input) {
        input.setSelectionRange(
          cursorPositionRef.current,
          cursorPositionRef.current
        );
      }
      // Clear the cursor position ref
      cursorPositionRef.current = null;
    }
  }, [command]);

  return (
    <div>
      <div
        className={cn(
          "flex flex-col  overflow-y-scroll h-full pr-2",
          isCleared && "mt-6",
          containerClassname
        )}
      >
        <div>
          {previousCommand.map((command, index) => {
            return (
              <div key={index}>
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2 ">
                    <ChevronRight className="text-green-400" />
                    <p className="text-gray-300 text-base md:text-xl">
                      {command.input}
                    </p>
                  </div>
                  <p className="text-gray-400 font-medium text-xs md:text-base">
                    {command.time}
                  </p>
                </div>
                <div className="text-gray-400 pl-8 text-base md:text-lg py-3">
                  {command?.output}
                </div>
              </div>
            );
          })}
          <div ref={lastCommandRef} />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            {isEntered ? (
              <ChevronRight className="text-green-400" />
            ) : (
              <ChevronRight className="text-white" />
            )}
            <form onSubmit={handleSubmit}>
              <input
                value={command}
                type="text"
                onKeyDown={handleKeyDown}
                onChange={handleCommand}
                className={cn(
                  "bg-transparent w-[180px] outline-none border-none text-gray-200 font-medium text-xl"
                )}
              />
            </form>
          </div>
          <p className="text-cyan-300 text-xs md:text-base">{time}</p>
        </div>
        {/* {
                    isEmpty && <p className='text-red-200'>enter a command please</p>
                } */}
      </div>
    </div>
  );
};
// <-----TERMINAL MESSAGE----->

interface TerminalMessageProps {
  children: React.ReactNode;
  className?: string;
}
const TerminalMessage: React.FC<TerminalMessageProps> = ({
  children,
  className,
}) => {
  return <div className={cn("py-3 text-white", className)}>{children}</div>;
};

// <-----TERMINAL HEADER----->

interface TerminalHeaderProps {
  dotHexColor1?: string;
  dotHexColor2?: string;
  dotHexColor3?: string;
  dotTailwindColor1?: string;
  dotTailwindColor2?: string;
  dotTailwindColor3?: string;
  heading: string;
  headingContainerClass?: string;
  headingTextClass?: string;
  terminalContainerClass?: string;
  terminalIcon?: React.ReactNode;
  terimalTextClass?: string;
  terminalType: string;
}
const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  dotTailwindColor1,
  dotTailwindColor2,
  dotTailwindColor3,
  dotHexColor1,
  dotHexColor2,
  dotHexColor3,
  terminalIcon,
  heading,
  headingTextClass,
  headingContainerClass,
  terminalType,
  terimalTextClass,
  terminalContainerClass,
}: TerminalHeaderProps) => {
  return (
    <div className={cn("flex justify-between items-center ")}>
      <div className="flex justify-center items-center gap-3">
        <motion.div
          whileHover={{ translateY: -5 }}
          className={cn(
            "bg-yellow-300 h-3 w-3 rounded-full cursor-pointer",
            dotTailwindColor1 && `${dotTailwindColor1}`,
            dotHexColor1 && `bg-[${dotHexColor1}]`
          )}
        />
        <motion.div
          whileHover={{ translateY: -5 }}
          className={cn(
            "bg-red-300 h-3 w-3 rounded-full cursor-pointer",
            dotTailwindColor2 && `${dotTailwindColor2}`,
            dotHexColor2 && `bg-[${dotHexColor2}]`
          )}
        />
        <motion.div
          whileHover={{ translateY: -5 }}
          className={cn(
            "bg-green-300 h-3 w-3 rounded-full cursor-pointer",
            dotTailwindColor3 && `${dotTailwindColor3}`,
            dotHexColor3 && `bg-[${dotHexColor3}]`
          )}
        />
      </div>
      <div className={cn(headingContainerClass)}>
        <h3 className={cn("text-cyan-400 text-lg", headingTextClass)}>
          {heading}
        </h3>
      </div>
      <div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className={cn(
            "px-3 py-1 border-gray-200/40 cursor-pointer border-solid border-[1px] rounded-sm flex justify-center items-center gap-2",
            terminalContainerClass
          )}
        >
          {terminalIcon}
          <h3 className={cn("text-yellow-300", terimalTextClass)}>
            {terminalType}
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export { TerminalHeader, TerminalMessage, Terminal, TerminalCommand };

const userCommand = [
  {
    input: "about",
    output: "I am a full stack developer and a linux lover",
    description: "About me",
  },
  {
    input: "skills",
    output:
      "react js, next js, tailwind css, node js, express js, mongodb, postgresql, graphql, typescript, docker, kubernetes, linux",
    description: "My skills",
  },
  {
    input: "education",
    output:
      "react js, next js, tailwind css, node js, express js, mongodb, postgresql, graphql, typescript, docker, kubernetes, linux",
    description: "what i do",
  },
];
const TerminalDemo = () => {
  const [isCleared, setIsCleared] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center h-[100vh] w-full px-2 ">
      <Terminal>
        <TerminalHeader
          heading="v3cn"
          terminalType="bash"
          terminalIcon={<ChevronRight size={15} className="text-red-400" />}
        />
        {!isCleared && (
          <TerminalMessage className="py-4 flex flex-col justify-evenly  md:gap-0 gap-2">
            <div className=" text-gray-400 font-semibold tracking-wide flex justify-start items-center gap-3 text-sm md:text-lg ">
              <span>👀</span>
              <span className="italic">
                {" "}
                Get started by typing `help` command below
              </span>
            </div>
            <div className="tetxt-md tracking-wider font-medium text-cyan-500 flex gap-3 mt-1text-sm md:text-lg">
              ⚠️
              <span className="text-green-400 flex justify-start items-center gap-2  italic ">
                Tip:
              </span>
              <span className="italic">use `clear` to clear the console</span>
            </div>
          </TerminalMessage>
        )}

        <TerminalCommand
          setIsCleared={setIsCleared}
          isCleared={isCleared}
          userCommand={userCommand}
        />
      </Terminal>
    </div>
  );
};

export { TerminalDemo };
