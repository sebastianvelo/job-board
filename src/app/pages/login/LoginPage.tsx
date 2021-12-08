import { background, transition } from "app/styles/Themes";

const inputStyle = `${background.secondary.get()} ${
  transition.default
} transition-width rounded-md px-4 py-1 w-52 cursor-pointer
                    hover:outline-none hover:ring-pink-300 hover:ring-2
                    focus:outline-none focus:ring-pink-300 focus:ring-2 focus:w-full`;

const buttonStyle = `${background.secondary.get()} px-4`;

export interface LoginPageProps {}

const LoginPage: React.FunctionComponent<LoginPageProps> = () => (
  <div className={`grid grid-cols-6 divide-x-2 divide-gray`}>
    <div className={`col-span-3`}>
      <h1 className={`text-center text-3xl p-4`}>Get started for free</h1>
      <div className={`grid grid-cols-2`}>
        <button className={buttonStyle}>Sign in with Google</button>
        <button>Sign in with GitHub</button>
        <button>Sign in with Linkedin</button>
        <button>Sign in with Facebook</button>
      </div>
      <div className={`text-center text-xl p-4`}>Or</div>
      <div className={`flex flex-col`}>
        <div className={`flex flex-col p-4 space-y-2`}>
          <label className={`text-xs`}>Email</label>
          <input className={inputStyle} type="email" placeholder="Email" />
        </div>
        <div className={`flex flex-col p-4 space-y-2`}>
          <label className={`text-xs`}>Password</label>
          <input
            className={inputStyle}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
    </div>
    <div className="text-center p-6">afasfa</div>
  </div>
);

export default LoginPage;
