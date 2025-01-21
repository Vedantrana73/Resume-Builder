import { BiEnvelope, BiKey } from 'react-icons/bi';
import { Link} from 'react-router-dom';
function Register() {
  return (
    <div>
      <form className='flex flex-col items-center space-y-6'>
        <h1 className='text-3xl font-bold text-center pb-5'>Register</h1>

        <label className="input input-bordered flex items-center gap-4 w-full md:max-w-md">
          <span className='text-xl'>
            <BiEnvelope />
          </span>
          <input type="email" name="email" className="grow w-full" placeholder="Email" autoFocus />
        </label>

        <label className="input input-bordered flex items-center gap-4 w-full md:max-w-md">
          <span className='text-xl'>
            <BiKey />
          </span>
          <input type="password" name="password" className="grow w-full" placeholder='Password' />
        </label>

        <label className="input input-bordered flex items-center gap-4 w-full md:max-w-md">
          <span className='text-xl'>
            <BiKey />
          </span>
          <input type="password" name="confirmPassword" className="grow w-full" placeholder='Confirm Password' />
        </label>

        <div className='text-lg'>
          <span>Already have an account? Login </span>
          <span className='text-accent font-semibold'>
            <Link to='/login'>
              Here
            </Link>
          </span>
        </div>

        <div>
          <button type="submit" className='btn btn-outline px-7 text-lg flex'>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
