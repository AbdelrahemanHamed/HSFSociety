
// import { motion, useInView, useScroll, useTransform } from "framer-motion";


// const container = useRef(null);
  // const [maxScrollY, setMaxScrollY] = useState(Infinity);
  // // Get scroll progress
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"], // You can adjust the offsets as needed
  // });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  // const vertMargin = 10;

  // const isInView = useInView(container, {
  //   margin: `0px 0px -${100 - vertMargin}px`, // Correctly formatted margin
  //   once: true,
  // });

  // useEffect(() => {
  //   if (isInView) {
  //     scrollYProgress.onChange((latest) => {
  //       setMaxScrollY(latest);
  //     });
  //   }
  // }, [isInView, scrollYProgress]);
