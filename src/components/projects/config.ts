import taskTrack from './../../assets/image/IconProject/taskTrack.avif';
import smartCards from './../../assets/image/IconProject/smartCards.avif';
import club from './../../assets/image/IconProject/3826532.jpg';

export const stateProjects = [
  {id: 'taskTrack', title: 'Task Track', href: 'https://adammmvv.github.io/mainTodolist/#/', img: taskTrack,
    description: 'During the development of the "TaskTrack" project, React with TypeScript was used. Redux(RTK) was employed to manage the application state, providing a convenient and unified API for working with the data store. REST API was utilized for server interaction and data retrieval. As a result, the "TaskTrack" project was created, enabling users to create, edit, and delete tasks, mark them as completed, and manage their to-do list.'
  },
  {id: 'smartCard', title: 'Smart Cards', href: 'https://romanchuchval.github.io/smart-cards/#/', img: smartCards,
    description: 'Collaborative development using Git version control system. Creating custom hooks and React components. Designing project architecture (UI, BLL, DAL, Server). Complete authentication process (registration, login, password recovery). Form handling and validation. Protected routes and user redirection. Interacting with server using Ajax and RESTful APIs (CRUD operations). Pagination, search, filtering, sorting. Image uploading. Refactoring to eliminate code duplication and fix errors. Test coverage with Jest. Reusable utility functions. Modal windows. Performance optimization (useCallback, useMemo, React.memo).'
  },
  {id: 'clubNet', title: 'Computer Club Management', href: 'https://www.clubnet.pro/', img: club, description: 'Web Application for Computer Club Management Automation. Developed to simplify and automate the operations of computer clubs, effectively manage their activities, and provide convenience for their visitors. Key project features: Seat Reservation: Users can reserve seats in the club in advance through our application; Tournament Management Automation: We provide tools for hosting gaming tournaments; Gamification: To increase user engagement, including in-platform currency, a merchandise store with club-branded items. Technology Stack: React with TypeScript, state management: Zustand, backend: Firebase.'
  }
]
