import cli1 from '../assets/cli1.png';
import cli2 from '../assets/cli2.png';
import cli3 from '../assets/cli3.png';
import cli4 from '../assets/cli4.png';

export interface ProjectImage {
  src: string[];
  description?:
    | string
    | {
        description?: string;
        problem: string;
        solution: string;
      };
}

export interface WorkingOnData {
  id: string;
  title: string;
  description?: string;
  image?: ProjectImage[];
  link?: string;
  gitLink?: string;
  tags: string[];
}

export const projects: WorkingOnData[] = [
  {
    id: '2',
    title: 'CLI Logging Agent',
    description:
      'A agent that helps you log you schedule or ideas. The idea is to have the agent to be a personal assistant, logging your schedule, send you reminders and help you with your task using web search or other resources.',
    tags: ['TypeScript', 'React', 'AI intergration', 'Evaluations', 'Open AI'],
    image: [
      { src: [cli1] },
      {
        src: [cli2],
        description: {
          description:
            'Here I was able to get the agent to successfully to log my task that I need to finish. Having the agent logging helps it store it then later to be read.',
          problem:
            "The problem that I had was the agent didn't know what tool to use or it always used the wrong tools. A tool it kept using was the read task and context search tools. Although it might be good to check for duplicates, I feel like users might have similar tasks so I don't want to confused the agent. Might do a check later down the line.",
          solution:
            'The way I fixed my problem was to adjust the prompt of the agent. I strictly told told it to go straight to the write tool if certain key words like "write" "make me" "log" and so on. This make sure the agent goes straight to writing or asking for more details instead of doing to much search.',
        },
      },
      {
        src: [cli3],
        description: {
          description:
            'Displying the agent being able to go into the database and retrieve the users logs. The agent is able to grab the ids of the logs and list them with the proper structure.',
          problem:
            'The problem I had was first was the agent was failing to write proper logs and was not able to structure them how I intended. Also I wanted the agent to confirm to update their logs before writing.',
          solution:
            "The solution was simple on this one I used multi shot prompting to fix it. I instructed the agent on how to write the logs and how to structure them. Letting the agent know that it needs to grab details from the user to write the logs under details and if the user has any problems or blockers to put them under blockers. The Ids and Date uses a simple function to creat them and all gets uploaded to the database. After that I instruct the agent to read and pull data from there and structure it how you see it in the example. Then a simple for loop so the tools that needs approval vs that doesn't need approvel.",
        },
      },
      {
        src: [cli4],
        description: {
          description:
            'Here I just wanted to display a successfull update tool with the logs that has that updated log. Also I want to show that keeping track of tokens here.',
          problem:
            "Through out the project wasn't getting the responses I wanted to felt like the agent kept hanging and wasting tokens.",
          solution:
            "Evaluations and a token counter function. Evaluating the agent to make sure the right tools are being pick depending what is ask and the right output is correct. Doing this we can adjust the agent to answer a question if ask in different ways and to tell the users I can't answer that question. Then the token counter is a simple function that I had created to help count tokens. Although its not very accurate, it is very close using resourse on model limits and tokens used. After researching I created this estimater to help kee track of tokens used. ",
        },
      },
    ],
  },
];
