import qrCore from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <Square />
    </div>
  );
}

function Square() {
  return (
    <div className="h-max-content p-3  pb-8 m-4 sm:w-80  bg-slate-200 rounded-2xl flex flex-col w-4/5 text-6xl">
      <Image />
      <Content />
    </div>
  );
}

function Image() {
  return (
    <div className="w-full  h-1/4 sm:h-1/4 flex ">
      <img src={qrCore} className=" rounded-xl sm:flex-1" alt="logo" />{" "}
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col flex-1 h-40  items-center pt-5">
      <h1 className="text-xl  pb-2 font-bold">Hi this is my QR card </h1>
      <p className="text-base  pt-1 text-center px-6 font-normal text-slate-500 ">
        Lorem ipsum dipsy whipsy A first challenge so to speak okay guys see you
        next time
      </p>
    </div>
  );
}

export default App;
