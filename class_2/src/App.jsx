export const App = () => {
  return (
    <div>
      <Job salary={350} position="Full Stack Developer" company="Home Office" />
      <Job salary={1.212} position="Office Assitant" company="Celta Contabil" />
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <p>{props.salary}</p>
      <p>{props.position}</p>
      <p>{props.company}</p>
    </div>
  );
};
