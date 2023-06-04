import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserSinup  } from '../redux/action/sinupAction';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [preferredCurrency, setPreferredCurrency] = useState('');

  const dispatch = useDispatch();
  const { error, status } = useSelector((state: any) => state.signup);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password,
      gender,
      preferred_language: preferredLanguage,
      preferred_currency: preferredCurrency
    };

    dispatch(UserSinup (userData))
      .then(() => {
        console.log('Signup successful');
        navigate('/OTPForm');
      })
      .catch((error:any) => {
        console.log('Signup error:', error);
        // Handle error, e.g., display an error message to the user
      });
  };

  return (
    <div>
      {status === 'loading' && (
        <div className="bg-white text-black p-2 font-extrabold">
          Loading...
        </div>
      )}
      {status === 'failed' && (
        <div className="bg-red-500 text-tatans p-2 font-extrabold py-2 px-4 focus:outline-none focus:shadow-outline w-fit">
          {error}
        </div>
      )}
      <div className="mt-1 decoration-0 p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              type="text"
              placeholder="Enter your gender"
              value={gender}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) => setGender(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="preferredLanguage">
              Preferred Language
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredLanguage"
              type="text"
              placeholder="Enter your preferred language"
              value={preferredLanguage}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPreferredLanguage(event.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="preferredCurrency">
              Preferred Currency
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="preferredCurrency"
              type="text"
              placeholder="Enter your preferred currency"
              value={preferredCurrency}
              required
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPreferredCurrency(event.target.value)
              }
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-titans hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
