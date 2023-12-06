export const Header = () => {
  return (
    <header className="flex justify-between p-6 ">
      <div className="flex gap-4 items-center">
        <div className="font-bold text-white">Digicommerece</div>
        <div>Browse All</div>
      </div>
      <div className="flex gap-4 items-center">
        <div>Sign in</div>
        <div>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
};
