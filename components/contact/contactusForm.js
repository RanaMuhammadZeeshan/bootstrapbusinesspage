import {
  faEnvelope,
  faHome,
  faPencilAlt,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactusForm() {
  return (
    <form>
      <div className='row'>
        <div className='col-12 col-sm-6'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <div className='input-group'>
              <span className='input-group-text'>
                <FontAwesomeIcon icon={faUser} className='fas' />
              </span>
              <input
                type={'text'}
                className='form-control'
                id='name'
                placeholder='Name'
                required
              />
            </div>
          </div>
        </div>

        <div className='col-12 col-sm-6'>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <div className='input-group'>
              <span className='input-group-text'>
                <FontAwesomeIcon icon={faEnvelope} className='fas' />
              </span>
              <input
                type={'email'}
                className='form-control'
                id='email'
                placeholder='example@email.com'
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-12 col-sm-6'>
          <div className='mb-3'>
            <label htmlFor='telephone' className='form-label'>
              Telephone
            </label>
            <div className='input-group'>
              <span className='input-group-text'>
                <FontAwesomeIcon icon={faPhone} className='fas' />
              </span>
              <input
                type={'tel'}
                className='form-control'
                id='telephone'
                placeholder='+1234567890'
              />
            </div>
          </div>
        </div>

        <div className='col-12 col-sm-6'>
          <div className='mb-3'>
            <label htmlFor='department' className='form-label'>
              Department:
            </label>
            <div className='input-group'>
              <span className='input-group-text'>
                <FontAwesomeIcon icon={faHome} className='fas' />
              </span>
              <select
                id='department'
                className='form-select'
                name='department'
                aria-describedby='department-help-block'
                required
              >
                <option value={''}>-Select here-</option>
                <option value={'business'}>Business</option>
                <option value={'sale'}>Sale</option>
                <option value={'suppport'}>Support</option>
              </select>
            </div>
            <small id='department-help-block' className='form-text'>
              Please select the recipient of your message.
            </small>
          </div>
        </div>
      </div>

      <div className='mb-3'>
        <label htmlFor='message' className='form-label'>
          Message:
        </label>
        <div className='input-group'>
          <span className='input-group-text'>
            <FontAwesomeIcon icon={faPencilAlt} className='fas' />
          </span>
          <textarea
            id='message'
            className='form-control'
            rows='5'
            name='message'
            placeholder='Write your message here...'
            required
          />
        </div>
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
      <button className='btn btn-secondary ms-1' type='reset'>
        Reset
      </button>
    </form>
  )
}

export default ContactusForm
