import { TransitionEvent, useEffect, useRef, useState } from "react"

export default function Home () {
  const sectionRef: {current: HTMLElement | null} = useRef(null)
  const transitionTime = 150 ; // ms
  
  // Determine si netflix est masqué de moitié
  const [isVisible, setIsVisible] = useState(false) ;

  // Lettre N
  const [nNoShadow, setNNoShadow] = useState(false) ;

  // Lettre E
  const [eLongIsVisible, setELongIsVisible] = useState(false) ;
  const [eLargTopIsVisible, setELargTopIsVisible] = useState(false) ;
  const [eLargMiddleIsVisible, setELargMiddleIsVisible] = useState(false) ;
  const [eLargBottomIsVisible, setELargBottomIsVisible] = useState(false) ;

  // Lettre T
  const [tLongIsVisible, setTLongIsVisible] = useState(false) ;
  const [tLargIsVisible, setTLargIsVisible] = useState(false) ;

  // Lettre F
  const [fLongIsVisible, setFLongIsVisible] = useState(false) ;
  const [fLargTopIsVisible, setFLargTopIsVisible] = useState(false) ;
  const [fLargMiddleIsVisible, setFLargMiddleIsVisible] = useState(false) ;

  // Lettre L
  const [lLongIsVisible, setLLongIsVisible] = useState(false) ;
  const [lLargIsVisible, setLLargIsVisible] = useState(false) ;
  
  // Lettre I
  const [ILongIsVisible, setILongIsVisible] = useState(false) ;

  // Lettre X
  const [xLongLeftIsVisible, setXLongLeftIsVisible] = useState(false) ;
  const [xLongRightIsVisible, setXLongRightIsVisible] = useState(false) ;
  
  useEffect(() => {
    sectionRef.current?.addEventListener('transitionstart', handleStart) ;

    setTimeout(() => {
      setIsVisible(true)
      setELargBottomIsVisible(true)

      setTimeout(() => {
        setELongIsVisible(true)

        setTimeout(() => {
          setELargTopIsVisible(true)

          setTimeout(() => {
            setELargMiddleIsVisible(true)

          }, transitionTime / 2);

        }, transitionTime / 1.3);

      }, transitionTime / 1.6);

    }, 500);

    return () => sectionRef.current?.removeEventListener('transitionstart', handleStart) ;
  }, [])

  // Permet de retirer l'ombre quand la transition est terminée
  function handleTransition(e: TransitionEvent<HTMLElement>) {
    const target: any = e.target ;
    const letter: HTMLElement = target.closest('.letter') ;

    target.classList.add('no-shadow');
    
    if(letter.classList.contains('e')) {
      if(target.classList.contains('e-larg-bottom')) {
        setNNoShadow(true)
      }
    }
    
  }

  function handleStart(e: any) {
    const target: any = e.target ;
    const letter: HTMLElement = target.closest('.letter') ;
    
    if(letter.classList.contains('e')) {
      
      if(target.classList.contains('e-larg-middle')) {
        setTimeout(() => {
          setTLargIsVisible(true)
          
        }, transitionTime / 2); 
      }
    }
    
    if(letter.classList.contains('t')) {

      if(target.classList.contains('t-larg-top')) {
        setTimeout(() => {
          setTLongIsVisible(true)   
        }, transitionTime / 1.8);
      }

      if(target.classList.contains('t-long')) {
        
        setTimeout(() => {
          setFLargTopIsVisible(true)
        }, transitionTime / 1.5);
      }
    }
    
    if(letter.classList.contains('f')) {

      if(target.classList.contains('f-larg-top')) {
        setTimeout(() => {
          setFLongIsVisible(true)
        }, transitionTime / 8);
      }


      if(target.classList.contains('f-long')) {
        
        setTimeout(() => {
          setLLongIsVisible(true)
        }, transitionTime / 3);
      }
    }

    if(letter.classList.contains('l')) {
      if(target.classList.contains('l-larg-bottom')) {
        setTimeout(() => {
          setILongIsVisible(true)
        }, transitionTime / 1.4);
      }

      if(target.classList.contains('l-long')) {
        
        setTimeout(() => {
          setFLargMiddleIsVisible(true)
        }, transitionTime / 2.1);

        setTimeout(() => {
          setLLargIsVisible(true)
        }, transitionTime / 1.3);

      }
    }
    
    if(letter.classList.contains('i')) {
      
      setTimeout(() => {
        setXLongLeftIsVisible(true)
      }, transitionTime / 1.8);
    }

    if(letter.classList.contains('x')) {
      if(target.classList.contains('x-long-left')) {
        setTimeout(() => {
          setXLongRightIsVisible(true)
        }, transitionTime / 1.8);
      }
    }
  }

  return (
    <main>
      <div className="netflix-container">
        <section 
          ref={sectionRef}
          onTransitionEnd={handleTransition} 
          className={`netflix ${!isVisible && 'hidden'}`}
        >
          <div className="n letter">
            <div className={`long`}></div>
            <div className={`long ${nNoShadow && 'no-shadow'}`}></div>
            <div className={`long`}></div>
          </div>
          <div className="e letter">
            <div className={`long e-long ${eLongIsVisible && 'y-scale-1'}`}></div>
            <div className={`larg-l e-larg-top ${eLargTopIsVisible && 'x-scale-1'}`}></div>
            <div className={`larg-s e-larg-middle ${eLargMiddleIsVisible && 'x-scale-1'}`}></div>
            <div className={`larg-l e-larg-bottom ${eLargBottomIsVisible && 'x-scale-1'}`}></div>
          </div>
          <div className="t letter">
            <div className={`larg-l t-larg-top ${tLargIsVisible && 'x-scale-1'}`}></div>
            <div className={`long t-long ${tLongIsVisible && 'y-scale-1'}`}></div>
          </div>
          <div className="f letter">
            <div className={`long f-long ${fLongIsVisible && 'y-scale-1'}`}></div>
            <div className={`larg-l f-larg-top ${fLargTopIsVisible && 'x-scale-1'}`}></div>
            <div className={`larg-s f-larg-middle ${fLargMiddleIsVisible && 'x-scale-1'}`}></div>
          </div>
          <div className="l letter">
            <div className={`long l-long ${lLongIsVisible && 'y-scale-1'}`}></div>
            <div className={`larg-s l-larg-bottom ${lLargIsVisible && 'x-scale-1'}`}></div>
          </div>
          <div className="i letter">
            <div className={`long ${ILongIsVisible && 'y-scale-1'}`}></div>
          </div> 
          <div className="x letter">
            <div className={`diag x-long-left ${xLongLeftIsVisible && '-y-skew-1'}`}></div>
            <div className={`diag x-long-right ${xLongRightIsVisible && 'y-skew-1'}`}></div>
          </div>
        </section>

      </div>
    </main>
  )
}