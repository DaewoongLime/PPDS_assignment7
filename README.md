# HealthyBit
## Problem Statement
After being sick recently, I realized that I have been living unhealthily.  
Changing lifestyle all at once is difficult, so I wanted to start with something small to be healthy. 

## Solution
HealthyBit helps me take care of my health in a small but meaningful way.  
Instead of trying to change everything at once, the app gives me one small action I can actually do today — whether it’s a short stretch, a breathing exercise, or a reminder to move.  

Each time I open the app, it shows:
- A **motivational health quote** to inspire me, and  
- A **simple physical habit** that I can practice right away.

By turning these small moments into daily habits, HealthyBit makes staying healthy feel easy and achievable — especially on days when I need a gentle push to take care of myself.

## API Used
- **API Name 1:** API Ninjas Quotes API
- **API Documentation**: https://api-ninjas.com/api/quotes
- **How it's used**: Fetches a daily motivational quote related to health and random physical activities to use as daily micro-habits. 

## Features
- Displays a new **motivational health quote** each time  
- Suggests a **random micro-habit (exercise)**  
- “Get New Habit” button refreshes with different random content  

## Setup Instructions
1. Clone this repository
    ```bash
    git clone https://github.com/daewoonglime/PPDS_assignment7.git
    cd PPDS_assignment7
    ```
2. Run `npm install` to install dependencies
3. Set up .env file with VITE_API_NINJAS_KEY=your_actual_api_key_here
4. Run `npm start`
5. Open [http://localhost:5173](http://localhost:5173)

## AI Assistance
I used ChatGPT 5 to help with:
- Brainstorming the initial concept
- Writing API integration logic and React hooks for data fetching
- Debugging Vite errors (.jsx import, .env, etc.)

What I learned with AI:
- How to handle loading / error states in React with useState + useEffect

Modifications made from AI generated code:
- urls for API endpoints given by AI were wrong.
- AI over-engineered stuff so had to simplify the code.

AI was helpful because:
- Helped me find the right API to use
- Wrote code that I didn't know, which led me to learn from it

## Screenshots
[](screenshot.png)

## Future Improvements
- Save each day’s habit history in localStorage
- Add “Done” button and streak counter
- Include a gentle reminder notification system