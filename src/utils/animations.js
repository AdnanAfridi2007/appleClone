export const animateWithGsapTimeLine = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
   timeline.to(rotationRef.current.rotation, {
    y:rotationState,
    duration:1,
    ease: 'power2.inout',
   }) 

   timeline.to(firstTarget,
    {
        ...animationProps,
        ease: 'power2.inout',
    },
    '<'
   )
   timeline.to(secondTarget,
    {
        ...animationProps,
        ease: 'power2.inout',
    },
    '<'
   )
}