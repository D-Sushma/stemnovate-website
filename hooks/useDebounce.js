import{useEffect,useState}from"react";function useDebounce(a,b){const[c,d]=useState(a);return useEffect(()=>{const c=setTimeout(()=>{d(a)},b);return()=>{clearTimeout(c)}},[a,b]),c}export default useDebounce();