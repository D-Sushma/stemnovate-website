export const stickyHeader=()=>{let a=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0;const b=document.getElementById("header-sticky");null!==b&&(300<=a?b.classList.add("header--sticky"):b.classList.remove("header--sticky"))};export const stickyHeaderModile=()=>{let a=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0;const b=document.getElementById("header-sticky-mobile");null!==b&&(300<=a?b.classList.add("header--sticky"):b.classList.remove("header--sticky"))};export const generateTempArray=a=>{let b=[];for(let c=0;c<a;c++)b.push(c);return b};export const makeSlug=a=>(a=a.replace(/[\])}[{(]/g,""),a=a.replace(/,/g,"-"),a=a.replace(/[()\ \s-]+/g," "),a=a.replace(/\s+/g,"-"),a);export const makeRefID=a=>{for(var b="",c="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",d=c.length,e=0;e<a;e++)b+=c.charAt(Math.floor(Math.random()*d));return b};