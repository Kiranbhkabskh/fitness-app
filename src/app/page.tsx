"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Moon,
  Sun,
  Droplets,
  Dumbbell,
  Flame,
  CheckCircle2,
} from "lucide-react";

export default function FitnessRoutineChecklistApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [water, setWater] = useState("");
  const [steps, setSteps] = useState("");
  const [weight, setWeight] = useState("92");
  const [waist, setWaist] = useState("");

  const [completed, setCompleted] = useState<
    Record<string, boolean>
  >({});

  const routine = [
    {
      time: "6:00 AM",
      title: "Wake Up & Hydration",
      tasks: ["Drink 300–500ml water"],
    },
    {
      time: "6:15 AM",
      title: "Detox Drink",
      tasks: [
        "Fenugreek seeds",
        "100ml Storia coconut water",
        "Turmeric root",
        "Basil leaves",
        "Mint leaves",
        "Jeera",
        "Ginger root",
        "Quarter lemon",
        "1 tsp honey",
      ],
    },
    {
      time: "6:40 AM",
      title: "ABC Juice",
      tasks: [
        "1 amla",
        "1 carrot",
        "Quarter beetroot",
        "Quarter pomegranate",
        "Mint leaves",
        "Half lemon",
        "Make pulp patty with oregano, chilli flakes & peri peri",
      ],
    },
    {
      time: "7:15 AM",
      title: "Gym Workout",
      tasks: [
        "30 mins treadmill incline walk",
        "10 mins cross trainer",
        "Strength training – 2 muscles",
        "4 exercises",
        "3 sets each",
        "Compound lifts 8–12 reps",
        "Isolation lifts 12–15 reps",
        "Drink 750ml water + 5g creatine",
      ],
    },
    {
      time: "8:45 AM",
      title: "Post Workout",
      tasks: ["1 scoop whey protein"],
    },
    {
      time: "9:15 AM",
      title: "Breakfast",
      tasks: [
        "60g Pintola chocolate oats",
        "3 tbsp Greek yogurt",
        "5g chia seeds",
        "5g pumpkin seeds",
        "5g flax seeds",
        "ABC pulp patty",
      ],
    },
    {
      time: "11:30 AM",
      title: "Mid-Morning Snack",
      tasks: ["1 guava or 1 orange"],
    },
    {
      time: "1:30 PM",
      title: "Lunch",
      tasks: [
        "3 bajra roti",
        "150ml curd",
        "100g mixed vegetables",
        "1 bowl sambar",
      ],
    },
    {
      time: "4:30 PM",
      title: "Hydration",
      tasks: ["Drink water", "Optional lemon + salt water"],
    },
    {
      time: "6:00 PM",
      title: "Evening Snack",
      tasks: [
        "2 whole boiled eggs",
        "2 egg whites",
        "Salt & chilli powder",
      ],
    },
    {
      time: "8:30 PM",
      title: "Dinner",
      tasks: [
        "220g chicken breast",
        "250g vegetables",
        "1 tsp olive oil",
        "5g white sesame seeds",
        "Oregano & chilli flakes",
        "Air fry properly",
      ],
    },
    {
      time: "9:30 PM",
      title: "Recovery",
      tasks: [
        "5–10 mins stretching",
        "Reduce screen brightness",
        "Hydrate properly",
      ],
    },
    {
      time: "10:00 PM",
      title: "Sleep",
      tasks: ["Sleep 7.5–8 hours"],
    },
  ];

  const totalTasks = routine.reduce(
    (acc, item) => acc + item.tasks.length,
    0
  );

  const completedTasks =
    Object.values(completed).filter(Boolean).length;

  const progress = Math.round(
    (completedTasks / totalTasks) * 100
  );

  const toggleTask = (key: string) => {
    setCompleted((prev: Record<string, boolean>) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className={`min-h-screen p-6 transition-all ${
        darkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Fitness Transformation Dashboard
            </h1>

            <p className="opacity-70 mt-2">
              92kg → 80kg Fat Loss & Muscle Retention Plan
            </p>
          </div>

          <Button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-2xl"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 />
                <h2 className="font-semibold text-lg">
                  Daily Progress
                </h2>
              </div>

              <Progress value={progress} className="mb-3" />

              <p>{progress}% Completed</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Droplets />
                <h2 className="font-semibold text-lg">
                  Water Intake
                </h2>
              </div>

              <Input
                placeholder="Liters consumed"
                value={water}
                onChange={(e) =>
                  setWater(e.target.value)
                }
              />
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Flame />
                <h2 className="font-semibold text-lg">
                  Daily Steps
                </h2>
              </div>

              <Input
                placeholder="Steps walked"
                value={steps}
                onChange={(e) =>
                  setSteps(e.target.value)
                }
              />
            </CardContent>
          </Card>

          <Card className="rounded-3xl shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Dumbbell />
                <h2 className="font-semibold text-lg">
                  Body Tracking
                </h2>
              </div>

              <div className="space-y-2">
                <Input
                  placeholder="Weight (kg)"
                  value={weight}
                  onChange={(e) =>
                    setWeight(e.target.value)
                  }
                />

                <Input
                  placeholder="Waist (cm)"
                  value={waist}
                  onChange={(e) =>
                    setWaist(e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {routine.map((item, index) => (
            <Card
              key={index}
              className="rounded-3xl shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="opacity-70 text-lg">
                      {item.time}
                    </p>
                  </div>

                  <div className="text-3xl">✅</div>
                </div>

                <div className="space-y-3">
                  {item.tasks.map(
                    (task, taskIndex) => {
                      const taskKey = `${index}-${taskIndex}`;

                      return (
                        <label
                          key={taskIndex}
                          className={`flex items-center gap-4 rounded-2xl p-4 cursor-pointer transition-all ${
                            completed[taskKey]
                              ? "bg-green-100 line-through"
                              : "bg-gray-100 hover:bg-gray-200"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={
                              completed[taskKey] ||
                              false
                            }
                            onChange={() =>
                              toggleTask(taskKey)
                            }
                            className="w-5 h-5"
                          />

                          <span className="text-lg">
                            {task}
                          </span>
                        </label>
                      );
                    }
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}