"use client";

import { useState } from "react";
import { Button } from "@/components/ui-shadcn/button";
import { Textarea } from "@/components/ui-shadcn/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui-shadcn/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui-shadcn/avatar";
import { Badge } from "@/components/ui-shadcn/badge";
import { ScrollArea } from "@/components/ui-shadcn/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "@/components/ui-shadcn/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui-shadcn/radio-group";
import { Slider } from "@/components/ui-shadcn/slider";
import { Star, ThumbsUp, ThumbsDown, Send, Smile, Meh, Frown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui-neobrutalism/select";

const products = [
  { id: 1, name: "Ergonomic Chair", image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Standing Desk", image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Wireless Keyboard", image: "/placeholder.svg?height=100&width=100" },
  { id: 4, name: "Noise-Cancelling Headphones", image: "/placeholder.svg?height=100&width=100" },
];

const existingReviews = [
  {
    id: 1,
    user: "John D.",
    rating: 4,
    comment: "Great product! Very comfortable and easy to adjust.",
    date: "2023-05-15",
    helpful: 12,
    notHelpful: 2,
  },
  {
    id: 2,
    user: "Sarah M.",
    rating: 5,
    comment: "Absolutely love it! Has improved my posture significantly.",
    date: "2023-05-10",
    helpful: 8,
    notHelpful: 1,
  },
  {
    id: 3,
    user: "Mike R.",
    rating: 3,
    comment: "Decent product, but a bit overpriced for what you get.",
    date: "2023-05-05",
    helpful: 5,
    notHelpful: 3,
  },
];

export const RenderReviewsPage = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRatingChange = (value: any) => {
    setRating(value);
  };

  const handleReviewSubmit = () => {
    // In a real application, you would send this data to your backend
    console.log("Submitting review:", { rating, review });
  };

  const renderStars = (rating: any) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
        />
      ));
  };
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Write a Review</CardTitle>
          <CardDescription>Share your thoughts on our products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Select Product</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id.toString()}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Your Rating</Label>
              <div className="flex space-x-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-8 w-8 cursor-pointer ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    onClick={() => handleRatingChange(star)}
                  />
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="review">Your Review</Label>
              <Textarea
                id="review"
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleReviewSubmit}>Submit Review</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {existingReviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{review.user}</p>
                        <div className="flex">{renderStars(review.rating)}</div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="mt-2">{review.comment}</p>
                  <div className="mt-2 flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Helpful ({review.helpful})
                    </Button>
                    <Button variant="outline" size="sm">
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      Not Helpful ({review.notHelpful})
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export const RenderFeedbackPage = () => {
  const [feedbackType, setFeedbackType] = useState("");
  const [feedbackContent, setFeedbackContent] = useState("");
  const [satisfaction, setSatisfaction] = useState(50);

  const handleFeedbackSubmit = () => {
    // In a real application, you would send this data to your backend
    console.log("Submitting feedback:", { feedbackType, feedbackContent, satisfaction });
  };

  return (
    <div>
      <CardHeader>
        <CardTitle>Send Feedback</CardTitle>
        <CardDescription>Help us improve our products and services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label>Feedback Type</Label>
            <RadioGroup value={feedbackType} onValueChange={setFeedbackType} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="suggestion" id="suggestion" />
                <Label htmlFor="suggestion">Suggestion</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="complaint" id="complaint" />
                <Label htmlFor="complaint">Complaint</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="question" id="question" />
                <Label htmlFor="question">Question</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="feedback-content">Your Feedback</Label>
            <Textarea
              id="feedback-content"
              placeholder="Describe your feedback in detail..."
              value={feedbackContent}
              onChange={(e) => setFeedbackContent(e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label>Overall Satisfaction</Label>
            <div className="flex items-center space-x-2 mt-2">
              <Slider
                value={[satisfaction]}
                onValueChange={(value) => setSatisfaction(value[0])}
                max={100}
                step={1}
              />
              <span>{satisfaction}%</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleFeedbackSubmit}>
          <Send className="h-4 w-4 mr-2" />
          Send Feedback
        </Button>
      </CardFooter>
    </div>
  );
};

export const AnimatedStarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Rate Your Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setRating(star)}
              onHoverStart={() => setHoveredRating(star)}
              onHoverEnd={() => setHoveredRating(0)}
            >
              <Star
                size={40}
                className={`cursor-pointer ${
                  star <= (hoveredRating || rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-4 text-lg font-semibold">
          {rating ? `You rated: ${rating} star${rating !== 1 ? "s" : ""}` : "Click to rate"}
        </p>
      </CardContent>
    </div>
  );
};

export const EmojiFeedback = () => {
  const [feedback, setFeedback] = useState<"positive" | "neutral" | "negative" | null>(null);
  const [comment, setComment] = useState("");

  const emojis = [
    { type: "positive", icon: Smile, color: "text-green-500" },
    { type: "neutral", icon: Meh, color: "text-yellow-500" },
    { type: "negative", icon: Frown, color: "text-red-500" },
  ];

  return (
    <div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">How was your experience?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center space-x-8 mb-6">
          {emojis.map(({ type, icon: Icon, color }) => (
            <motion.div
              key={type}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setFeedback(type as "positive" | "neutral" | "negative")}
            >
              <Icon
                size={50}
                className={`cursor-pointer ${feedback === type ? color : "text-gray-400"}`}
              />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Textarea
                placeholder="Tell us more about your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full mt-4"
              />
              <Button className="w-full mt-4">Submit Feedback</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </div>
  );
};

export const InteractiveReviewCard = () => {
  const [helpfulCount, setHelpfulCount] = useState(15);
  const [notHelpfulCount, setNotHelpfulCount] = useState(3);
  const [userVote, setUserVote] = useState<"helpful" | "not-helpful" | null>(null);

  const handleVote = (voteType: "helpful" | "not-helpful") => {
    if (userVote === voteType) {
      setUserVote(null);
      if (voteType === "helpful") {
        setHelpfulCount(helpfulCount - 1);
      } else {
        setNotHelpfulCount(notHelpfulCount - 1);
      }
    } else {
      if (userVote) {
        if (userVote === "helpful") {
          setHelpfulCount(helpfulCount - 1);
        } else {
          setNotHelpfulCount(notHelpfulCount - 1);
        }
      }
      setUserVote(voteType);
      if (voteType === "helpful") {
        setHelpfulCount(helpfulCount + 1);
      } else {
        setNotHelpfulCount(notHelpfulCount + 1);
      }
    }
  };

  return (
    <div className="w-full  mx-auto">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="font-semibold">John Doe</p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">4.0</span>
            </div>
          </div>
          <Badge variant="secondary" className="ml-auto">
            Verified Purchase
          </Badge>
        </div>
        <h3 className="font-semibold mb-2">Great product, highly recommend!</h3>
        <p className="text-gray-600 mb-4">
          This product exceeded my expectations. The quality is outstanding, and it's very easy to
          use. I've been using it for a month now, and I'm still impressed with its performance.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleVote("helpful")}
              className={userVote === "helpful" ? "bg-green-100" : ""}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              Helpful ({helpfulCount})
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleVote("not-helpful")}
              className={userVote === "not-helpful" ? "bg-red-100" : ""}
            >
              <ThumbsDown className="h-4 w-4 mr-2" />
              Not Helpful ({notHelpfulCount})
            </Button>
          </div>
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
      </CardContent>
    </div>
  );
};

export const FloatingFeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <div className="fixed bottom-5 right-5">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mb-4"
          >
            <Card className="w-72">
              <CardHeader>
                <CardTitle>Quick Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Your feedback..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full"
                />
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button size="sm" onClick={() => setIsOpen(false)}>
                  Send
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        className="bg-primary text-primary-foreground rounded-full p-4 shadow-lg mx-auto"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Send size={25} className="mr-1" />
      </motion.button>
    </div>
  );
};
