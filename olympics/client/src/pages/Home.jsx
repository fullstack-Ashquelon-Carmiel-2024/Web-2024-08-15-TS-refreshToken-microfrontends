import {Button as ShadcnButton} from '../components/ui/button';

const Home = ({user}) => {
    
  return (
    <div className="">
        <h1 className="text-indigo-600 font-light text-3xl">Home, Sweet Home ...</h1>
        <h2 className="text-indigo-600 font-light text-2xl">{user.name}, welcome back!
        Your role is {user.role}</h2>
        <h3>How to install shadcn on Vite + React JS + Tailwind CSS</h3>
        <div className="flex">

            <ol className="bg-orange-400 text-indigo-950 list-decimal list-outside p-7">
                <li>There should be tsconfig.json,<br/>
                    like this.<br/>
                    Yes, ts - it's just for shadcn init to work</li>
                <li>$ npx shadcn-ui@latest init

                    <pre>{shadcnInitInputs}</pre></li>

                    <li>Now we've got

                    <pre>{finalFiles}</pre></li>
            </ol>
            <div className="code">
                <pre className="bg-slate-800 text-indigo-400 mb-6">
                    {code1}
                </pre>
                <pre className="bg-slate-800 text-indigo-400">
                    {code2}
                </pre>
            </div>
        </div>
        <h3>How to get button shadcn component</h3>
        <ShadcnButton>I am ShadcnButton</ShadcnButton>
        <ShadcnButton variant="secondary">I am Secondary ShadcnButton</ShadcnButton>
        <ShadcnButton variant="destructive">I am Destructive ShadcnButton</ShadcnButton>
        <ShadcnButton variant="outline">I am Outline ShadcnButton</ShadcnButton>
    </div>
  )
}

var code1 = `tsconfig.json:
  {
    "compilerOptions": {
      "lib": ["dom", "dom.iterable"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [
        {
          "name": "next"
        }
      ],
      "paths": {
        "@/*": ["./src/*"]
      }
    },
    "include": ["**/*.js", "**/*.tsx","**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
  }`

  var shadcnInitInputs = `Style?        Default
  Base Color?   Slate
  global css?      src/app/globals
  use CSS variables for colors? yes
  tailwind.config.js?  tailwind.config.js
  import alias for components      @/components 
  import alias for utils      @/utils 
  React Server Components? yes
  configuration to components.json? yes`

  var finalFiles = `
  -- src/components - here shadcn cli will put the new components 
  -- src/lib/utils.js - shadcn will use this to add tailwind 
     classes conditionally to shadcn components
  -- src/app/global.css - bunch of css variables for the colors
  -- components.json - all that we've chosen when set up the project
  -- tailwind.config.js - a few properties were added here, 
     we see here the usage of CSS color variables, 
     that were added to app/globals.css file like this:
  `

var code2 =`index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 243 75% 59%;
    --primary-foreground: 210 40% 98%;
    --secondary: 25 95% 53%;
    --secondary-foreground: 242 47% 34%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 228 96% 89%;
    --accent-foreground: 244 47% 20%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 27 96% 61%;
    --input: 217 96% 61%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`

export default Home