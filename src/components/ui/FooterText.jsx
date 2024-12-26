const FooterText = ({ is_white }) => {
  return (
    <div className="self-center">
      {is_white ? (
        <p className="text-third text-sm">
          Cedar Connect 
          <span className="text-xs font-thin text-third">
             {" "}All rights reserved. Copyright 2024
          </span>
        </p>
      ) : (
        <p className="text-primary">
          Cedar Connect
          <span className="text-xs font-thin text-primary">
            All rights reserved. Copyright 2024
          </span>
        </p>
      )}
    </div>
  );
};

export default FooterText;
