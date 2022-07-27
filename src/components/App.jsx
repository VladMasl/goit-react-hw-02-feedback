import Feedback from "./Feedback/Feedback";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
     <Feedback />
    </div>
  );
};
