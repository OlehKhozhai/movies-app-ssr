import { RefObject, useEffect, useState } from 'react';

type Props = {
  ref: RefObject<HTMLElement>;
  handler?: keyof GlobalEventHandlersEventMap;
  closeOnOutsideClick?: boolean;
  callback?: () => void;
};

const useClickOutside = ({
  ref,
  callback,
  handler = 'click',
  closeOnOutsideClick = true,
}: Props) => {
  const [isClickOutside, setClickOutside] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (e: any) => {
      const targetIsValid = e.target && document.contains(e.target);
      if (ref && ref.current && targetIsValid) {
        const isClickOnRef = ref.current.contains(e.target);

        if (!isClickOnRef && closeOnOutsideClick) {
          setClickOutside(true);
          if (callback) {
            callback();
          }
        }
      }
    };

    if (ref?.current) {
      document.addEventListener(handler, handleClick);
    }
    return () => {
      document.removeEventListener(handler, handleClick);
    };
  }, [handler, ref, closeOnOutsideClick, callback]);

  return [isClickOutside];
};

export default useClickOutside;
