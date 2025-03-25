import { Tweet } from 'react-tweet';

interface FeedbackProps {
  tweetIds: string[];
}

export const Feedback = ({ tweetIds }: FeedbackProps) => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweetIds.map(tweetId => (
            <div key={tweetId} className="flex justify-center">
              <Tweet id={tweetId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
