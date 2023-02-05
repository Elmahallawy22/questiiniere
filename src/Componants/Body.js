import './body.css';
import { data } from '../data';
import { useState } from 'react';

function Body() {
  const [name, setName] = useState();
  const [active, setActive] = useState(false);
  let [activistResult, setActiveResult] = useState(0);
  let [reflectorResult, setReflectorResult] = useState(0);
  let [theoristResult, setTheoristResult] = useState(0);
  let [pragmatistResult, setPragmatistResult] = useState(0);
  let num1 = 0;
  let activistArray = [2, 4, 6, 10, 17, 23, 24, 32, 34, 38, 40, 43, 45, 48, 58, 65, 71, 72, 74, 79];
  let reflectorArray = [7, 13, 15, 16, 25, 28, 29, 31, 33, 36, 39, 41, 46, 52, 55, 60, 62, 66, 67, 76];
  let theoristArray = [1, 3, 8, 12, 14, 18, 20, 22, 26, 30, 42, 47, 51, 57, 61, 63, 68, 75, 77, 78];
  let pragmatistArray = [5, 9, 11, 19, 21, 27, 35, 37, 44, 49, 50, 53, 54, 56, 59, 65, 69, 70, 73, 80];
  let array = [0];
  const select = function select(id) {
    let divTrue = document.getElementById(`divTrue${id}`)
    for (let i = 0; i < array.length; i++) {
      if (id !== array[i])
        for (let i = 0; i < 20; i++) {
          if (id === activistArray[i]) {
            setActiveResult(++activistResult);
          }
          else if (id === reflectorArray[i]) {
            setReflectorResult(++reflectorResult);
          }
          else if (id === theoristArray[i]) {
            setTheoristResult(++theoristResult);
          }
          else if (id === pragmatistArray[i]) {
            setPragmatistResult(++pragmatistResult);
          }
        }
      array.push(id)
      break;
    }
    divTrue.style.pointerEvents = 'none';
  }

  const changeTofalse = function select(id) {
    let divTrue = document.getElementById(`divTrue${id}`)
    for (let i = 0; i < array.length; i++) {
      if (id === array[i])
        for (let i = 0; i < 20; i++) {
          if (id === activistArray[i]) {
            setActiveResult(--activistResult);
          }
          else if (id === reflectorArray[i]) {
            setReflectorResult(--reflectorResult);
          }
          else if (id === theoristArray[i]) {
            setTheoristResult(--theoristResult);
          }
          else {
            setPragmatistResult(--pragmatistResult);
          }
        }
    }
    divTrue.style.pointerEvents = 'visible';
  }
  const changeToTrue = function select(id) {
    let divTrue = document.getElementById(`divTrue${id}`)
    divTrue.style.pointerEvents = 'none';
  }

  const calculator = function calculator(activistResul, reflectorResul, theoristResul, pragmatistResul) {
    if ((activistResul >= 13 && activistResul <= 20) || (reflectorResul >= 18 && reflectorResul <= 20)
      || (theoristResul >= 16 && theoristResul <= 20) || (pragmatistResul >= 17 && pragmatistResul <= 20)) {
      if (activistResul > reflectorResul && activistResul > theoristResul && activistResul > pragmatistResul) {
        return 'I have very strong preference for Activist';
      }
      else if (reflectorResul > theoristResul && reflectorResul > pragmatistResul && reflectorResul > activistArray) {
        return 'I  have very strong preference for Reflector';
      }
      else if (theoristResul > pragmatistResul) {
        return 'I have very strong preference for Theorist';
      }
      else {
        return 'I have very strong preference for Prodmatist';
      }
    }
    else if ((activistResul >= 11 && activistResul <= 12) || (reflectorResul >= 15 && reflectorResul <= 17)
      || (theoristResul >= 14 && theoristResul <= 15) || (pragmatistResul >= 15 && pragmatistResul <= 16)) {
      if (activistResul > reflectorResul && activistResul > theoristResul && activistResul > pragmatistResul) {
        return 'I have strong preference for Activist';
      }
      else if (reflectorResul > theoristResul && reflectorResul > pragmatistResul) {
        return 'I  have strong preference for Reflector';
      }
      else if (theoristResul > pragmatistResul) {
        return 'I have strong reference for Theorist';
      }
      else return 'I have strong preference for Prodmatist';
    }
    else if ((activistResul >= 7 && activistResul <= 10) || (reflectorResul >= 12 && reflectorResul <= 14)
      || (theoristResul >= 11 && theoristResul <= 13) || (pragmatistResul >= 12 && pragmatistResul <= 14)) {
      if (activistResul > reflectorResul && activistResul > theoristResul && activistResul > pragmatistResul) {
        return 'I have a moderate preference for Activist';
      }
      else if (reflectorResul > theoristResul && reflectorResul > pragmatistResul) {
        return 'I  have a moderate preference for Reflector';
      }
      else if (theoristResul > pragmatistResul) {
        return 'I have a moderate reference for Theorist';
      }
      else return 'I have a moderate preference for Prodmatist';
    }
    else if ((activistResul >= 4 && activistResul <= 6) || (reflectorResul >= 9 && reflectorResul <= 11)
      || (theoristResul >= 8 && theoristResul <= 10) || (pragmatistResul >= 9 && pragmatistResul <= 11)) {
      if (activistResul > reflectorResul && activistResul > theoristResul && activistResul > pragmatistResul) {
        return 'I have a low preference for Activist';
      }
      else if (reflectorResul > theoristResul && reflectorResul > pragmatistResul) {
        return 'I  have a low preference for Reflector';
      }
      else if (theoristResul > pragmatistResul) {
        return 'I have a low reference for Theorist';
      }
      else return 'I have a low preference for Prodmatist';
    }
    else if ((activistResul >= 1 && activistResul <= 3) || (reflectorResul >= 1 && reflectorResul <= 8)
      || (theoristResul >= 1 && theoristResul <= 7) || (pragmatistResul >= 1 && pragmatistResul <= 8)) {
      if (activistResul > reflectorResul && activistResul > theoristResul && activistResul > pragmatistResul) {
        return 'I have a very low preference for Activist';
      }
      else if (reflectorResul > theoristResul && reflectorResul > pragmatistResul) {
        return 'I  have a very low preference for Reflector';
      }
      else if (theoristResul > pragmatistResul) {
        return 'I have a very low reference for Theorist';

      }
      else return 'I have a very low preference for Prodmatist';
    }
    else return 'You are not Enter Any Answer';
  }
  return (
    <div className='pe-5 ps-5 pb-5 bodyy'>
      <h1 className="text-center body-head">QUESTIONS</h1>
      <form className='pe-4 ps-4 mb-5' onSubmit={(e) => {
        e.preventDefault();
      }}  >
        <div className="mb-3">
          <label htmlFor="namePerson" className=" fs-3 ms-3 ">Please Enter your Name</label>
          <input type="text" className="form-control fs-3" id="namePerson" aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </form>
      {
        data.map((item) => {
          return (
            <>
              <div className='question' key={item.id} >
                <p className='pb-1'>{item.id} -  {item.question}</p>
                <div id={`divTrue${item.id}`}>
                  <input type='radio'
                    name={`select${item.id}`}
                    id={`true${item.id}`}
                    value='true'
                    onChange={() => { changeToTrue(item.id) }}
                  />
                  <label className='ms-2 text-success' htmlFor={`true${item.id}`}
                    onClick={() => { select(item.id) }}
                  >
                    True</label>
                </div>
                <div >
                  <input type='radio'
                    name={`select${item.id}`}
                    id={`false${item.id}`}
                    value='false'
                    onChange={() => { changeTofalse(item.id) }}
                  />
                  <label className='ms-2 text-danger' htmlFor={`false${item.id}`}
                  >
                    False</label>
                </div>
              </div>
            </>
          )
        })
      }
      <div className='text-end pe-5 pt-3 pb-5'>
        <button type="button" className="btn btn-success fs-2" onClick={() => {
          setActive(true);
        }}>Confirm</button>
      </div>
      <div>
        {
          active ? (
            <div className="alert alert-primary " role="alert">
              <h1>Hallo {name}!</h1>
              <br />
              <div className='text-center'>
                <p className='fs-1'>{calculator(activistResult, reflectorResult, theoristResult, pragmatistResult)}</p>
              </div>
              <div className='text-end pe-5 pt-3 pb-5'>
                <button type="button" className="btn btn-success fs-2" onClick={() => {
                  setActive(false);
                }}>Cancel</button>
              </div>
            </div>
          ) :
            <></>
        }
      </div>
    </div>
  )
}
export default Body;