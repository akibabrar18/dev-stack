Project Name: Tech Stack Builder

Description: A sleek, interactive web application designed to help developers browse, select, and compile their ultimate custom technology stack. Whether you are planning a new project or just exploring tools, this application provides a seamless drag-and-drop style experience to curate your favorite tech.

Technologies Used: React, TypeScript, Tailwind CSS, Daisy UI, React icons, React Toastify

Core Features

➕ Add Technologies: Browse through a curated list of popular frameworks, libraries, and databases. Click "Add to Stack" to compile your list. The app smartly prevents duplicate entries!

❌ Remove Individual Items: Changed your mind about a specific tool? You can easily remove any individual technology from your selected stack with a single click, making it instantly available to add back later.

🗑️ Clear All at Once: Need to start fresh? Use the "Remove All" button to clear your entire selected stack instantly and return to the empty state.




Questions Answer:

1. JSX: It's basically writing HTML code inside JavaScript.

2. Props vs State: Props are things the parent gives you that you can't change. State is your own stuff that you can change whenever you want.

3. useState: It's a memory box for your app! I used it in App.tsx to remember which things we clicked to put in the stack.

4. useEffect: It does background work, like downloading data. But I didn't even use it here, I just used Suspense instead!

5. Keys in .map(): It gives each item a special nametag so React doesn't get confused when we delete something.

6. Conditional rendering: It's like an IF statement for the screen. Like, IF the stack is empty, show the "empty" text.

7. Data flow: Parents pass data down to kids using props. Kids talk back to the parents by using a function the parent gave them.