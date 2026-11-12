import{g as $a,t as Tr,a as _r,c as lu,u as ac,m as Hs,e as Za,b as cu}from"./index-TadhbB0u.js";const ma="187",uu=0,Ka=1,du=2,vr=1,hu=2,vs=3,xi=0,en=1,on=2,_i=0,Ss=1,Ar=2,Ja=3,Qa=4,fu=5,Hi=100,pu=101,mu=102,gu=103,_u=104,vu=200,xu=201,Mu=202,Su=203,lc=204,cc=205,yu=206,Eu=207,bu=208,wu=209,Tu=210,Au=211,Ru=212,Cu=213,Pu=214,wo=0,To=1,Ao=2,Ts=3,Ro=4,Co=5,Po=6,Lo=7,ga=0,Lu=1,Du=2,qn=0,_a=1,va=2,xa=3,zr=4,Ma=5,Sa=6,ya=7,uc=300,Yi=301,As=302,qr=303,Yr=304,Rr=1e3,Xn=1001,Do=1002,Vt=1003,Iu=1004,ks=1005,an=1006,$r=1007,si=1008,dn=1009,dc=1010,hc=1011,Rs=1012,Ea=1013,Un=1014,En=1015,tn=1016,ba=1017,wa=1018,$i=1020,fc=35902,pc=35899,mc=1021,gc=1022,Dn=1023,oi=1026,ri=1027,Ta=1028,Aa=1029,Mi=1030,Ra=1031,Ca=1033,xr=33776,Mr=33777,Sr=33778,yr=33779,Io=35840,No=35841,Uo=35842,Fo=35843,Oo=36196,Bo=37492,zo=37496,Go=37488,Ho=37489,Cr=37490,ko=37491,Vo=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,$o=37813,Zo=37814,Ko=37815,Jo=37816,Qo=37817,jo=37818,ea=37819,ta=37820,na=37821,ia=36492,sa=36494,ra=36495,oa=36283,aa=36284,Pr=36285,la=36286,Nu=3200,Lr=0,Uu=1,ii="",Zt="srgb",Dr="srgb-linear",Ir="linear",xt="srgb",Zr=7680,Fu=519,Ou=512,Bu=513,zu=514,_c=515,Gu=516,Hu=517,vc=518,xc=519,ku=35044,Pa=35048,ja="300 es",bn=2e3,Cs=2001;function Vu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wu(){const i=Nr("canvas");return i.style.display="block",i}const el={};function tl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Mc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=Mc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function _t(...i){i=Mc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Er(...i){const e=i.join(" ");e in el||(el[e]=!0,je(...i))}function Xu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qu={[wo]:wo,[Ao]:Po,[Ro]:Ro,[Ts]:Co,[To]:To,[Po]:Ao,[Lo]:Lo,[Co]:Ts};class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const ys=Math.PI/180,Ps=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function La(i,e){return(i%e+e)%e}function Yu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $u(i,e,t){return i!==e?(t-i)/(e-i):0}function Es(i,e,t){return(1-t)*i+t*e}function Zu(i,e,t,n){return Es(i,e,1-Math.exp(-t*n))}function Ku(i,e=1){return e-Math.abs(La(i,e*2)-e)}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ju(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ed(i,e){return i+Math.random()*(e-i)}function td(i){return i*(.5-Math.random())}function nd(i){i!==void 0&&(nl=i);let e=nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function id(i){return i*ys}function sd(i){return i*Ps}function rd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ad(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*d,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*_,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*_,a*l);break;case"ZYZ":i.set(c*_,c*f,a*u,a*l);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Da(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yc(i,e){if(e.constructor===Float32Array)return i;const t=Da(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ec(i,e){if(e.constructor===Float32Array)return i;const t=Da(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Rt={DEG2RAD:ys,RAD2DEG:Ps,generateUUID:Ei,clamp:lt,euclideanModulo:La,mapLinear:Yu,inverseLerp:$u,lerp:Es,damp:Zu,pingpong:Ku,smoothstep:Ju,smootherstep:Qu,randInt:ju,randFloat:ed,randFloatSpread:td,seededRandom:nd,degToRad:id,radToDeg:sd,isPowerOfTwo:rd,ceilPowerOfTwo:od,floorPowerOfTwo:Sc,setQuaternionFromProperEuler:ad,normalize:Ec,denormalize:yc},Va=class Va{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Va.prototype.isVector2=!0;let Re=Va;class Ht{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],_=r[o+2],x=r[o+3];if(d!==x||c!==h||l!==f||u!==_){let p=c*h+l*f+u*_+d*x;p<0&&(h=-h,f=-f,_=-_,x=-x,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),w=Math.sin(M);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w,c=c*m+h*a,l=l*m+f*a,u=u*m+_*a,d=d*m+x*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+_*a,d=d*m+x*a;const M=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=M,l*=M,u*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*d+c*f-l*h,e[t+1]=c*_+u*h+l*d-a*f,e[t+2]=l*_+u*f+a*h-c*d,e[t+3]=u*_-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),h=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"YZX":this._x=h*u*d+l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d-h*f*_;break;case"XZY":this._x=h*u*d-l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d+h*f*_;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wa=class Wa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wa.prototype.isVector3=!0;let A=Wa;const Kr=new A,il=new Ht,Xa=class Xa{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],x=s[0],p=s[3],m=s[6],M=s[1],w=s[4],S=s[7],P=s[2],T=s[5],v=s[8];return r[0]=o*x+a*M+c*P,r[3]=o*p+a*w+c*T,r[6]=o*m+a*S+c*v,r[1]=l*x+u*M+d*P,r[4]=l*p+u*w+d*T,r[7]=l*m+u*S+d*v,r[2]=h*x+f*M+_*P,r[5]=h*p+f*w+_*T,r[8]=h*m+f*S+_*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,_=t*d+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xa.prototype.isMatrix3=!0;let it=Xa;const Jr=new it,sl=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){const i={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Dr]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:sl,fromXYZ:rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}const dt=ld();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class cd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Nr("canvas")),Ai.width=e.width,Ai.height=e.height;const s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class Ia{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qr(s[o].image)):r.push(Qr(s[o]))}else r=Qr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let dd=0;const jr=new A;class Kt extends yi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Xn,s=Xn,r=an,o=si,a=Dn,c=dn,l=Kt.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Ei(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jr).x}get height(){return this.source.getSize(jr).y}get depth(){return this.source.getSize(jr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=uc;Kt.DEFAULT_ANISOTROPY=1;const qa=class qa{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],_=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,S=(f+1)/2,P=(m+1)/2,T=(u+h)/4,v=(d+x)/4,g=(_+p)/4;return w>S&&w>P?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=v/n):S>P?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=g/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=v/r,s=g/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-x)/M,this.z=(h-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qa.prototype.isVector4=!0;let Tt=qa;class hd extends yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends hd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bc extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Br=class Br{constructor(e,t,n,s,r,o,a,c,l,u,d,h,f,_,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,h,f,_,x,p)}set(e,t,n,s,r,o,a,c,l,u,d,h,f,_,x,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Br().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,_=a*u,x=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=h-x*l,t[9]=-a*c,t[2]=x-h*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,_=l*u,x=l*d;t[0]=h+x*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=x+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,_=l*u,x=l*d;t[0]=h-x*a,t[4]=-o*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,_=a*u,x=a*d;t[0]=c*u,t[4]=_*l-f,t[8]=h*l+x,t[1]=c*d,t[5]=x*l+h,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=x-h*d,t[8]=_*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+_,t[10]=h-x*d}else if(e.order==="XZY"){const h=o*c,f=o*l,_=a*c,x=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+x,t[5]=o*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Qn.crossVectors(n,cn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Qn.crossVectors(n,cn)),Qn.normalize(),Vs.crossVectors(cn,Qn),s[0]=Qn.x,s[4]=Vs.x,s[8]=cn.x,s[1]=Qn.y,s[5]=Vs.y,s[9]=cn.y,s[2]=Qn.z,s[6]=Vs.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],x=n[6],p=n[10],m=n[14],M=n[3],w=n[7],S=n[11],P=n[15],T=s[0],v=s[4],g=s[8],D=s[12],E=s[1],U=s[5],C=s[9],B=s[13],N=s[2],V=s[6],Y=s[10],I=s[14],X=s[3],H=s[7],z=s[11],q=s[15];return r[0]=o*T+a*E+c*N+l*X,r[4]=o*v+a*U+c*V+l*H,r[8]=o*g+a*C+c*Y+l*z,r[12]=o*D+a*B+c*I+l*q,r[1]=u*T+d*E+h*N+f*X,r[5]=u*v+d*U+h*V+f*H,r[9]=u*g+d*C+h*Y+f*z,r[13]=u*D+d*B+h*I+f*q,r[2]=_*T+x*E+p*N+m*X,r[6]=_*v+x*U+p*V+m*H,r[10]=_*g+x*C+p*Y+m*z,r[14]=_*D+x*B+p*I+m*q,r[3]=M*T+w*E+S*N+P*X,r[7]=M*v+w*U+S*V+P*H,r[11]=M*g+w*C+S*Y+P*z,r[15]=M*D+w*B+S*I+P*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],x=e[7],p=e[11],m=e[15],M=c*f-l*h,w=a*f-l*d,S=a*h-c*d,P=o*f-l*u,T=o*h-c*u,v=o*d-a*u;return t*(x*M-p*w+m*S)-n*(_*M-p*P+m*T)+s*(_*w-x*P+m*v)-r*(_*S-x*T+p*v)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],x=e[13],p=e[14],m=e[15],M=t*a-n*o,w=t*c-s*o,S=t*l-r*o,P=n*c-s*a,T=n*l-r*a,v=s*l-r*c,g=u*x-d*_,D=u*p-h*_,E=u*m-f*_,U=d*p-h*x,C=d*m-f*x,B=h*m-f*p,N=M*B-w*C+S*U+P*E-T*D+v*g;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/N;return e[0]=(a*B-c*C+l*U)*V,e[1]=(s*C-n*B-r*U)*V,e[2]=(x*v-p*T+m*P)*V,e[3]=(h*T-d*v-f*P)*V,e[4]=(c*E-o*B-l*D)*V,e[5]=(t*B-s*E+r*D)*V,e[6]=(p*S-_*v-m*w)*V,e[7]=(u*v-h*S+f*w)*V,e[8]=(o*C-a*E+l*g)*V,e[9]=(n*E-t*C-r*g)*V,e[10]=(_*T-x*S+m*M)*V,e[11]=(d*S-u*T-f*M)*V,e[12]=(a*D-o*U-c*g)*V,e[13]=(t*U-n*D+s*g)*V,e[14]=(x*w-_*P-p*M)*V,e[15]=(u*P-d*w+h*M)*V,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,_=r*d,x=o*u,p=o*d,m=a*d,M=c*l,w=c*u,S=c*d,P=n.x,T=n.y,v=n.z;return s[0]=(1-(x+m))*P,s[1]=(f+S)*P,s[2]=(_-w)*P,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(h+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(_+w)*v,s[9]=(p-M)*v,s[10]=(1-(h+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),c=Ri.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);const l=1/o,u=1/a,d=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=bn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let _,x;if(c)_=r/(o-r),x=o*r/(o-r);else if(a===bn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Cs)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=bn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let _,x;if(c)_=1/(o-r),x=o/(o-r);else if(a===bn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===Cs)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Br.prototype.isMatrix4=!0;let mt=Br;const Ri=new A,xn=new mt,pd=new A(0,0,0),md=new A(1,1,1),Qn=new A,Vs=new A,cn=new A,ol=new mt,al=new Ht;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gd=0;const ll=new A,Ci=new Ht,zn=new mt,Ws=new A,cs=new A,_d=new A,vd=new Ht,cl=new A(1,0,0),ul=new A(0,1,0),dl=new A(0,0,1),hl={type:"added"},xd={type:"removed"},Pi={type:"childadded",child:null},eo={type:"childremoved",child:null};class wt extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new A,t=new Fn,n=new Ht,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new it}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(cs,Ws,this.up):zn.lookAt(Ws,cs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(zn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd),eo.child=e,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new A(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function no(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=La(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=no(o,r,e+1/3),this.g=no(o,r,e),this.b=no(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=Tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return dt.workingToColorSpace($t.copy(this),e),Math.round(lt($t.r*255,0,255))*65536+Math.round(lt($t.g*255,0,255))*256+Math.round(lt($t.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Zt){dt.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Xs);const n=Es(jn.h,Xs.h,t),s=Es(jn.s,Xs.s,t),r=Es(jn.l,Xs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Qe;Qe.NAMES=Tc;class Gr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new Gr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ac extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mn=new A,Gn=new A,io=new A,Hn=new A,Li=new A,Di=new A,fl=new A,so=new A,ro=new A,oo=new A,ao=new Tt,lo=new Tt,co=new Tt;class yn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mn.subVectors(s,t),Gn.subVectors(n,t),io.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Gn),c=Mn.dot(io),l=Gn.dot(Gn),u=Gn.dot(io),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,_=(o*u-a*c)*h;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ao.setScalar(0),lo.setScalar(0),co.setScalar(0),ao.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,n),co.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ao,r.x),o.addScaledVector(lo,r.y),o.addScaledVector(co,r.z),o}static isFrontFacing(e,t,n,s){return Mn.subVectors(n,t),Gn.subVectors(e,t),Mn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Mn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Li.subVectors(s,n),Di.subVectors(r,n),so.subVectors(e,n);const c=Li.dot(so),l=Di.dot(so);if(c<=0&&l<=0)return t.copy(n);ro.subVectors(e,s);const u=Li.dot(ro),d=Di.dot(ro);if(u>=0&&d<=u)return t.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0&&c-u>0)return o=c/(c-u),t.copy(n).addScaledVector(Li,o);oo.subVectors(e,r);const f=Li.dot(oo),_=Di.dot(oo);if(_>=0&&f<=_)return t.copy(r);const x=f*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Di,a);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return fl.subVectors(r,s),a=(d-u)/(d-u+(f-_)),t.copy(s).addScaledVector(fl,a);const m=1/(p+x+h);return o=x*m,a=h*m,t.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(e.matrixWorld),this.union(qs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(us),Ys.subVectors(this.max,us),Ii.subVectors(e.a,us),Ni.subVectors(e.b,us),Ui.subVectors(e.c,us),ei.subVectors(Ni,Ii),ti.subVectors(Ui,Ni),hi.subVectors(Ii,Ui);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-hi.z,hi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,hi.z,0,-hi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-hi.y,hi.x,0];return!uo(t,Ii,Ni,Ui,Ys)||(t=[1,0,0,0,1,0,0,0,1],!uo(t,Ii,Ni,Ui,Ys))?!1:($s.crossVectors(ei,ti),t=[$s.x,$s.y,$s.z],uo(t,Ii,Ni,Ui,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new A,new A,new A,new A,new A,new A,new A,new A],Sn=new A,qs=new bi,Ii=new A,Ni=new A,Ui=new A,ei=new A,ti=new A,hi=new A,us=new A,Ys=new A,$s=new A,fi=new A;function uo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);const a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),c=e.dot(fi),l=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ut=new A,Zs=new Re;let Sd=0;class $n extends yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ku,this.updateRanges=[],this.gpuType=En,this.version=0,this._normalizationScale=e!==void 0?Da(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ec(e,this.array)}}class Rc extends $n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cc extends $n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends $n{constructor(e,t,n){super(new Float32Array(e),t,n)}}const yd=new bi,ds=new A,ho=new A;class li{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(ho)),this.expandByPoint(ds.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ed=0;const fn=new mt,fo=new wt,Fi=new A,un=new bi,hs=new bi,zt=new A;class Wt extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vu(e)?Cc:Rc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(un.min,hs.min),un.expandByPoint(zt),zt.addVectors(un.max,hs.max),un.expandByPoint(zt)):(un.expandByPoint(hs.min),un.expandByPoint(hs.max))}un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zt.fromBufferAttribute(a,l),c&&(Fi.fromBufferAttribute(e,l),zt.add(Fi)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $n(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[],l=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new A,c[D]=new A;const u=new A,d=new A,h=new A,f=new Re,_=new Re,x=new Re,p=new A,m=new A;function M(D,E,U){l[D]=l[E]=l[U]=1,u.fromBufferAttribute(n,D),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,U),f.fromBufferAttribute(r,D),_.fromBufferAttribute(r,E),x.fromBufferAttribute(r,U),d.sub(u),h.sub(u),_.sub(f),x.sub(f);const C=1/(_.x*x.y-x.x*_.y);isFinite(C)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(h,-_.y).multiplyScalar(C),m.copy(h).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(C),a[D].add(p),a[E].add(p),a[U].add(p),c[D].add(m),c[E].add(m),c[U].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,E=w.length;D<E;++D){const U=w[D],C=U.start,B=U.count;for(let N=C,V=C+B;N<V;N+=3)M(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new A,P=new A,T=new A,v=new A;function g(D){T.fromBufferAttribute(s,D),v.copy(T);const E=a[D];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),P.crossVectors(v,E);const C=P.dot(c[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,C)}for(let D=0,E=n.count;D<E;++D)l[D]&&g(D);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,u=new A,d=new A;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,_=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let m=0;m<u;m++)h[_++]=l[f++]}return new $n(h,u,d)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new A,bd=new A,wd=new it;class Wn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=po.subVectors(n,t).cross(bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wd.getNormalMatrix(e),s=this.coplanarPoint(po).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Td=0;class wi extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ss,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new A,mo=new A,Ks=new A,Js=new A;class Pc{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mo.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),Js.copy(this.origin).sub(mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ks),a=Js.dot(this.direction),c=-Js.dot(Ks),l=Js.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*c-a,h=o*a-c,_=r*u,d>=0)if(h>=-_)if(h<=_){const x=1/u;d*=x,h*=x,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mo).addScaledVector(Ks,h),f}intersectSphere(e,t){if(e.radius<0)return null;Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,_=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=n.x-o.x,M=n.y-o.y,w=n.z-o.z,S=Math.abs(c),P=Math.abs(l),T=Math.abs(u);let v,g,D,E,U,C,B,N,V,Y,I,X;if(S>=P&&S>=T?(D=c,C=d,V=_,X=m,c>=0?(v=l,g=u,E=h,U=f,B=x,N=p,Y=M,I=w):(v=u,g=l,E=f,U=h,B=p,N=x,Y=w,I=M)):P>=T?(D=l,C=h,V=x,X=M,l>=0?(v=u,g=c,E=f,U=d,B=p,N=_,Y=w,I=m):(v=c,g=u,E=d,U=f,B=_,N=p,Y=m,I=w)):(D=u,C=f,V=p,X=w,u>=0?(v=c,g=l,E=d,U=h,B=_,N=x,Y=m,I=M):(v=l,g=c,E=h,U=d,B=x,N=_,Y=M,I=m)),D===0)return null;const H=v/D,z=g/D,q=1/D,oe=E-H*C,xe=U-z*C,$=B-H*V,ve=N-z*V,te=Y-H*X,Ue=I-z*X,Me=te*ve-Ue*$,Fe=oe*Ue-xe*te,tt=$*xe-ve*oe;if(s){if(Me<0||Fe<0||tt<0)return null}else if((Me<0||Fe<0||tt<0)&&(Me>0||Fe>0||tt>0))return null;const Ge=Me+Fe+tt;if(Ge===0)return null;const ee=q*(Me*C+Fe*V+tt*X);return(Ge>0?ee<0:ee>0)?null:this.at(ee/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pl=new mt,pi=new Pc,Qs=new li,ml=new A,js=new A,er=new A,tr=new A,go=new A,nr=new A,gl=new A,ir=new A;class we extends wt{constructor(e=new Wt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(go.fromBufferAttribute(d,e),o?nr.addScaledVector(go,u):nr.addScaledVector(go.sub(t),u))}t.add(nr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(Qs.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Qs,ml)===null||pi.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(r).invert(),pi.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,P=w;S<P;S+=3){const T=a.getX(S),v=a.getX(S+1),g=a.getX(S+2);s=sr(this,m,e,n,l,u,d,T,v,g),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const M=a.getX(p),w=a.getX(p+1),S=a.getX(p+2);s=sr(this,o,e,n,l,u,d,M,w,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const p=h[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,P=w;S<P;S+=3){const T=S,v=S+1,g=S+2;s=sr(this,m,e,n,l,u,d,T,v,g),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){const M=p,w=p+1,S=p+2;s=sr(this,o,e,n,l,u,d,M,w,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ad(i,e,t,n,s,r,o,a){let c;if(e.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;ir.copy(a),ir.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ir);return l<t.near||l>t.far?null:{distance:l,point:ir.clone(),object:i}}function sr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,js),i.getVertexPosition(c,er),i.getVertexPosition(l,tr);const u=Ad(i,e,t,n,js,er,tr,gl);if(u){const d=new A;yn.getBarycoord(gl,js,er,tr,d),s&&(u.uv=yn.getInterpolatedAttribute(s,a,c,l,d,new Re)),r&&(u.uv1=yn.getInterpolatedAttribute(r,a,c,l,d,new Re)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,c,l,d,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new A,materialIndex:0};yn.getNormal(js,er,tr,h.normal),u.face=h,u.barycoord=d}return u}class Lc extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Vt,u=Vt,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca extends $n{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new mt,_l=new mt,rr=[],vl=new bi,Rd=new mt,fs=new we,ps=new li;class hn extends we{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),vl.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),ps.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),_l.multiplyMatrices(n,Oi),fs.matrixWorld=_l,fs.raycast(e,rr);for(let o=0,a=rr.length;o<a;o++){const c=rr[o];c.instanceId=r,c.object=this,t.push(c)}rr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lc(new Float32Array(s*this.count),s,this.count,Ta,En));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mi=new li,Cd=new Re(.5,.5),or=new A;class Ls{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],_=r[8],x=r[9],p=r[10],m=r[11],M=r[12],w=r[13],S=r[14],P=r[15];if(s[0].setComponents(l-o,f-u,m-_,P-M).normalize(),s[1].setComponents(l+o,f+u,m+_,P+M).normalize(),s[2].setComponents(l+a,f+d,m+x,P+w).normalize(),s[3].setComponents(l-a,f-d,m-x,P-w).normalize(),n)s[4].setComponents(c,h,p,S).normalize(),s[5].setComponents(l-c,f-h,m-p,P-S).normalize();else if(s[4].setComponents(l-c,f-h,m-p,P-S).normalize(),t===bn)s[5].setComponents(l+c,f+h,m+p,P+S).normalize();else if(t===Cs)s[5].setComponents(c,h,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Cd.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const xl=new mt;class Na{constructor(){this.coordinateSystem=bn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];xl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ls),n[s].setFromProjectionMatrix(xl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ls),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Na().copy(this)}}class Dc extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new A,Fr=new A,Ml=new mt,ms=new Pc,ar=new li,_o=new A,Sl=new A;class Pd extends wt{constructor(e=new Wt,t=new Dc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ur.fromBufferAttribute(t,s-1),Fr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ur.distanceTo(Fr);e.setAttribute("lineDistance",new gt(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Ml.copy(s).invert(),ms.copy(e.ray).applyMatrix4(Ml);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=f,p=_-1;x<p;x+=l){const m=u.getX(x),M=u.getX(x+1),w=lr(this,e,ms,c,m,M,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(_-1),p=u.getX(f),m=lr(this,e,ms,c,x,p,_-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=f,p=_-1;x<p;x+=l){const m=lr(this,e,ms,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){const x=lr(this,e,ms,c,_-1,f,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Ur.fromBufferAttribute(a,s),Fr.fromBufferAttribute(a,r),t.distanceSqToSegment(Ur,Fr,_o,Sl)>n)return;_o.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_o);if(!(l<e.near||l>e.far))return{distance:l,point:Sl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const yl=new A,El=new A;class Ld extends Pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yl.fromBufferAttribute(t,s),El.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yl.distanceTo(El);e.setAttribute("lineDistance",new gt(n,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ic extends Kt{constructor(e=[],t=Yi,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ds extends Kt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi extends Kt{constructor(e,t,n=Un,s,r,o,a=Vt,c=Vt,l,u=oi,d=1){if(u!==oi&&u!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Nc extends Zi{constructor(e,t=Un,n=Yi,s,r,o=Vt,a=Vt,c,l=oi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uc extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yt extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function _(x,p,m,M,w,S,P,T,v,g,D){const E=S/v,U=P/g,C=S/2,B=P/2,N=T/2,V=v+1,Y=g+1;let I=0,X=0;const H=new A;for(let z=0;z<Y;z++){const q=z*U-B;for(let oe=0;oe<V;oe++){const xe=oe*E-C;H[x]=xe*M,H[p]=q*w,H[m]=N,l.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[m]=T>0?1:-1,u.push(H.x,H.y,H.z),d.push(oe/v),d.push(1-z/g),I+=1}}for(let z=0;z<g;z++)for(let q=0;q<v;q++){const oe=h+q+V*z,xe=h+q+V*(z+1),$=h+(q+1)+V*(z+1),ve=h+(q+1)+V*z;c.push(oe,xe,ve),c.push(xe,$,ve),X+=6}a.addGroup(f,X,D),f+=X,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class At extends Wt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let _=0;const x=[],p=n/2;let m=0;M(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function M(){const S=new A,P=new A;let T=0;const v=(t-e)/n;for(let g=0;g<=r;g++){const D=[],E=g/r,U=E*(t-e)+e;for(let C=0;C<=s;C++){const B=C/s,N=B*c+a,V=Math.sin(N),Y=Math.cos(N);P.x=U*V,P.y=-E*n+p,P.z=U*Y,d.push(P.x,P.y,P.z),S.set(V,v,Y).normalize(),h.push(S.x,S.y,S.z),f.push(B,1-E),D.push(_++)}x.push(D)}for(let g=0;g<s;g++)for(let D=0;D<r;D++){const E=x[D][g],U=x[D+1][g],C=x[D+1][g+1],B=x[D][g+1];(e>0||D!==0)&&(u.push(E,U,B),T+=3),(t>0||D!==r-1)&&(u.push(U,C,B),T+=3)}l.addGroup(m,T,0),m+=T}function w(S){const P=_,T=new Re,v=new A;let g=0;const D=S===!0?e:t,E=S===!0?1:-1;for(let C=1;C<=s;C++)d.push(0,p*E,0),h.push(0,E,0),f.push(.5,.5),_++;const U=_;for(let C=0;C<=s;C++){const N=C/s*c+a,V=Math.cos(N),Y=Math.sin(N);v.x=D*Y,v.y=p*E,v.z=D*V,d.push(v.x,v.y,v.z),h.push(0,E,0),T.x=V*.5+.5,T.y=Y*.5*E+.5,f.push(T.x,T.y),_++}for(let C=0;C<s;C++){const B=P+C,N=U+C;S===!0?u.push(N,N+1,B):u.push(N+1,N,B),g+=3}l.addGroup(m,g,S===!0?1:2),m+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Re:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,s=[],r=[],o=[],a=new A,c=new mt;for(let f=0;f<=e;f++){const _=f/e;s[f]=this.getTangentAt(_,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ua extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dd extends Ua{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fa(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const bl=new A,wl=new A,vo=new Fa,xo=new Fa,Mo=new Fa;class ki extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(wl.subVectors(s[0],s[1]).add(s[0]),l=wl);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(bl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=bl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),vo.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,_,x,p),xo.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,_,x,p),Mo.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,_,x,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),xo.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Mo.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(vo.calc(c),xo.calc(c),Mo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Id(i,e){const t=1-i;return t*t*e}function Nd(i,e){return 2*(1-i)*i*e}function Ud(i,e){return i*i*e}function bs(i,e,t,n){return Id(i,e)+Nd(i,t)+Ud(i,n)}function Fd(i,e){const t=1-i;return t*t*t*e}function Od(i,e){const t=1-i;return 3*t*t*i*e}function Bd(i,e){return 3*(1-i)*i*i*e}function zd(i,e){return i*i*i*e}function ws(i,e,t,n,s){return Fd(i,e)+Od(i,t)+Bd(i,n)+zd(i,s)}class Fc extends On{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(e,s.x,r.x,o.x,a.x),ws(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gd extends On{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(e,s.x,r.x,o.x,a.x),ws(e,s.y,r.y,o.y,a.y),ws(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Oc extends On{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hd extends On{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bc extends On{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(bs(e,s.x,r.x,o.x),bs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zc extends On{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(bs(e,s.x,r.x,o.x),bs(e,s.y,r.y,o.y),bs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gc extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Tl(a,c.x,l.x,u.x,d.x),Tl(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var Or=Object.freeze({__proto__:null,ArcCurve:Dd,CatmullRomCurve3:ki,CubicBezierCurve:Fc,CubicBezierCurve3:Gd,EllipseCurve:Ua,LineCurve:Oc,LineCurve3:Hd,QuadraticBezierCurve:Bc,QuadraticBezierCurve3:zc,SplineCurve:Gc});class kd extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Or[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Or[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Al extends kd{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Oc(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Bc(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Fc(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Gc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ua(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hc extends Al{constructor(e){super(e),this.uuid=Ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Al().fromJSON(s))}return this}}function Vd(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=kc(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=$d(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,d=c;for(let h=t;h<s;h+=t){const f=i[h],_=i[h+1];f<a&&(a=f),_<c&&(c=_),f>u&&(u=f),_>d&&(d=_)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return Is(r,o,t,a,c,l,0),o}function kc(i,e,t,n,s){let r;if(s===rh(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Rl(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Rl(o/n|0,i[o],i[o+1],r);return r&&Ki(r,r.next)&&(Us(r),r=r.next),r}function Si(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ki(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Is(i,e,t,n,s,r,o){if(!i)return;!o&&r&&jd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Xd(i,n,s,r):Wd(i)){e.push(c.i,i.i,l.i),Us(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=qd(Si(i),e),Is(i,e,t,n,s,r,2)):o===2&&Yd(i,e,t,n,s,r):Is(Si(i),e,t,n,s,r,1);break}}}function Wd(i){const e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),d=Math.min(a,c,l),h=Math.max(s,r,o),f=Math.max(a,c,l);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=f&&xs(s,a,r,c,o,l,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Xd(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,c,l),_=Math.min(u,d,h),x=Math.max(a,c,l),p=Math.max(u,d,h),m=ua(f,_,e,t,n),M=ua(x,p,e,t,n);let w=i.prevZ,S=i.nextZ;for(;w&&w.z>=m&&S&&S.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&xs(a,u,c,d,l,h,w.x,w.y)&&Pt(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&xs(a,u,c,d,l,h,S.x,S.y)&&Pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=_&&w.y<=p&&w!==s&&w!==o&&xs(a,u,c,d,l,h,w.x,w.y)&&Pt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=x&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&xs(a,u,c,d,l,h,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function qd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ki(n,s)&&Wc(n,t,t.next,s)&&Ns(n,s)&&Ns(s,n)&&(e.push(n.i,t.i,s.i),Us(t),Us(t.next),t=i=s),t=t.next}while(t!==i);return Si(t)}function Yd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nh(o,a)){let c=Xc(o,a);o=Si(o,o.next),c=Si(c,c.next),Is(o,e,t,n,s,r,0),Is(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $d(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=kc(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(th(l))}s.sort(Zd);for(let r=0;r<s.length;r++)t=Kd(s[r],t);return t}function Zd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Kd(i,e){const t=Jd(i,e);if(!t)return e;const n=Xc(t,i);return Si(n,n.next),Si(t,t.next)}function Jd(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ki(i,t))return t;do{if(Ki(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Vc(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);Ns(t,i)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&Qd(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function Qd(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function jd(i,e,t,n){let s=i;do s.z===0&&(s.z=ua(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,eh(s)}function eh(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ua(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function th(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vc(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function xs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Vc(i,e,t,n,s,r,o,a)}function nh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ih(i,e)&&(Ns(i,e)&&Ns(e,i)&&sh(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Ki(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ki(i,e){return i.x===e.x&&i.y===e.y}function Wc(i,e,t,n){const s=ur(Pt(i,e,t)),r=ur(Pt(i,e,n)),o=ur(Pt(t,n,i)),a=ur(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&cr(i,t,e)||r===0&&cr(i,n,e)||o===0&&cr(t,i,n)||a===0&&cr(t,e,n))}function cr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ur(i){return i>0?1:i<0?-1:0}function ih(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Wc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ns(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function sh(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Xc(i,e){const t=da(i.i,i.x,i.y),n=da(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rl(i,e,t,n){const s=da(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function da(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rh(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class oh{static triangulate(e,t,n=2){return Vd(e,t,n)}}class Vi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Cl(e),Pl(n,e);let o=e.length;t.forEach(Cl);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Pl(n,t[c]);const a=oh.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Cl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Oa extends Wt{constructor(e=new Hc([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:ah;let w,S=!1,P,T,v,g;if(m){w=m.getSpacedPoints(u),S=!0,h=!1;const W=m.isCatmullRomCurve3?m.closed:!1;P=m.computeFrenetFrames(u,W),T=new A,v=new A,g=new A}h||(p=0,f=0,_=0,x=0);const D=a.extractPoints(l);let E=D.shape;const U=D.holes;if(!Vi.isClockWise(E)){E=E.reverse();for(let W=0,de=U.length;W<de;W++){const me=U[W];Vi.isClockWise(me)&&(U[W]=me.reverse())}}function B(W){const me=10000000000000001e-36;let pe=W[0];for(let ue=1;ue<=W.length;ue++){const Ce=ue%W.length,ge=W[Ce],Ne=ge.x-pe.x,Ie=ge.y-pe.y,We=Ne*Ne+Ie*Ie,L=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(pe.x),Math.abs(pe.y)),He=me*L*L;if(We<=He){W.splice(Ce,1),ue--;continue}pe=ge}}B(E),U.forEach(B);const N=U.length,V=E;for(let W=0;W<N;W++){const de=U[W];E=E.concat(de)}function Y(W,de,me){return de||_t("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(de,me)}const I=E.length;function X(W,de,me){let pe,ue,Ce;const ge=W.x-de.x,Ne=W.y-de.y,Ie=me.x-W.x,We=me.y-W.y,L=ge*ge+Ne*Ne,He=ge*We-Ne*Ie;if(Math.abs(He)>Number.EPSILON){const ne=Math.sqrt(L),ye=Math.sqrt(Ie*Ie+We*We),le=de.x-Ne/ne,qe=de.y+ge/ne,Ee=me.x-We/ye,ke=me.y+Ie/ye,R=((Ee-le)*We-(ke-qe)*Ie)/(ge*We-Ne*Ie);pe=le+ge*R-W.x,ue=qe+Ne*R-W.y;const y=pe*pe+ue*ue;if(y<=2)return new Re(pe,ue);Ce=Math.sqrt(y/2)}else{let ne=!1;ge>Number.EPSILON?Ie>Number.EPSILON&&(ne=!0):ge<-Number.EPSILON?Ie<-Number.EPSILON&&(ne=!0):Math.sign(Ne)===Math.sign(We)&&(ne=!0),ne?(pe=-Ne,ue=ge,Ce=Math.sqrt(L)):(pe=ge,ue=Ne,Ce=Math.sqrt(L/2))}return new Re(pe/Ce,ue/Ce)}const H=[];for(let W=0,de=V.length,me=de-1,pe=W+1;W<de;W++,me++,pe++)me===de&&(me=0),pe===de&&(pe=0),H[W]=X(V[W],V[me],V[pe]);const z=[];let q,oe=H.concat();for(let W=0,de=N;W<de;W++){const me=U[W];q=[];for(let pe=0,ue=me.length,Ce=ue-1,ge=pe+1;pe<ue;pe++,Ce++,ge++)Ce===ue&&(Ce=0),ge===ue&&(ge=0),q[pe]=X(me[pe],me[Ce],me[ge]);z.push(q),oe=oe.concat(q)}let xe;if(p===0)xe=Vi.triangulateShape(V,U);else{const W=[],de=[];for(let me=0;me<p;me++){const pe=me/p,ue=f*Math.cos(pe*Math.PI/2),Ce=_*Math.sin(pe*Math.PI/2)+x;for(let ge=0,Ne=V.length;ge<Ne;ge++){const Ie=Y(V[ge],H[ge],Ce);Fe(Ie.x,Ie.y,-ue),pe===0&&W.push(Ie)}for(let ge=0,Ne=N;ge<Ne;ge++){const Ie=U[ge];q=z[ge];const We=[];for(let L=0,He=Ie.length;L<He;L++){const ne=Y(Ie[L],q[L],Ce);Fe(ne.x,ne.y,-ue),pe===0&&We.push(ne)}pe===0&&de.push(We)}}xe=Vi.triangulateShape(W,de)}const $=xe.length,ve=_+x;for(let W=0;W<I;W++){const de=h?Y(E[W],oe[W],ve):E[W];S?(v.copy(P.normals[0]).multiplyScalar(de.x),T.copy(P.binormals[0]).multiplyScalar(de.y),g.copy(w[0]).add(v).add(T),Fe(g.x,g.y,g.z)):Fe(de.x,de.y,0)}for(let W=1;W<=u;W++)for(let de=0;de<I;de++){const me=h?Y(E[de],oe[de],ve):E[de];S?(v.copy(P.normals[W]).multiplyScalar(me.x),T.copy(P.binormals[W]).multiplyScalar(me.y),g.copy(w[W]).add(v).add(T),Fe(g.x,g.y,g.z)):Fe(me.x,me.y,d/u*W)}for(let W=p-1;W>=0;W--){const de=W/p,me=f*Math.cos(de*Math.PI/2),pe=_*Math.sin(de*Math.PI/2)+x;for(let ue=0,Ce=V.length;ue<Ce;ue++){const ge=Y(V[ue],H[ue],pe);Fe(ge.x,ge.y,d+me)}for(let ue=0,Ce=U.length;ue<Ce;ue++){const ge=U[ue];q=z[ue];for(let Ne=0,Ie=ge.length;Ne<Ie;Ne++){const We=Y(ge[Ne],q[Ne],pe);S?Fe(We.x,We.y+w[u-1].y,w[u-1].x+me):Fe(We.x,We.y,d+me)}}}te(),Ue();function te(){const W=s.length/3;if(h){let de=0,me=I*de;for(let pe=0;pe<$;pe++){const ue=xe[pe];tt(ue[2]+me,ue[1]+me,ue[0]+me)}de=u+p*2,me=I*de;for(let pe=0;pe<$;pe++){const ue=xe[pe];tt(ue[0]+me,ue[1]+me,ue[2]+me)}}else{for(let de=0;de<$;de++){const me=xe[de];tt(me[2],me[1],me[0])}for(let de=0;de<$;de++){const me=xe[de];tt(me[0]+I*u,me[1]+I*u,me[2]+I*u)}}n.addGroup(W,s.length/3-W,0)}function Ue(){const W=s.length/3;let de=0;Me(V,de),de+=V.length;for(let me=0,pe=U.length;me<pe;me++){const ue=U[me];Me(ue,de),de+=ue.length}n.addGroup(W,s.length/3-W,1)}function Me(W,de){let me=W.length;for(;--me>=0;){const pe=me;let ue=me-1;ue<0&&(ue=W.length-1);for(let Ce=0,ge=u+p*2;Ce<ge;Ce++){const Ne=I*Ce,Ie=I*(Ce+1),We=de+pe+Ne,L=de+ue+Ne,He=de+ue+Ie,ne=de+pe+Ie;Ge(We,L,He,ne)}}}function Fe(W,de,me){c.push(W),c.push(de),c.push(me)}function tt(W,de,me){ee(W),ee(de),ee(me);const pe=s.length/3,ue=M.generateTopUV(n,s,pe-3,pe-2,pe-1);Se(ue[0]),Se(ue[1]),Se(ue[2])}function Ge(W,de,me,pe){ee(W),ee(de),ee(pe),ee(de),ee(me),ee(pe);const ue=s.length/3,Ce=M.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Se(Ce[0]),Se(Ce[1]),Se(Ce[3]),Se(Ce[1]),Se(Ce[2]),Se(Ce[3])}function ee(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function Se(W){r.push(W.x),r.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lh(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Or[s.type]().fromJSON(s)),new Oa(n,e.options)}}const ah={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Re(r,o),new Re(a,c),new Re(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],f=e[s*3+1],_=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Re(o,1-c),new Re(l,1-d),new Re(h,1-_),new Re(x,1-m)]:[new Re(a,1-c),new Re(u,1-d),new Re(f,1-_),new Re(p,1-m)]}};function lh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class gn extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,h=t/c,f=[],_=[],x=[],p=[];for(let m=0;m<u;m++){const M=m*h-o;for(let w=0;w<l;w++){const S=w*d-r;_.push(S,-M,0),x.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const w=M+l*m,S=M+l*(m+1),P=M+1+l*(m+1),T=M+1+l*m;f.push(w,S,T),f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fs extends Wt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=e;const h=(t-e)/s,f=new A,_=new Re;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,u.push(_.x,_.y)}d+=h}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const M=m+p,w=M,S=M+n+1,P=M+n+2,T=M+1;a.push(w,S,T),a.push(S,P,T)}}this.setIndex(a),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ba extends Wt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new A,h=new A,f=[],_=[],x=[],p=[];for(let m=0;m<=n;m++){const M=[],w=m/n,S=o+w*a,P=e*Math.cos(S),T=Math.sqrt(e*e-P*P);let v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let g=0;g<=t;g++){const D=g/t,E=s+D*r;d.x=-T*Math.cos(E),d.y=P,d.z=T*Math.sin(E),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(D+v,1-w),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const w=u[m][M+1],S=u[m][M],P=u[m+1][M],T=u[m+1][M+1];(m!==0||o>0)&&f.push(w,S,T),(m!==n-1||c<Math.PI)&&f.push(S,P,T)}this.setIndex(f),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mn extends Wt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new A,f=new A,_=new A;for(let x=0;x<=n;x++){const p=o+x/n*a;for(let m=0;m<=s;m++){const M=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),_.subVectors(f,h).normalize(),u.push(_.x,_.y,_.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,M=(s+1)*(x-1)+p-1,w=(s+1)*(x-1)+p,S=(s+1)*x+p;c.push(m,M,S),c.push(M,w,S)}this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Xi extends Wt{constructor(e=new zc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new Re;let u=new A;const d=[],h=[],f=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function x(){for(let w=0;w<t;w++)p(w);p(r===!1?t:0),M(),m()}function p(w){u=e.getPointAt(w/t,u);const S=o.normals[w],P=o.binormals[w];for(let T=0;T<=s;T++){const v=T/s*Math.PI*2,g=Math.sin(v),D=-Math.cos(v);c.x=D*S.x+g*P.x,c.y=D*S.y+g*P.y,c.z=D*S.z+g*P.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let w=1;w<=t;w++)for(let S=1;S<=s;S++){const P=(s+1)*(w-1)+(S-1),T=(s+1)*w+(S-1),v=(s+1)*w+S,g=(s+1)*(w-1)+S;_.push(P,T,g),_.push(T,v,g)}}function M(){for(let w=0;w<=t;w++)for(let S=0;S<=s;S++)l.x=w/t,l.y=S/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Xi(new Or[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Ll(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ll(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const s in n)e[s]=n[s]}return e}function Ll(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ch(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Qi={clone:Ji,merge:Qt};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Yc extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rt extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hh extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ga,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fh extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ph extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hr extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mh extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const So=new mt,Dl=new A,Il=new A;class $c{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dl),Il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Il),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(So,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Cs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dr=new A,hr=new Ht,Cn=new A;class Zc extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dr,hr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,hr,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(dr,hr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,hr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new A,Nl=new Re,Ul=new Re;class rn extends Zc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Ul),t.subVectors(Ul,Nl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gh extends $c{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class kr extends Hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class za extends Zc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _h extends $c{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new _h}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Bi=-90,zi=1;class ha extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Bi,zi,e,t);s.layers=this.layers,this.add(s);const r=new rn(Bi,zi,e,t);r.layers=this.layers,this.add(r);const o=new rn(Bi,zi,e,t);o.layers=this.layers,this.add(o);const a=new rn(Bi,zi,e,t);a.layers=this.layers,this.add(a);const c=new rn(Bi,zi,e,t);c.layers=this.layers,this.add(c);const l=new rn(Bi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class xh extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Mh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Sh.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Sh(){this._document.hidden===!1&&this.reset()}class yh extends Ld{constructor(e=10,t=10,n=4473924,s=8947848){n=new Qe(n),s=new Qe(s);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let h=0,f=0,_=-a;h<=t;h++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const x=h===r?n:s;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const u=new Wt;u.setAttribute("position",new gt(c,3)),u.setAttribute("color",new gt(l,3));const d=new Dc({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Fl(i,e,t,n){const s=Eh(n);switch(t){case mc:return i*e;case Ta:return i*e/s.components*s.byteLength;case Aa:return i*e/s.components*s.byteLength;case Mi:return i*e*2/s.components*s.byteLength;case Ra:return i*e*2/s.components*s.byteLength;case gc:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case Ca:return i*e*4/s.components*s.byteLength;case xr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:case Fo:return Math.max(i,16)*Math.max(e,8)/4;case Io:case Uo:return Math.max(i,8)*Math.max(e,8)/2;case Oo:case Bo:case Go:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zo:case Cr:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ta:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ia:case sa:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oa:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pr:case la:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Eh(i){switch(i){case dn:case dc:return{byteLength:1,components:1};case Rs:case hc:case tn:return{byteLength:2,components:1};case ba:case wa:return{byteLength:2,components:4};case Un:case Ea:case En:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);function Kc(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bh(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],x=d[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ef=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Of=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:wh,alphahash_pars_fragment:Th,alphamap_fragment:Ah,alphamap_pars_fragment:Rh,alphatest_fragment:Ch,alphatest_pars_fragment:Ph,aomap_fragment:Lh,aomap_pars_fragment:Dh,batching_pars_vertex:Ih,batching_vertex:Nh,begin_vertex:Uh,beginnormal_vertex:Fh,bsdfs:Oh,iridescence_fragment:Bh,bumpmap_pars_fragment:zh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Hh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Vh,color_fragment:Wh,color_pars_fragment:Xh,color_pars_vertex:qh,color_vertex:Yh,common:$h,defaultnormal_vertex:Zh,displacementmap_pars_vertex:Kh,displacementmap_vertex:Jh,emissivemap_fragment:Qh,emissivemap_pars_fragment:jh,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:sf,envmap_pars_fragment:rf,envmap_pars_vertex:of,envmap_physical_pars_fragment:_f,envmap_vertex:af,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:hf,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:xf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:yf,lights_physical_pars_fragment:Ef,lights_fragment_begin:bf,lights_fragment_maps:wf,lights_fragment_end:Tf,lightprobes_pars_fragment:Af,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Lf,map_fragment:Df,map_pars_fragment:If,map_particle_fragment:Nf,map_particle_pars_fragment:Uf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Of,morphinstance_vertex:Bf,morphcolor_vertex:zf,morphnormal_vertex:Gf,morphtarget_pars_vertex:Hf,morphtarget_vertex:kf,normal_fragment_begin:Vf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:$f,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Jf,iridescence_pars_fragment:Qf,opaque_fragment:jf,packing:ep,premultiplied_alpha_fragment:tp,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:up,skinbase_vertex:dp,skinning_pars_vertex:hp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:_p,tonemapping_pars_fragment:vp,transmission_fragment:xp,transmission_pars_fragment:Mp,uv_pars_fragment:Sp,uv_pars_vertex:yp,uv_vertex:Ep,worldpos_vertex:bp,background_vert:wp,background_frag:Tp,backgroundCube_vert:Ap,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Lp,depth_frag:Dp,distance_vert:Ip,distance_frag:Np,equirect_vert:Up,equirect_frag:Fp,linedashed_vert:Op,linedashed_frag:Bp,meshbasic_vert:zp,meshbasic_frag:Gp,meshlambert_vert:Hp,meshlambert_frag:kp,meshmatcap_vert:Vp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:$p,meshphysical_vert:Zp,meshphysical_frag:Kp,meshtoon_vert:Jp,meshtoon_frag:Qp,points_vert:jp,points_frag:em,shadow_vert:tm,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},ze={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ln={basic:{uniforms:Qt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Qt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Qt([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Qt([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Qt([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Qe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Qt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Qt([ze.points,ze.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Qt([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Qt([ze.common,ze.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Qt([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Qt([ze.sprite,ze.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Qt([ze.common,ze.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Qt([ze.lights,ze.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ln.physical={uniforms:Qt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const fr={r:0,b:0,g:0},rm=new mt,Jc=new it;Jc.set(-1,0,0,0,1,0,0,0,1);function om(i,e,t,n,s,r){const o=new Qe(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const S=M.backgroundBlurriness>0;w=e.get(w,S)}return w}function _(M){let w=!1;const S=f(M);S===null?p(o,a):S&&S.isColor&&(p(S,1),w=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){const S=f(w);S&&S.isCubeTexture?(l===void 0&&(l=new we(new yt(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Ji(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jc),l.material.toneMapped=dt.getTransfer(S.colorSpace)!==xt,(u!==S||d!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new we(new gn(2,2),new jt({name:"BackgroundMaterial",uniforms:Ji(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,w){M.getRGB(fr,qc(i)),t.buffers.color.setClear(fr.r,fr.g,fr.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:_,addToRenderList:x,dispose:m}}function am(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(U,C,B,N,V){let Y=!1;const I=d(U,N,B,C);r!==I&&(r=I,l(r.object)),Y=f(U,N,B,V),Y&&_(U,N,B,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(U,C,B,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function d(U,C,B,N){const V=N.wireframe===!0;let Y=n[C.id];Y===void 0&&(Y={},n[C.id]=Y);const I=U.isInstancedMesh===!0?U.id:0;let X=Y[I];X===void 0&&(X={},Y[I]=X);let H=X[B.id];H===void 0&&(H={},X[B.id]=H);let z=H[V];return z===void 0&&(z=h(c()),H[V]=z),z}function h(U){const C=[],B=[],N=[];for(let V=0;V<t;V++)C[V]=0,B[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:N,object:U,attributes:{},index:null}}function f(U,C,B,N){const V=r.attributes,Y=C.attributes;let I=0;const X=B.getAttributes();for(const H in X)if(X[H].location>=0){const q=V[H];let oe=Y[H];if(oe===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;I++}return r.attributesNum!==I||r.index!==N}function _(U,C,B,N){const V={},Y=C.attributes;let I=0;const X=B.getAttributes();for(const H in X)if(X[H].location>=0){let q=Y[H];q===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),V[H]=oe,I++}r.attributes=V,r.attributesNum=I,r.index=N}function x(){const U=r.newAttributes;for(let C=0,B=U.length;C<B;C++)U[C]=0}function p(U){m(U,0)}function m(U,C){const B=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;B[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),V[U]!==C&&(i.vertexAttribDivisor(U,C),V[U]=C)}function M(){const U=r.newAttributes,C=r.enabledAttributes;for(let B=0,N=C.length;B<N;B++)C[B]!==U[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function w(U,C,B,N,V,Y,I){I===!0?i.vertexAttribIPointer(U,C,B,V,Y):i.vertexAttribPointer(U,C,B,N,V,Y)}function S(U,C,B,N){x();const V=N.attributes,Y=B.getAttributes(),I=C.defaultAttributeValues;for(const X in Y){const H=Y[X];if(H.location>=0){let z=V[X];if(z===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),z!==void 0){const q=z.normalized,oe=z.itemSize,xe=e.get(z);if(xe===void 0)continue;const $=xe.buffer,ve=xe.type,te=xe.bytesPerElement,Ue=ve===i.INT||ve===i.UNSIGNED_INT||z.gpuType===Ea;if(z.isInterleavedBufferAttribute){const Me=z.data,Fe=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,tt=z.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Ge=0;Ge<H.locationSize;Ge++)m(H.location+Ge,Me.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)p(H.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Ge=0;Ge<H.locationSize;Ge++)w(H.location+Ge,oe/H.locationSize,ve,q,Fe*te,(tt+oe/H.locationSize*Ge)*te,Ue)}else{if(z.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)m(H.location+Me,z.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Me=0;Me<H.locationSize;Me++)p(H.location+Me);i.bindBuffer(i.ARRAY_BUFFER,$);for(let Me=0;Me<H.locationSize;Me++)w(H.location+Me,oe/H.locationSize,ve,q,oe*te,oe/H.locationSize*Me*te,Ue)}}else if(I!==void 0){const q=I[X];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(H.location,q);break;case 3:i.vertexAttrib3fv(H.location,q);break;case 4:i.vertexAttrib4fv(H.location,q);break;default:i.vertexAttrib1fv(H.location,q)}}}}M()}function P(){D();for(const U in n){const C=n[U];for(const B in C){const N=C[B];for(const V in N){const Y=N[V];for(const I in Y)u(Y[I].object),delete Y[I];delete N[V]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;const C=n[U.id];for(const B in C){const N=C[B];for(const V in N){const Y=N[V];for(const I in Y)u(Y[I].object),delete Y[I];delete N[V]}}delete n[U.id]}function v(U){for(const C in n){const B=n[C];for(const N in B){const V=B[N];if(V[U.id]===void 0)continue;const Y=V[U.id];for(const I in Y)u(Y[I].object),delete Y[I];delete V[U.id]}}}function g(U){for(const C in n){const B=n[C],N=U.isInstancedMesh===!0?U.id:0,V=B[N];if(V!==void 0){for(const Y in V){const I=V[Y];for(const X in I)u(I[X].object),delete I[X];delete V[Y]}delete B[N],Object.keys(B).length===0&&delete n[C]}}}function D(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function lm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function cm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Dn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){const g=v===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==dn&&v!==En&&!g&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(je("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:S,maxSamples:P,samples:T}}function um(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Wn,a=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,w=M*4;let S=m.clippingState||null;c.value=S,S=u(_,h,w,f);for(let P=0;P!==w;++P)S[P]=t[P];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const m=f+x*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,S=f;w!==x;++w,S+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}class Ga extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ic(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yt(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:_i});r.uniforms.tEquirect.value=t;const o=new we(s,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=an),new ha(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ol=256,dm=3,hm=20,Qc=256,jc=16,fm=3,pm=new A,mm=new Qe;class Os{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ha(1,10,null),this._boxMesh=new we(new yt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=pm}=r,c=this._renderer;this._setSize(o);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,h=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(mm));const p=new ha(n,s,u);return p.position.copy(a),p.update(c,e),c.autoClear=d,c.autoClearColor=h,c.autoClearDepth=f,c.autoClearStencil=_,e.background=x,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ol,Sc(e))}_fromTexture(e,t){e.mapping===Yi||e.mapping===As?this._setSize(e.image.length===0?Ol:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Bl(e,!1,!1),n=Math.log2(e)-dm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Yi||e.mapping===As?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gm(),this._integrationMaterial=_m());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/jc);for(let o=0;o<=n;o++){const a=Os.lodToRoughness(o,n);if(o>n-fm)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const c=a>0?Math.log2(t)+.5*Math.log2(6/(Qc*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Bl(i,e,t){return new Ga(i,{minFilter:si,generateMipmaps:e,type:tn,colorSpace:Dr,depthBuffer:t})}function Bs(i,e,t){return new jt({name:i,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:en,blending:_i,depthTest:!1,depthWrite:!1})}function gm(){return Bs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _m(){return Bs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vm(){return Bs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${hm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function zl(){return Bs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Gl(){return Bs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===qr||f===Yr)if(e.has(h)){const _=e.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const x=new Ga(_.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",l),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const f=h.mapping,_=f===qr||f===Yr,x=f===Yi||f===As;if(_||x){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Os(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return _&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Os(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,f){return f===qr?h.mapping=Yi:f===Yr&&(h.mapping=As),h}function c(h){let f=0;const _=6;for(let x=0;x<_;x++)h[x]!==void 0&&f++;return f===_}function l(h){const f=h.target;f.removeEventListener("dispose",l);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Mm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Er("WebGLRenderer: "+n+" extension not supported."),s}}}function Sm(i,e,t,n){const s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);const x=r.get(_);x&&(e.remove(x),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,x){return s[x.id]!==void 0||(x.addEventListener("dispose",a),s[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function u(_){const x=_.attributes;for(const p in x)e.update(x[p],i.ARRAY_BUFFER)}function d(_){const x=_.index,p=_.attributes.position;let m=0;if(p===void 0)return;const M=x!==null?x.array.length:p.array.length/3-1,w=p.count>=65535?Cc:Rc,S=new w(Math.ceil(M/3)*6,1),P=S.array;if(x!==null){const v=x.array;m=x.version;for(let g=0,D=0;g<M;g+=3){const E=v[g+0],U=v[g+1],C=v[g+2];P[D++]=E,P[D++]=U,P[D++]=U,P[D++]=C,P[D++]=C,P[D++]=E}}else{m=p.version;for(let v=0,g=0;v<M;v+=3){const D=v+0,E=v+1,U=v+2;P[g++]=D,P[g++]=E,P[g++]=E,P[g++]=U,P[g++]=U,P[g++]=D}}S.version=m;const T=r.get(_);T&&e.remove(T),r.set(_,S)}function h(_){const x=r.get(_);if(x){const p=_.index;p!==null&&x.version<p.version&&d(_)}else d(_);return r.get(_)}function f(){for(const _ in s){const x=s[_].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:h,dispose:f}}function ym(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){i.drawElements(n,h,r,d*o),t.update(h,n,1)}function l(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=h[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Em(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:_t("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,e,t){const n=new WeakMap,s=new Tt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let D=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",D)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),_===!0&&(w=2),x===!0&&(w=3);let S=a.attributes.position.count*w,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*P*4*d),v=new bc(T,S,P,d);v.type=En,v.needsUpdate=!0;const g=w*4;for(let E=0;E<d;E++){const U=p[E],C=m[E],B=M[E],N=S*P*4*E;for(let V=0;V<U.count;V++){const Y=V*g;f===!0&&(s.fromBufferAttribute(U,V),T[N+Y+0]=s.x,T[N+Y+1]=s.y,T[N+Y+2]=s.z,T[N+Y+3]=0),_===!0&&(s.fromBufferAttribute(C,V),T[N+Y+4]=s.x,T[N+Y+5]=s.y,T[N+Y+6]=s.z,T[N+Y+7]=0),x===!0&&(s.fromBufferAttribute(B,V),T[N+Y+8]=s.x,T[N+Y+9]=s.y,T[N+Y+10]=s.z,T[N+Y+11]=B.itemSize===4?s.w:1)}}h={count:d,texture:v,size:new Re(S,P)},n.set(a,h),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function wm(i,e,t,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const Tm={[_a]:"LINEAR_TONE_MAPPING",[va]:"REINHARD_TONE_MAPPING",[xa]:"CINEON_TONE_MAPPING",[zr]:"ACES_FILMIC_TONE_MAPPING",[Sa]:"AGX_TONE_MAPPING",[ya]:"NEUTRAL_TONE_MAPPING",[Ma]:"CUSTOM_TONE_MAPPING"};function Am(i,e,t,n,s,r){const o=new nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,l=null;const u=new Wt;u.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new gt([0,2,0,0,2,0],2));const d=new Yc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new we(u,d),f=new za(-1,1,1,-1,0,1);let _=null,x=null,p=!1,m,M=null,w=[],S=!1;this.setSize=function(P,T){o.setSize(P,T),a!==null&&a.setSize(P,T),c!==null&&c.setSize(P,T);for(let v=0;v<w.length;v++){const g=w[v];g.setSize&&g.setSize(P,T)}},this.setEffects=function(P){w=P,S=w.length>0&&w[0].isRenderPass===!0;const T=o.width,v=o.height;w.length>0&&a===null&&(a=new nn(T,v,{type:tn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(T,v,{type:tn,depthBuffer:!1,stencilBuffer:!1}));const g=s===!0&&w.some(D=>D.needsDepthTexture===!0);g!==(o.depthTexture!==null)&&(g===!0&&l===null&&(l=new Zi(T,v),r===!0&&(l.format=ri,l.type=$i)),o.dispose(),o.depthTexture=g?l:null,o.resolveDepthBuffer=g,o.storeMultisampledDepthBuffer=g);for(let D=0;D<w.length;D++){const E=w[D];E.setSize&&E.setSize(T,v),g&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(l)}},this.begin=function(P,T){if(p||P.toneMapping===qn&&w.length===0)return!1;if(M=T,T!==null){const v=T.width,g=T.height;(o.width!==v||o.height!==g)&&this.setSize(v,g)}return S===!1&&P.setRenderTarget(o),m=P.toneMapping,P.toneMapping=qn,!0},this.hasRenderPass=function(){return S},this.end=function(P,T){P.toneMapping=m,p=!0;let v=o,g=a;for(let D=0;D<w.length;D++){const E=w[D];E.enabled!==!1&&(E.render(P,g,v,T),E.needsSwap!==!1&&(v=g,g=g===a?c:a))}if(_!==P.outputColorSpace||x!==P.toneMapping){_=P.outputColorSpace,x=P.toneMapping,d.defines={},dt.getTransfer(_)===xt&&(d.defines.SRGB_TRANSFER="");const D=Tm[x];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,P.setRenderTarget(M),P.render(h,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}const eu=new Kt,tu=new Zi(1,1),nu=new Nc(1),iu=new bc,su=new fd,ru=new Ic,Hl=[],kl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),Xl=new Float32Array(4);function es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vr(i,e){let t=kl[e];t===void 0&&(t=new Int32Array(e),kl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Xl.set(n),i.uniformMatrix2fv(this.addr,!1,Xl),Ot(t,n)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Wl.set(n),i.uniformMatrix3fv(this.addr,!1,Wl),Ot(t,n)}}function Nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Vl.set(n),i.uniformMatrix4fv(this.addr,!1,Vl),Ot(t,n)}}function Um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function zm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function Wr(i){return i.version===0&&(i.compareFunction=xc,i.needsUpdate=!0),i}function Vm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Wr(tu):r=eu,t.setTexture2D(e||r,s)}function Wm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||su,s)}function Xm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Wr(nu):r=ru,t.setTextureCube(e||r,s)}function qm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||iu,s)}function Ym(i){switch(i){case 5126:return Rm;case 35664:return Cm;case 35665:return Pm;case 35666:return Lm;case 35674:return Dm;case 35675:return Im;case 35676:return Nm;case 5124:case 35670:return Um;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Gm;case 36295:return Hm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}function $m(i,e){i.uniform1fv(this.addr,e)}function Zm(i,e){const t=es(e,this.size,2);i.uniform2fv(this.addr,t)}function Km(i,e){const t=es(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){const t=es(e,this.size,4);i.uniform4fv(this.addr,t)}function Qm(i,e){const t=es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jm(i,e){const t=es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function e0(i,e){const t=es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function t0(i,e){i.uniform1iv(this.addr,e)}function n0(i,e){i.uniform2iv(this.addr,e)}function i0(i,e){i.uniform3iv(this.addr,e)}function s0(i,e){i.uniform4iv(this.addr,e)}function r0(i,e){i.uniform1uiv(this.addr,e)}function o0(i,e){i.uniform2uiv(this.addr,e)}function a0(i,e){i.uniform3uiv(this.addr,e)}function l0(i,e){i.uniform4uiv(this.addr,e)}function c0(i,e,t){const n=this.cache,s=e.length,r=Vr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wr(tu):o=eu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function u0(i,e,t){const n=this.cache,s=e.length,r=Vr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||su,r[o])}function d0(i,e,t){const n=this.cache,s=e.length,r=Vr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Wr(nu):o=ru;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function h0(i,e,t){const n=this.cache,s=e.length,r=Vr(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||iu,r[o])}function f0(i){switch(i){case 5126:return $m;case 35664:return Zm;case 35665:return Km;case 35666:return Jm;case 35674:return Qm;case 35675:return jm;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return h0}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ym(t.type)}}class m0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f0(t.type)}}class g0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function ql(i,e){i.seq.push(e),i.map[e.id]=e}function _0(i,e,t){const n=i.name,s=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),o=yo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ql(t,l===void 0?new p0(a,i,e):new m0(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new g0(a),ql(t,d)),t=d}}}class br{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);_0(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Yl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const v0=37297;let x0=0;function M0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $l=new it;function S0(i){dt._getMatrix($l,dt.workingColorSpace,i);const e=`mat3( ${$l.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Ir:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+M0(i.getShaderSource(e),a)}else return r}function y0(i,e){const t=S0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const E0={[_a]:"Linear",[va]:"Reinhard",[xa]:"Cineon",[zr]:"ACESFilmic",[Sa]:"AgX",[ya]:"Neutral",[Ma]:"Custom"};function b0(i,e){const t=E0[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new A;function w0(){dt.getLuminanceCoefficients(pr);const i=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function A0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ms(i){return i!==""}function Kl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(i){return i.replace(C0,P0)}function P0(i,e){const t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fa(t)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(L0,D0)}function D0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const I0={[vr]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function N0(i){return I0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U0={[As]:"ENVMAP_MODE_REFRACTION"};function F0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":U0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const O0={[ga]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};function B0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O0[i.combine]||"ENVMAP_BLENDING_NONE"}function z0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=N0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=F0(t),d=B0(t),h=T0(t),f=A0(r),_=s.createProgram();let x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ms).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(x=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?at.tonemapping_pars_fragment:"",t.toneMapping!==qn?b0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,y0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),o=fa(o),o=Kl(o,t),o=Jl(o,t),a=fa(a),a=Kl(a,t),a=Jl(a,t),o=Ql(o),a=Ql(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+x+o,w=m+p+a,S=Yl(s,s.VERTEX_SHADER,M),P=Yl(s,s.FRAGMENT_SHADER,w);s.attachShader(_,S),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(E){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",C=s.getShaderInfoLog(S)||"",B=s.getShaderInfoLog(P)||"",N=U.trim(),V=C.trim(),Y=B.trim();let I=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,P);else{const H=Zl(s,S,"vertex"),z=Zl(s,P,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+H+`
`+z)}else N!==""?je("WebGLProgram: Program Info Log:",N):(V===""||Y==="")&&(X=!1);X&&(E.diagnostics={runnable:I,programLog:N,vertexShader:{log:V,prefix:x},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(P),v=new br(s,_),g=R0(s,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let g;this.getAttributes=function(){return g===void 0&&T(this),g};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,v0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=P,this}let G0=0;class H0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k0(e),t.set(e,n)),n}}class k0{constructor(e){this.id=G0++,this.code=e,this.usedTimes=0}}function V0(i){return i===Mi||i===Cr||i===Pr}function W0(i,e,t,n,s,r){const o=new wc,a=new H0,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,g,D,E,U,C){const B=E.fog,N=U.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,I=e.get(v.envMap||V,Y),X=h[v.type];let H=n.precision;v.precision!==null&&(H=n.getMaxPrecision(v.precision),H!==v.precision&&je("WebGLProgram.getParameters:",v.precision,"not supported, using",H,"instead."));const z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,q=z!==void 0?z.length:0;let oe=0;N.morphAttributes.position!==void 0&&(oe=1),N.morphAttributes.normal!==void 0&&(oe=2),N.morphAttributes.color!==void 0&&(oe=3);let xe,$,ve,te;if(X){const Oe=Ln[X];xe=Oe.vertexShader,$=Oe.fragmentShader}else{xe=v.vertexShader,$=v.fragmentShader;const Oe=a.getVertexShaderStage(v),ft=a.getFragmentShaderStage(v);a.update(v,Oe,ft),ve=Oe.id,te=ft.id}const Ue=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,tt=U.isBatchedMesh===!0,Ge=!!v.map,ee=!!v.matcap,Se=!!I,W=Se&&I.isPMREMTexture===!0,de=!!v.aoMap,me=!!v.lightMap,pe=!!v.bumpMap&&v.wireframe===!1,ue=!!v.normalMap,Ce=!!v.displacementMap,ge=!!v.emissiveMap,Ne=!!v.metalnessMap,Ie=!!v.roughnessMap,We=v.anisotropy>0,L=v.clearcoat>0,He=v.diffuseRoughness>0,ne=v.dispersion>0,ye=v.retroreflectivity>0,le=v.iridescence>0,qe=v.sheen>0,Ee=v.transmission>0,ke=We&&!!v.anisotropyMap,R=L&&!!v.clearcoatMap,y=L&&!!v.clearcoatNormalMap,F=L&&!!v.clearcoatRoughnessMap,Z=He&&!!v.diffuseRoughnessMap,G=le&&!!v.iridescenceMap,he=le&&!!v.iridescenceThicknessMap,fe=qe&&!!v.sheenColorMap,ie=qe&&!!v.sheenRoughnessMap,re=!!v.specularMap,_e=!!v.specularColorMap,O=!!v.specularIntensityMap,ce=Ee&&!!v.transmissionMap,ae=Ee&&!!v.thicknessMap,Te=!!v.gradientMap,Ae=!!v.alphaMap,Pe=v.alphaTest>0,Je=!!v.alphaHash,et=!!v.extensions;let be=qn;v.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(be=i.toneMapping);const Ke=W?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,nt={shaderID:X,shaderType:v.type,shaderName:v.name,vertexShader:xe,fragmentShader:$,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:te,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:H,batching:tt,batchingColor:tt&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:ee,envMap:Se,envMapMode:Se&&I.mapping,envMapPMREM:W,envMapMaxLod:W?Ke.length-1:null,envMapSize:W?Ke[0].width:null,aoMap:de,lightMap:me,bumpMap:pe,normalMap:ue,displacementMap:Ce,emissiveMap:ge,normalMapObjectSpace:ue&&v.normalMapType===Uu,normalMapTangentSpace:ue&&v.normalMapType===Lr,packedNormalMap:ue&&v.normalMapType===Lr&&V0(v.normalMap.format),metalnessMap:Ne,roughnessMap:Ie,anisotropy:We,anisotropyMap:ke,clearcoat:L,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:F,diffuseRoughness:He,diffuseRoughnessMap:Z,dispersion:ne,retroreflection:ye,iridescence:le,iridescenceMap:G,iridescenceThicknessMap:he,sheen:qe,sheenColorMap:fe,sheenRoughnessMap:ie,specularMap:re,specularColorMap:_e,specularIntensityMap:O,transmission:Ee,transmissionMap:ce,thicknessMap:ae,gradientMap:Te,opaque:v.transparent===!1&&v.blending===Ss&&v.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Pe,alphaHash:Je,combine:v.combine,mapUv:Ge&&f(v.map.channel),aoMapUv:de&&f(v.aoMap.channel),lightMapUv:me&&f(v.lightMap.channel),bumpMapUv:pe&&f(v.bumpMap.channel),normalMapUv:ue&&f(v.normalMap.channel),displacementMapUv:Ce&&f(v.displacementMap.channel),emissiveMapUv:ge&&f(v.emissiveMap.channel),metalnessMapUv:Ne&&f(v.metalnessMap.channel),roughnessMapUv:Ie&&f(v.roughnessMap.channel),anisotropyMapUv:ke&&f(v.anisotropyMap.channel),clearcoatMapUv:R&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Z&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:G&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:ie&&f(v.sheenRoughnessMap.channel),specularMapUv:re&&f(v.specularMap.channel),specularColorMapUv:_e&&f(v.specularColorMap.channel),specularIntensityMapUv:O&&f(v.specularIntensityMap.channel),transmissionMapUv:ce&&f(v.transmissionMap.channel),thicknessMapUv:ae&&f(v.thicknessMap.channel),alphaMapUv:Ae&&f(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||We),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Ge||Ae),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&ue===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:oe,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:C.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===xt,decodeVideoTextureEmissive:ge&&v.emissiveMap.isVideoTexture===!0&&dt.getTransfer(v.emissiveMap.colorSpace)===xt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:et&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&v.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function x(v){const g=[];if(v.shaderID?g.push(v.shaderID):(g.push(v.customVertexShaderID),g.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)g.push(D),g.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(g,v),m(g,v),g.push(i.outputColorSpace)),g.push(v.customProgramCacheKey),g.join()}function p(v,g){v.push(g.precision),v.push(g.outputColorSpace),v.push(g.envMapMode),v.push(g.envMapPMREM),v.push(g.envMapMaxLod),v.push(g.envMapSize),v.push(g.mapUv),v.push(g.alphaMapUv),v.push(g.lightMapUv),v.push(g.aoMapUv),v.push(g.bumpMapUv),v.push(g.normalMapUv),v.push(g.displacementMapUv),v.push(g.emissiveMapUv),v.push(g.metalnessMapUv),v.push(g.roughnessMapUv),v.push(g.anisotropyMapUv),v.push(g.clearcoatMapUv),v.push(g.clearcoatNormalMapUv),v.push(g.clearcoatRoughnessMapUv),v.push(g.diffuseRoughnessMapUv),v.push(g.iridescenceMapUv),v.push(g.iridescenceThicknessMapUv),v.push(g.sheenColorMapUv),v.push(g.sheenRoughnessMapUv),v.push(g.specularMapUv),v.push(g.specularColorMapUv),v.push(g.specularIntensityMapUv),v.push(g.transmissionMapUv),v.push(g.thicknessMapUv),v.push(g.combine),v.push(g.fogExp2),v.push(g.sizeAttenuation),v.push(g.morphTargetsCount),v.push(g.numSunLights),v.push(g.numDirLights),v.push(g.numPointLights),v.push(g.numSpotLights),v.push(g.numSpotLightMaps),v.push(g.numHemiLights),v.push(g.numRectAreaLights),v.push(g.numSunLightShadows),v.push(g.numDirLightShadows),v.push(g.numPointLightShadows),v.push(g.numSpotLightShadows),v.push(g.numSpotLightShadowsWithMaps),v.push(g.numLightProbes),v.push(g.numLightProbeGrids),v.push(g.shadowMapType),v.push(g.toneMapping),v.push(g.numClippingPlanes),v.push(g.numClipIntersection),v.push(g.depthPacking)}function m(v,g){o.disableAll(),g.instancing&&o.enable(0),g.instancingColor&&o.enable(1),g.instancingMorph&&o.enable(2),g.matcap&&o.enable(3),g.envMap&&o.enable(4),g.normalMapObjectSpace&&o.enable(5),g.normalMapTangentSpace&&o.enable(6),g.clearcoat&&o.enable(7),g.iridescence&&o.enable(8),g.alphaTest&&o.enable(9),g.vertexColors&&o.enable(10),g.vertexAlphas&&o.enable(11),g.vertexUv1s&&o.enable(12),g.vertexUv2s&&o.enable(13),g.vertexUv3s&&o.enable(14),g.vertexTangents&&o.enable(15),g.anisotropy&&o.enable(16),g.alphaHash&&o.enable(17),g.batching&&o.enable(18),g.dispersion&&o.enable(19),g.retroreflection&&o.enable(24),g.diffuseRoughness&&o.enable(25),g.batchingColor&&o.enable(20),g.gradientMap&&o.enable(21),g.packedNormalMap&&o.enable(22),g.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),g.numLightProbeGrids>0&&o.enable(22),g.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function M(v){const g=h[v.type];let D;if(g){const E=Ln[g];D=Qi.clone(E.uniforms)}else D=v.uniforms;return D}function w(v,g){let D=u.get(g);return D!==void 0?++D.usedTimes:(D=new z0(i,g,v,s),l.push(D),u.set(g,D)),D}function S(v){if(--v.usedTimes===0){const g=l.indexOf(v);l[g]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function P(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:P,programs:l,dispose:T}}function X0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ec(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,_,x,p,m){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:_,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},i[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=_,M.materialVariant=o(h),M.groupOrder=x,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function c(h,f,_,x,p,m,M){M.reversedDepth===!0&&(p=-p);const w=a(h,f,_,x,p,m);_.transmission>0?n.push(w):_.transparent===!0?s.push(w):t.push(w)}function l(h,f,_,x,p,m){const M=a(h,f,_,x,p,m);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||q0),n.length>1&&n.sort(f||ec),s.length>1&&s.sort(f||ec)}function d(){for(let h=e,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function Y0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new tc,i.set(n,[o])):s>=r.length?(o=new tc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new Qe};break;case"SpotLight":t={position:new A,direction:new A,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Z0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let K0=0;function J0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q0(i){const e=new $0,t=Z0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new mt,o=new mt;function a(l){let u=0,d=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,M=0,w=0,S=0,P=0,T=0,v=0,g=0,D=0,E=0;l.sort(J0);for(let C=0,B=l.length;C<B;C++){const N=l[C],V=N.color,Y=N.intensity,I=N.distance;let X=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Mi?X=N.shadow.map.texture:X=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=V.r*Y,d+=V.g*Y,h+=V.b*Y;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],Y);E++}else if(N.isSunLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const z=N.shadow,q=t.get(N);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[_]=q,n.sunShadowMap[_]=X;const oe=z.getViewportCount();for(let xe=0;xe<oe;xe++)n.sunShadowMatrix[x+xe]=z.getMatrix(xe),n.sunShadowCascade[x+xe]=z._cascadeData[xe];x+=oe,_++}n.sun[f]=H,f++}else if(N.isDirectionalLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const z=N.shadow,q=t.get(N);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=N.shadow.matrix,P++}n.directional[p]=H,p++}else if(N.isSpotLight){const H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(V).multiplyScalar(Y),H.distance=I,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[M]=H;const z=N.shadow;if(N.map&&(n.spotLightMap[g]=N.map,g++,z.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[M]=z.matrix,N.castShadow){const q=t.get(N);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,n.spotShadow[M]=q,n.spotShadowMap[M]=X,v++}M++}else if(N.isRectAreaLight){const H=e.get(N);H.color.copy(V).multiplyScalar(Y),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=H,w++}else if(N.isPointLight){const H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const z=N.shadow,q=t.get(N);q.shadowIntensity=z.intensity,q.shadowBias=z.bias,q.shadowNormalBias=z.normalBias,q.shadowRadius=z.radius,q.shadowMapSize=z.mapSize,q.shadowCameraNear=z.camera.near,q.shadowCameraFar=z.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=N.shadow.matrix,T++}n.point[m]=H,m++}else if(N.isHemisphereLight){const H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(Y),H.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[S]=H,S++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const U=n.hash;(U.sunLength!==f||U.directionalLength!==p||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==w||U.hemiLength!==S||U.numSunShadows!==_||U.numDirectionalShadows!==P||U.numPointShadows!==T||U.numSpotShadows!==v||U.numSpotMaps!==g||U.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+g-D,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=E,U.sunLength=f,U.directionalLength=p,U.pointLength=m,U.spotLength=M,U.rectAreaLength=w,U.hemiLength=S,U.numSunShadows=_,U.numDirectionalShadows=P,U.numPointShadows=T,U.numSpotShadows=v,U.numSpotMaps=g,U.numLightProbes=E,n.version=K0++)}function c(l,u){let d=0,h=0,f=0,_=0,x=0,p=0;const m=u.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){const S=l[M];if(S.isSunLight){const P=n.sun[d];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(m),d++}else if(S.isDirectionalLight){const P=n.directional[h];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),h++}else if(S.isSpotLight){const P=n.spot[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(m),_++}else if(S.isRectAreaLight){const P=n.rectArea[x];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const P=n.point[f];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const P=n.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function nc(i){const e=new Q0(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function c(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function l(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function j0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new nc(i),e.set(s,[a])):r>=o.length?(a=new nc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ng=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],ig=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],ic=new mt,gs=new A,Eo=new A;function sg(i,e,t){let n=new Ls;const s=new Re,r=new Re,o=new Tt,a=new fh,c=new ph,l={},u=t.maxTextureSize,d={[xi]:en,[en]:xi,[on]:on},h=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:eg,fragmentShader:tg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new we(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let m=this.type;this.render=function(T,v,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===hu&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vr);const D=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),C=i.state;C.setBlending(_i),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const B=m!==this.type;B&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=T.length;N<V;N++){const Y=T[N],I=Y.shadow;if(I===void 0){je("WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);const X=I.getFrameExtents();s.multiply(X),r.copy(I.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,I.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,I.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(I.camera._reversedDepth=H,I.map===null||B===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===vs){if(Y.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new nn(s.x,s.y,{format:Mi,type:tn,minFilter:an,magFilter:an,generateMipmaps:!1}),I.map.texture.name=Y.name+".shadowMap",I.map.depthTexture=new Zi(s.x,s.y,En),I.map.depthTexture.name=Y.name+".shadowMapDepth",I.map.depthTexture.format=oi,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Vt,I.map.depthTexture.magFilter=Vt}else Y.isPointLight?(I.map=new Ga(s.x),I.map.depthTexture=new Nc(s.x,Un)):(I.map=new nn(s.x,s.y),I.map.depthTexture=new Zi(s.x,s.y,Un)),I.map.depthTexture.name=Y.name+".shadowMap",I.map.depthTexture.format=oi,this.type===vr?(I.map.depthTexture.compareFunction=H?vc:_c,I.map.depthTexture.minFilter=an,I.map.depthTexture.magFilter=an):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Vt,I.map.depthTexture.magFilter=Vt);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==s.x||I.map.height!==s.y)&&I.map.setSize(s.x,s.y);const z=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();Y.isPointLight!==!0&&I.updateMatrices(Y,g);const q=(I.camera.layers.mask&4294967294)!==0?I.camera.layers:g.layers;for(let oe=0;oe<z;oe++){const xe=I.getCamera(oe);if(Y.isPointLight){const $=I.camera,ve=I.matrix,te=Y.distance||$.far;te!==$.far&&($.far=te,$.updateProjectionMatrix()),gs.setFromMatrixPosition(Y.matrixWorld),$.position.copy(gs),Eo.copy($.position),Eo.add(ng[oe]),$.up.copy(ig[oe]),$.lookAt(Eo),$.updateMatrixWorld(),ve.makeTranslation(-gs.x,-gs.y,-gs.z),ic.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),I._frustum.setFromProjectionMatrix(ic,$.coordinateSystem,$.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)i.setRenderTarget(I.map,oe),i.clear();else{oe===0&&(i.setRenderTarget(I.map),i.clear());const $=I.getViewport(oe);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),C.viewport(o)}n=I.getFrustum(oe),S(v,g,xe,Y,q,this.type)}I.isPointLightShadow!==!0&&this.type===vs&&M(I,g),I.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,E,U)};function M(T,v){const g=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new nn(s.x,s.y,{format:Mi,type:tn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(v,null,g,h,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(v,null,g,f,x,null)}function w(T,v,g,D){let E=null;const U=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)E=U;else if(E=g.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const C=E.uuid,B=v.uuid;let N=l[C];N===void 0&&(N={},l[C]=N);let V=N[B];V===void 0&&(V=E.clone(),N[B]=V,v.addEventListener("dispose",P)),E=V}if(E.visible=v.visible,E.wireframe=v.wireframe,D===vs?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:d[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,g.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=i.properties.get(E);C.light=g}return E}function S(T,v,g,D,E,U){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===vs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);const N=e.update(T),V=T.material;if(Array.isArray(V)){const Y=N.groups;for(let I=0,X=Y.length;I<X;I++){const H=Y[I],z=V[H.materialIndex];if(z&&z.visible){const q=w(T,z,D,U);T.onBeforeShadow(i,T,v,g,N,q,H),i.renderBufferDirect(g,null,N,q,T,H),T.onAfterShadow(i,T,v,g,N,q,H)}}}else if(V.visible){const Y=w(T,V,D,U);T.onBeforeShadow(i,T,v,g,N,Y,null),i.renderBufferDirect(g,null,N,Y,T,null),T.onAfterShadow(i,T,v,g,N,Y,null)}}const B=T.children;for(let N=0,V=B.length;N<V;N++)S(B[N],v,g,D,E,U)}function P(T){T.target.removeEventListener("dispose",P);for(const g in l){const D=l[g],E=T.target.uuid;E in D&&(D[E].dispose(),delete D[E])}}}function rg(i,e){function t(){let O=!1;const ce=new Tt;let ae=null;const Te=new Tt(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!O&&(i.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,Pe,Je,et,be){be===!0&&(Ae*=et,Pe*=et,Je*=et),ce.set(Ae,Pe,Je,et),Te.equals(ce)===!1&&(i.clearColor(Ae,Pe,Je,et),Te.copy(ce))},reset:function(){O=!1,ae=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,ce=!1,ae=null,Te=null,Ae=null;return{setReversed:function(Pe){if(ce!==Pe){const Je=e.get("EXT_clip_control");Pe?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),ce=Pe;const et=Ae;Ae=null,this.setClear(et)}},getReversed:function(){return ce},setTest:function(Pe){Pe?Me(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!O&&(i.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(ce&&(Pe=qu[Pe]),Te!==Pe){switch(Pe){case wo:i.depthFunc(i.NEVER);break;case To:i.depthFunc(i.ALWAYS);break;case Ao:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Ro:i.depthFunc(i.EQUAL);break;case Co:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case Lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){Ae!==Pe&&(Ae=Pe,ce&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){O=!1,ae=null,Te=null,Ae=null,ce=!1}}}function s(){let O=!1,ce=null,ae=null,Te=null,Ae=null,Pe=null,Je=null,et=null,be=null;return{setTest:function(Ke){O||(Ke?Me(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!O&&(i.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,nt,Oe){(ae!==Ke||Te!==nt||Ae!==Oe)&&(i.stencilFunc(Ke,nt,Oe),ae=Ke,Te=nt,Ae=Oe)},setOp:function(Ke,nt,Oe){(Pe!==Ke||Je!==nt||et!==Oe)&&(i.stencilOp(Ke,nt,Oe),Pe=Ke,Je=nt,et=Oe)},setLocked:function(Ke){O=Ke},setClear:function(Ke){be!==Ke&&(i.clearStencil(Ke),be=Ke)},reset:function(){O=!1,ce=null,ae=null,Te=null,Ae=null,Pe=null,Je=null,et=null,be=null}}}const r=new t,o=new n,a=new s;let c={};const l=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],x=null,p=!1,m=null,M=null,w=null,S=null,P=null,T=null,v=null,g=new Qe(0,0,0),D=0,E=!1,U=null,C=null,B=null,N=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=X>=2);let z=null,q={};const oe=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),$=new Tt().fromArray(oe),ve=new Tt().fromArray(xe);function te(O,ce,ae,Te){const Ae=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(O,Pe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ae;Je++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ce+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Pe}const Ue={};Ue[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(i.DEPTH_TEST),o.setFunc(Ts),pe(!1),ue(Ka),Me(i.CULL_FACE),de(_i);function Me(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Fe(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function tt(O,ce){return h[O]!==ce?(i.bindFramebuffer(O,ce),h[O]=ce,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ge(O,ce){let ae=_,Te=!1;if(O){ae=f.get(ce),ae===void 0&&(ae=[],f.set(ce,ae));const Ae=O.textures;if(ae.length!==Ae.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Je=Ae.length;Pe<Je;Pe++)ae[Pe]=i.COLOR_ATTACHMENT0+Pe;ae.length=Ae.length,Te=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ae)}function ee(O){return x!==O?(i.useProgram(O),x=O,!0):!1}const Se={[Hi]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};Se[gu]=i.MIN,Se[_u]=i.MAX;const W={[vu]:i.ZERO,[xu]:i.ONE,[Mu]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[bu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[Su]:i.ONE_MINUS_SRC_COLOR,[cc]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Eu]:i.ONE_MINUS_DST_ALPHA,[Au]:i.CONSTANT_COLOR,[Ru]:i.ONE_MINUS_CONSTANT_COLOR,[Cu]:i.CONSTANT_ALPHA,[Pu]:i.ONE_MINUS_CONSTANT_ALPHA};function de(O,ce,ae,Te,Ae,Pe,Je,et,be,Ke){if(O===_i){p===!0&&(Fe(i.BLEND),p=!1);return}if(p===!1&&(Me(i.BLEND),p=!0),O!==fu){if(O!==m||Ke!==E){if((M!==Hi||P!==Hi)&&(i.blendEquation(i.FUNC_ADD),M=Hi,P=Hi),Ke)switch(O){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFunc(i.ONE,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_t("WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ja:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qa:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",O);break}w=null,S=null,T=null,v=null,g.set(0,0,0),D=0,m=O,E=Ke}return}Ae=Ae||ce,Pe=Pe||ae,Je=Je||Te,(ce!==M||Ae!==P)&&(i.blendEquationSeparate(Se[ce],Se[Ae]),M=ce,P=Ae),(ae!==w||Te!==S||Pe!==T||Je!==v)&&(i.blendFuncSeparate(W[ae],W[Te],W[Pe],W[Je]),w=ae,S=Te,T=Pe,v=Je),(et.equals(g)===!1||be!==D)&&(i.blendColor(et.r,et.g,et.b,be),g.copy(et),D=be),m=O,E=!1}function me(O,ce){O.side===on?Fe(i.CULL_FACE):Me(i.CULL_FACE);let ae=O.side===en;ce&&(ae=!ae),pe(ae),O.blending===Ss&&O.transparent===!1?de(_i):de(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Te=O.stencilWrite;a.setTest(Te),Te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function ue(O){O!==uu?(Me(i.CULL_FACE),O!==C&&(O===Ka?i.cullFace(i.BACK):O===du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),C=O}function Ce(O){O!==B&&(I&&i.lineWidth(O),B=O)}function ge(O,ce,ae){O?(Me(i.POLYGON_OFFSET_FILL),(N!==ce||V!==ae)&&(N=ce,V=ae,o.getReversed()&&(ce=-ce,ae=-ae),i.polygonOffset(ce,ae))):Fe(i.POLYGON_OFFSET_FILL)}function Ne(O){O?Me(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Ie(O){O===void 0&&(O=i.TEXTURE0+Y-1),z!==O&&(i.activeTexture(O),z=O)}function We(O,ce,ae){ae===void 0&&(z===null?ae=i.TEXTURE0+Y-1:ae=z);let Te=q[ae];Te===void 0&&(Te={type:void 0,texture:void 0},q[ae]=Te),(Te.type!==O||Te.texture!==ce)&&(z!==ae&&(i.activeTexture(ae),z=ae),i.bindTexture(O,ce||Ue[O]),Te.type=O,Te.texture=ce)}function L(){const O=q[z];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function He(){try{i.compressedTexImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function ne(){try{i.compressedTexImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function ye(){try{i.texSubImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function le(){try{i.texSubImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function qe(){try{i.compressedTexSubImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function ke(){try{i.texStorage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function R(){try{i.texStorage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function y(){try{i.texImage2D(...arguments)}catch(O){_t("WebGLState:",O)}}function F(){try{i.texImage3D(...arguments)}catch(O){_t("WebGLState:",O)}}function Z(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function G(O,ce){d[O]!==ce&&(i.pixelStorei(O,ce),d[O]=ce)}function he(O){$.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$.copy(O))}function fe(O){ve.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ve.copy(O))}function ie(O,ce){let ae=l.get(ce);ae===void 0&&(ae=new WeakMap,l.set(ce,ae));let Te=ae.get(O);Te===void 0&&(Te=i.getUniformBlockIndex(ce,O.name),i.uniformBlockBinding(ce,Te,Te),ae.set(O,Te))}function re(O,ce,ae){const Ae=l.get(ce).get(O);c[Ae]!==ae&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ae,ae),c[Ae]=ae)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},z=null,q={},h={},c={},f=new WeakMap,_=[],x=null,p=!1,m=null,M=null,w=null,S=null,P=null,T=null,v=null,g=new Qe(0,0,0),D=0,E=!1,U=null,C=null,B=null,N=null,V=null,$.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:Fe,bindFramebuffer:tt,drawBuffers:Ge,useProgram:ee,setBlending:de,setMaterial:me,setFlipSided:pe,setCullFace:ue,setLineWidth:Ce,setPolygonOffset:ge,setScissorTest:Ne,activeTexture:Ie,bindTexture:We,unbindTexture:L,compressedTexImage2D:He,compressedTexImage3D:ne,texImage2D:y,texImage3D:F,pixelStorei:G,getParameter:Z,updateUBOMapping:ie,uniformBlockBinding:re,texStorage2D:ke,texStorage3D:R,texSubImage2D:ye,texSubImage3D:le,compressedTexSubImage2D:qe,compressedTexSubImage3D:Ee,scissor:he,viewport:fe,reset:_e}}function og(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,u=new WeakMap,d=new Set;let h;const f=new WeakMap,_=new Set,x=new FinalizationRegistry(R=>_.delete(R));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return p?new OffscreenCanvas(R,y):Nr("canvas")}function M(R,y,F){let Z=1;const G=ke(R);if((G.width>F||G.height>F)&&(Z=F/Math.max(G.width,G.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const he=Math.floor(Z*G.width),fe=Math.floor(Z*G.height);h===void 0&&(h=m(he,fe));const ie=y?m(he,fe):h;return ie.width=he,ie.height=fe,ie.getContext("2d").drawImage(R,0,0,he,fe),je("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+he+"x"+fe+")."),ie}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),R;return R}function w(R){return R.generateMipmaps}function S(R){i.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,y,F,Z,G,he=!1){if(R!==null){if(i[R]!==void 0)return i[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;Z&&(fe=e.get("EXT_texture_norm16"),fe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=y;if(y===i.RED&&(F===i.FLOAT&&(ie=i.R32F),F===i.HALF_FLOAT&&(ie=i.R16F),F===i.UNSIGNED_BYTE&&(ie=i.R8),F===i.UNSIGNED_SHORT&&fe&&(ie=fe.R16_EXT),F===i.SHORT&&fe&&(ie=fe.R16_SNORM_EXT)),y===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.R8UI),F===i.UNSIGNED_SHORT&&(ie=i.R16UI),F===i.UNSIGNED_INT&&(ie=i.R32UI),F===i.BYTE&&(ie=i.R8I),F===i.SHORT&&(ie=i.R16I),F===i.INT&&(ie=i.R32I)),y===i.RG&&(F===i.FLOAT&&(ie=i.RG32F),F===i.HALF_FLOAT&&(ie=i.RG16F),F===i.UNSIGNED_BYTE&&(ie=i.RG8),F===i.UNSIGNED_SHORT&&fe&&(ie=fe.RG16_EXT),F===i.SHORT&&fe&&(ie=fe.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.RG8UI),F===i.UNSIGNED_SHORT&&(ie=i.RG16UI),F===i.UNSIGNED_INT&&(ie=i.RG32UI),F===i.BYTE&&(ie=i.RG8I),F===i.SHORT&&(ie=i.RG16I),F===i.INT&&(ie=i.RG32I)),y===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),F===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),F===i.UNSIGNED_INT&&(ie=i.RGB32UI),F===i.BYTE&&(ie=i.RGB8I),F===i.SHORT&&(ie=i.RGB16I),F===i.INT&&(ie=i.RGB32I)),y===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),F===i.UNSIGNED_INT&&(ie=i.RGBA32UI),F===i.BYTE&&(ie=i.RGBA8I),F===i.SHORT&&(ie=i.RGBA16I),F===i.INT&&(ie=i.RGBA32I)),y===i.RGB&&(F===i.UNSIGNED_SHORT&&fe&&(ie=fe.RGB16_EXT),F===i.SHORT&&fe&&(ie=fe.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),y===i.RGBA){const re=he?Ir:dt.getTransfer(G);F===i.FLOAT&&(ie=i.RGBA32F),F===i.HALF_FLOAT&&(ie=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ie=re===xt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&fe&&(ie=fe.RGBA16_EXT),F===i.SHORT&&fe&&(ie=fe.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(R,y){let F;return R?y===null||y===Un||y===$i?F=i.DEPTH24_STENCIL8:y===En?F=i.DEPTH32F_STENCIL8:y===Rs&&(F=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Un||y===$i?F=i.DEPTH_COMPONENT24:y===En?F=i.DEPTH_COMPONENT32F:y===Rs&&(F=i.DEPTH_COMPONENT16),F}function g(R,y){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function D(R){const y=new WeakRef(R);n.get(R).__ref=y,_.add(y),x.register(R,y,y)}function E(R){const y=n.get(R).__ref;y!==void 0&&(_.delete(y),x.unregister(y))}function U(R){B(R.target)}function C(R){N(R.target)}function B(R){R.removeEventListener("dispose",U),E(R),Y(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function N(R){R.removeEventListener("dispose",C),E(R),X(R)}function V(){for(const R of _){const y=R.deref();y!==void 0&&(y.isRenderTarget===!0?N(y):B(y))}_.clear(),d.clear()}function Y(R){const y=n.get(R);if(y.__webglInit===void 0)return;const F=R.source,Z=f.get(F);if(Z){const G=Z[y.__cacheKey];G.usedTimes--,G.usedTimes===0&&I(R),Object.keys(Z).length===0&&f.delete(F)}n.remove(R)}function I(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const F=R.source,Z=f.get(F);delete Z[y.__cacheKey],o.memory.textures--}function X(R){const y=n.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();const F=R.depthTexture;if(F&&F.renderTarget===R&&B(F),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let he=0;he<y.__webglFramebuffer[G].length;he++)i.deleteFramebuffer(y.__webglFramebuffer[G][he]);else i.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)i.deleteFramebuffer(y.__webglFramebuffer[G]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=R.textures;for(let G=0,he=Z.length;G<he;G++){const fe=n.get(Z[G]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(Z[G])}n.remove(R)}let H=0;function z(){H=0}function q(){return H}function oe(R){H=R}function xe(){const R=H;return R>=s.maxTextures&&je("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,R}function $(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function ve(R,y){const F=n.get(R);if(R.isVideoTexture&&qe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const Z=R.image;if(Z===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{me(F,R,y);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+y)}function te(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){me(F,R,y);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+y)}function Ue(R,y){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){me(F,R,y);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+y)}function Me(R,y){const F=n.get(R);if(R.version>0&&F.__version!==R.version){pe(F,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+y)}const Fe={[Rr]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},tt={[Vt]:i.NEAREST,[Iu]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},Ge={[Ou]:i.NEVER,[xc]:i.ALWAYS,[Bu]:i.LESS,[_c]:i.LEQUAL,[zu]:i.EQUAL,[vc]:i.GEQUAL,[Gu]:i.GREATER,[Hu]:i.NOTEQUAL};function ee(R,y){if(y.type===En&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===$r||y.magFilter===ks||y.magFilter===si||y.minFilter===an||y.minFilter===$r||y.minFilter===ks||y.minFilter===si)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Fe[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Fe[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Fe[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==ks&&y.minFilter!==si||y.type===En&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Se(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",U),D(y));const Z=y.source;let G=f.get(Z);G===void 0&&(G={},f.set(Z,G));const he=$(y);if(he!==R.__cacheKey){G[he]===void 0&&(G[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),G[he].usedTimes++;const fe=G[R.__cacheKey];fe!==void 0&&(G[R.__cacheKey].usedTimes--,fe.usedTimes===0&&I(y)),R.__cacheKey=he,R.__webglTexture=G[he].texture}return F}function W(R,y,F){return Math.floor(Math.floor(R/F)/y)}function de(R,y,F,Z){const he=R.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,F,Z,y.data);else{he.sort((O,ce)=>O.start-ce.start);let fe=0;for(let O=1;O<he.length;O++){const ce=he[fe],ae=he[O],Te=ce.start+ce.count,Ae=W(ae.start,y.width,4),Pe=W(ce.start,y.width,4);ae.start<=Te+1&&Ae===Pe&&W(ae.start+ae.count-1,y.width,4)===Ae?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++fe,he[fe]=ae)}he.length=fe+1;const ie=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let O=0,ce=he.length;O<ce;O++){const ae=he[O],Te=Math.floor(ae.start/4),Ae=Math.ceil(ae.count/4),Pe=Te%y.width,Je=Math.floor(Te/y.width),et=Ae,be=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Je),t.texSubImage2D(i.TEXTURE_2D,0,Pe,Je,et,be,F,Z,y.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function me(R,y,F){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const G=Se(R,y),he=y.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+F);const fe=n.get(he);if(he.version!==fe.__version||G===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const be=dt.getPrimaries(dt.workingColorSpace),Ke=y.colorSpace===ii?null:dt.getPrimaries(y.colorSpace),nt=y.colorSpace===ii||be===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let re=M(y.image,!1,s.maxTextureSize);re=Ee(y,re);const _e=r.convert(y.format,y.colorSpace),O=r.convert(y.type);let ce=T(y.internalFormat,_e,O,y.normalized,y.colorSpace,y.isVideoTexture);ee(Z,y);let ae;const Te=y.mipmaps,Ae=y.isVideoTexture!==!0,Pe=fe.__version===void 0||G===!0,Je=he.dataReady,et=g(y,re);if(y.isDepthTexture)ce=v(y.format===ri,y.type),Pe&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,ce,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ce,re.width,re.height,0,_e,O,null));else if(y.isDataTexture)if(Te.length>0){Ae&&Pe&&t.texStorage2D(i.TEXTURE_2D,et,ce,Te[0].width,Te[0].height);for(let be=0,Ke=Te.length;be<Ke;be++)ae=Te[be],Ae?Je&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,ae.width,ae.height,_e,O,ae.data):t.texImage2D(i.TEXTURE_2D,be,ce,ae.width,ae.height,0,_e,O,ae.data);y.generateMipmaps=!1}else Ae?(Pe&&t.texStorage2D(i.TEXTURE_2D,et,ce,re.width,re.height),Je&&de(y,re,_e,O)):t.texImage2D(i.TEXTURE_2D,0,ce,re.width,re.height,0,_e,O,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ae&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,ce,Te[0].width,Te[0].height,re.depth);for(let be=0,Ke=Te.length;be<Ke;be++)if(ae=Te[be],y.format!==Dn)if(_e!==null)if(Ae){if(Je)if(y.layerUpdates.size>0){const nt=Fl(ae.width,ae.height,y.format,y.type);for(const Oe of y.layerUpdates){const ft=ae.data.subarray(Oe*nt/ae.data.BYTES_PER_ELEMENT,(Oe+1)*nt/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,Oe,ae.width,ae.height,1,_e,ft)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ae.width,ae.height,re.depth,_e,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,ce,ae.width,ae.height,re.depth,0,ae.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,ae.width,ae.height,re.depth,_e,O,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,ce,ae.width,ae.height,re.depth,0,_e,O,ae.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ae&&Pe&&t.texStorage2D(i.TEXTURE_2D,et,ce,Te[0].width,Te[0].height);for(let be=0,Ke=Te.length;be<Ke;be++)ae=Te[be],y.format!==Dn?_e!==null?Ae?Je&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,ae.width,ae.height,_e,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,be,ce,ae.width,ae.height,0,ae.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Je&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,ae.width,ae.height,_e,O,ae.data):t.texImage2D(i.TEXTURE_2D,be,ce,ae.width,ae.height,0,_e,O,ae.data)}else if(y.isDataArrayTexture)if(Ae){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,et,ce,re.width,re.height,re.depth),Je)if(y.layerUpdates.size>0){const be=Fl(re.width,re.height,y.format,y.type);for(const Ke of y.layerUpdates){const nt=re.data.subarray(Ke*be/re.data.BYTES_PER_ELEMENT,(Ke+1)*be/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,re.width,re.height,1,_e,O,nt)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,_e,O,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,re.width,re.height,re.depth,0,_e,O,re.data);else if(y.isData3DTexture)Ae?(Pe&&t.texStorage3D(i.TEXTURE_3D,et,ce,re.width,re.height,re.depth),Je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,_e,O,re.data)):t.texImage3D(i.TEXTURE_3D,0,ce,re.width,re.height,re.depth,0,_e,O,re.data);else if(y.isFramebufferTexture){if(Pe)if(Ae)t.texStorage2D(i.TEXTURE_2D,et,ce,re.width,re.height);else{let be=re.width,Ke=re.height;for(let nt=0;nt<et;nt++)t.texImage2D(i.TEXTURE_2D,nt,ce,be,Ke,0,_e,O,null),be>>=1,Ke>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const be=i.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),re.parentNode!==be){be.appendChild(re),d.add(y),be.onpaint=Ke=>{const nt=Ke.changedElements;for(const Oe of d)nt.includes(Oe.image)&&(Oe.needsUpdate=!0)},be.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{const nt=i.RGBA,Oe=i.RGBA,ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,Oe,ft,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ae&&Pe){const be=ke(Te[0]);t.texStorage2D(i.TEXTURE_2D,et,ce,be.width,be.height)}for(let be=0,Ke=Te.length;be<Ke;be++)ae=Te[be],Ae?Je&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,_e,O,ae):t.texImage2D(i.TEXTURE_2D,be,ce,_e,O,ae);y.generateMipmaps=!1}else if(Ae){if(Pe){const be=ke(re);t.texStorage2D(i.TEXTURE_2D,et,ce,be.width,be.height)}Je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,O,re)}else t.texImage2D(i.TEXTURE_2D,0,ce,_e,O,re);w(y)&&y.mipmapsAutoUpdate===!0&&S(Z),fe.__version=he.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function pe(R,y,F){if(y.image.length!==6)return;const Z=Se(R,y),G=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const he=n.get(G);if(G.version!==he.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const fe=dt.getPrimaries(dt.workingColorSpace),ie=y.colorSpace===ii?null:dt.getPrimaries(y.colorSpace),re=y.colorSpace===ii||fe===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,O=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let Oe=0;Oe<6;Oe++)!_e&&!O?ce[Oe]=M(y.image[Oe],!0,s.maxCubemapSize):ce[Oe]=O?y.image[Oe].image:y.image[Oe],ce[Oe]=Ee(y,ce[Oe]);const ae=ce[0],Te=r.convert(y.format,y.colorSpace),Ae=r.convert(y.type);let Pe=T(y.internalFormat,Te,Ae,y.normalized,y.colorSpace);const Je=y.isVideoTexture!==!0,et=he.__version===void 0||Z===!0,be=G.dataReady;let Ke=g(y,ae);ee(i.TEXTURE_CUBE_MAP,y);let nt;if(y.isDepthTexture){if(Pe=v(y.format===ri,y.type),et)if(Je)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,ae.width,ae.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,ae.width,ae.height,0,Te,Ae,null)}else if(_e){Je&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Pe,ae.width,ae.height);for(let Oe=0;Oe<6;Oe++){nt=ce[Oe].mipmaps;for(let ft=0;ft<nt.length;ft++){const Dt=nt[ft];y.format!==Dn?Te!==null?Je?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft,0,0,Dt.width,Dt.height,Te,Dt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft,Pe,Dt.width,Dt.height,0,Dt.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft,0,0,Dt.width,Dt.height,Te,Ae,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft,Pe,Dt.width,Dt.height,0,Te,Ae,Dt.data)}}}else{if(nt=y.mipmaps,Je&&et){nt.length>0&&Ke++;const Oe=ke(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Pe,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(O){Je?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,ce[Oe].width,ce[Oe].height,Te,Ae,ce[Oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,ce[Oe].width,ce[Oe].height,0,Te,Ae,ce[Oe].data);for(let ft=0;ft<nt.length;ft++){const Tn=nt[ft].image[Oe].image;Je?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft+1,0,0,Tn.width,Tn.height,Te,Ae,Tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft+1,Pe,Tn.width,Tn.height,0,Te,Ae,Tn.data)}}else{Je?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Te,Ae,ce[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,Te,Ae,ce[Oe]);for(let ft=0;ft<nt.length;ft++){const Dt=nt[ft];Je?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft+1,0,0,Te,Ae,Dt.image[Oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ft+1,Pe,Te,Ae,Dt.image[Oe])}}}w(y)&&y.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),he.__version=G.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ue(R,y,F,Z,G,he){const fe=r.convert(F.format,F.colorSpace),ie=r.convert(F.type),re=T(F.internalFormat,fe,ie,F.normalized,F.colorSpace),_e=n.get(y),O=n.get(F);if(O.__renderTarget=y,!_e.__hasExternalTextures){const ce=Math.max(1,y.width>>he),ae=Math.max(1,y.height>>he);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,he,re,ce,ae,y.depth,0,fe,ie,null):t.texImage2D(G,he,re,ce,ae,0,fe,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),le(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,G,O.__webglTexture,0,ye(y)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,G,O.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(R,y,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,G=Z&&Z.isDepthTexture?Z.type:null,he=v(y.stencilBuffer,G),fe=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;le(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),he,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),he,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,he,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{const Z=y.textures;for(let G=0;G<Z.length;G++){const he=Z[G],fe=r.convert(he.format,he.colorSpace),ie=r.convert(he.type),re=T(he.internalFormat,fe,ie,he.normalized,he.colorSpace);le(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye(y),re,y.width,y.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye(y),re,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,re,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(R,y,F){const Z=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const G=n.get(y.depthTexture);G.__renderTarget=y;const he=Z?y.depthTexture.image[0]:y.depthTexture.image;(!G.__webglTexture||he.width!==y.width||he.height!==y.height)&&(he.width=y.width,he.height=y.height,y.depthTexture.needsUpdate=!0),Z?Me(y.depthTexture,0):ve(y.depthTexture,0);const fe=G.__webglTexture,ie=ye(y),re=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,_e=y.depthTexture.format===ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===oi)le(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,re,fe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,_e,re,fe,0);else if(y.depthTexture.format===ri)le(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,re,fe,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,_e,re,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(R){const y=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const G=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",G)};Z.addEventListener("dispose",G),y.__depthDisposeCallback=G}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)ge(y.__webglFramebuffer[Z],R,Z);else R.texture.mipmaps.length>0?ge(y.__webglFramebuffer[0],R,0):ge(y.__webglFramebuffer,R,0);else if(F){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ce(y.__webglDepthbuffer[Z],R,!1);else{const G=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,he)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ce(y.__webglDepthbuffer,R,!1);else{const G=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(R,y,F){const Z=n.get(R);y!==void 0&&ue(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ne(R)}function We(R){const y=R.texture,F=n.get(R),Z=n.get(y);R.addEventListener("dispose",C),D(R);const G=R.textures,he=R.isWebGLCubeRenderTarget===!0,fe=G.length>1;if(fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),he){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let re=0;re<y.mipmaps.length;re++)F.__webglFramebuffer[ie][re]=i.createFramebuffer()}else F.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)F.__webglFramebuffer[ie]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ie=0,re=G.length;ie<re;ie++){const _e=n.get(G[ie]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&le(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<G.length;ie++){const re=G[ie];F.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const _e=r.convert(re.format,re.colorSpace),O=r.convert(re.type),ce=T(re.internalFormat,_e,O,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),ae=ye(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ee(i.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ue(F.__webglFramebuffer[ie][re],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else ue(F.__webglFramebuffer[ie],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(y)?S(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let ie=0,re=G.length;ie<re;ie++){const _e=G[ie],O=n.get(_e);let ce=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,O.__webglTexture),ee(ce,_e),ue(F.__webglFramebuffer,R,_e,i.COLOR_ATTACHMENT0+ie,ce,0),w(_e)&&S(ce)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Z.__webglTexture),ee(ie,y),y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)ue(F.__webglFramebuffer[re],R,y,i.COLOR_ATTACHMENT0,ie,re);else ue(F.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,ie,0);w(y)?S(ie):y.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Ne(R)}function L(R){const y=R.textures;for(let F=0,Z=y.length;F<Z;F++){const G=y[F];if(w(G)&&G.mipmapsAutoUpdate===!0){const he=P(R),fe=n.get(G).__webglTexture;t.bindTexture(he,fe),S(he),t.unbindTexture()}}}const He=[];function ne(R){if(R.samples>0){if(le(R)===!1){const y=R.textures,F=R.width,Z=R.height;let G=i.COLOR_BUFFER_BIT;const he=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),ie=y.length>1;if(ie)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const O=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,G,i.NEAREST),c===!0&&(He.length=0,He.push(i.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&He.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,fe.__webglColorRenderbuffer[_e]);const O=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ye(R){return Math.min(s.maxSamples,R.samples)}function le(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function qe(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Ee(R,y){const F=R.colorSpace,Z=R.format,G=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Dr&&F!==ii&&(dt.getTransfer(F)===xt?(Z!==Dn||G!==dn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",F)),y}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=xe,this.resetTextureUnits=z,this.getTextureUnits=q,this.setTextureUnits=oe,this.setTexture2D=ve,this.setTexture2DArray=te,this.setTexture3D=Ue,this.setTextureCube=Me,this.rebindTextures=Ie,this.setupRenderTarget=We,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=le,this.dispose=V}function ag(i,e){function t(n,s=ii){let r;const o=dt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dc)return i.BYTE;if(n===hc)return i.SHORT;if(n===Rs)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===Dn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===ri)return i.DEPTH_STENCIL;if(n===Ta)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Ca)return i.RGBA_INTEGER;if(n===xr||n===Mr||n===Sr||n===yr)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===No||n===Uo||n===Fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===Bo||n===zo||n===Go||n===Ho||n===Cr||n===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===Bo)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Go)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return r.COMPRESSED_RG11_EAC;if(n===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Ko||n===Jo||n===Qo||n===jo||n===ea||n===ta||n===na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ea)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ta)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===na)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ia||n===sa||n===ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ia)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oa||n===aa||n===Pr||n===la)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===la)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jt({vertexShader:lg,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dg extends yi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,_=null;const x=typeof XRWebGLBinding<"u",p=new ug,m={},M=t.getContextAttributes();let w=null,S=null;const P=[],T=[],v=new Re;let g=null,D=null;const E=new rn;E.viewport=new Tt;const U=new rn;U.viewport=new Tt;const C=[E,U],B=new xh;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ve=P[$];return ve===void 0&&(ve=new to,P[$]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function($){let ve=P[$];return ve===void 0&&(ve=new to,P[$]=ve),ve.getGripSpace()},this.getHand=function($){let ve=P[$];return ve===void 0&&(ve=new to,P[$]=ve),ve.getHandSpace()};function Y($){const ve=T.indexOf($.inputSource);if(ve===-1)return;const te=P[ve];te!==void 0&&(te.update($.inputSource,$.frame,l||o),te.dispatchEvent({type:$.type,data:$.inputSource}))}function I(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",X);for(let $=0;$<P.length;$++){const ve=T[$];ve!==null&&(T[$]=null,P[$].disconnect(ve))}N=null,V=null,p.reset();for(const $ in m)delete m[$];if(e.setRenderTarget(w),f=null,h=null,d=null,s=null,S=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(v.width,v.height,!1),D!==null){const $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",I),s.addEventListener("inputsourceschange",X),M.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ue=null,Me=null;M.depth&&(Me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=M.stencil?ri:oi,Ue=M.stencil?$i:Un);const Fe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new nn(h.textureWidth,h.textureHeight,{format:Dn,type:dn,depthTexture:new Zi(h.textureWidth,h.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new nn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X($){for(let ve=0;ve<$.removed.length;ve++){const te=$.removed[ve],Ue=T.indexOf(te);Ue>=0&&(T[Ue]=null,P[Ue].disconnect(te))}for(let ve=0;ve<$.added.length;ve++){const te=$.added[ve];let Ue=T.indexOf(te);if(Ue===-1){for(let Fe=0;Fe<P.length;Fe++)if(Fe>=T.length){T.push(te),Ue=Fe;break}else if(T[Fe]===null){T[Fe]=te,Ue=Fe;break}if(Ue===-1)break}const Me=P[Ue];Me&&Me.connect(te)}}function H($,ve){ve===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ve.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ve=$.near,te=$.far;p.texture!==null&&(p.depthNear>0&&(ve=p.depthNear),p.depthFar>0&&(te=p.depthFar)),B.near=U.near=E.near=ve,B.far=U.far=E.far=te,(N!==B.near||V!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,V=B.far),B.layers.mask=$.layers.mask|6,E.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;const Ue=$.parent,Me=B.cameras;H(B,Ue);for(let Fe=0;Fe<Me.length;Fe++)H(Me[Fe],Ue);B.projectionMatrix.copy(E.projectionMatrix),B.projectionMatrixInverse.copy(E.projectionMatrixInverse),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),z($,B,Ue)};function z($,ve,te){te===null?$.matrix.copy(ve.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(ve.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ve.projectionMatrix),$.projectionMatrixInverse.copy(ve.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ps*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function($){return m[$]};let q=null;function oe($,ve){if(u=ve.getViewerPose(l||o),_=ve,u!==null){const te=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ue=!1;te.length!==B.cameras.length&&(B.cameras.length=0,Ue=!0);for(let Ge=0;Ge<te.length;Ge++){const ee=te[Ge];let Se=null;if(f!==null)Se=f.getViewport(ee);else{const de=d.getViewSubImage(h,ee);Se=de.viewport,Ge===0&&(e.setRenderTargetTextures(S,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(S))}let W=C[Ge];W===void 0&&(W=new rn,W.layers.enable(Ge),W.viewport=new Tt,C[Ge]=W),W.matrix.fromArray(ee.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(ee.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(Se.x,Se.y,Se.width,Se.height),Ge===0&&(B.matrix.copy(W.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ue===!0&&B.cameras.push(W)}const Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ge=d.getDepthInformation(te[0]);Ge&&Ge.isValid&&Ge.texture&&p.init(Ge,s.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ge=0;Ge<te.length;Ge++){const ee=te[Ge].camera;if(ee){let Se=m[ee];Se||(Se=new Uc,m[ee]=Se);const W=d.getCameraImage(ee);Se.sourceTexture=W}}}}for(let te=0;te<P.length;te++){const Ue=T[te],Me=P[te];Ue!==null&&Me!==void 0&&Me.update(Ue,ve,l||o)}q&&q($,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),_=null}const xe=new Kc;xe.setAnimationLoop(oe),this.setAnimationLoop=function($){q=$},this.dispose=function(){}}}const hg=new mt,ou=new it;ou.set(-1,0,0,0,1,0,0,0,1);function fg(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,qc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,w,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),w=M.envMap,S=M.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ou),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pg(i,e,t,n){let s={},r={};function o(M,w){const S=w.program;n.uniformBlockBinding(M,S,s[M.id])}function a(M,w){let S=s[M.id];S===void 0&&(_(M),S=c(M),s[M.id]=S,M.addEventListener("dispose",p));const P=w.program;n.updateUBOMapping(M,P);const T=e.render.frame;r[M.id]!==T&&(l(M),r[M.id]=T)}function c(M){const w=i.createBuffer(),S=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,S,P),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(M){const w=s[M.id],S=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,v=S.length;T<v;T++){const g=S[T];if(Array.isArray(g))for(let D=0,E=g.length;D<E;D++)u(g[D],T,D,P);else u(g,T,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,w,S,P){if(h(M,w,S,P)===!0){const T=M.__offset,v=M.value;if(Array.isArray(v)){let g=0;for(let D=0;D<v.length;D++){const E=v[D],U=x(E,!0);d(E,M.__data,g),g+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function d(M,w,S){typeof M=="number"||typeof M=="boolean"?w[S]=M:M.isMatrix3?(w[S]=M.elements[0],w[S+1]=M.elements[1],w[S+2]=M.elements[2],w[S+3]=0,w[S+4]=M.elements[3],w[S+5]=M.elements[4],w[S+6]=M.elements[5],w[S+7]=0,w[S+8]=M.elements[6],w[S+9]=M.elements[7],w[S+10]=M.elements[8],w[S+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-S),S):M.toArray(w,S)}function h(M,w,S,P){const T=M.value,v=w+"_"+S;if(Array.isArray(T)){P[v]===void 0&&(P[v]=[]);const g=P[v];let D=!1;for(let E=0;E<T.length;E++)f(T[E],g,E)===!0&&(D=!0);return D}return f(T,P,v)}function f(M,w,S){if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:ArrayBuffer.isView(M)?w[S]=M.slice():w[S]=M.clone(),!0;{const P=w[S];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return w[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(P.equals(M)===!1)return P.copy(M),!0}}return!1}function _(M){const w=M.uniforms;let S=0;const P=16;for(let v=0,g=w.length;v<g;v++){const D=Array.isArray(w[v])?w[v]:[w[v]];for(let E=0,U=D.length;E<U;E++){const C=D[E],B=Array.isArray(C.value)?C.value:[C.value],N=Array.isArray(w[v])||Array.isArray(C.value);let V=S;for(let I=0,X=B.length;I<X;I++){const H=B[I],z=x(H,N),q=S%P,oe=q%z.boundary,xe=q+oe;S+=oe,xe!==0&&P-xe<z.storage&&(S+=P-xe),I===0&&(V=S),S+=z.storage}const Y=C.type==="int"?Int32Array:C.type==="uint"?Uint32Array:Float32Array;C.__data=new Y((S-V)/Float32Array.BYTES_PER_ELEMENT),C.__offset=V}}const T=S%P;return T>0&&(S+=P-T),M.__size=S,M.__cache={},this}function x(M,w){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):je("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){const w=M.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}const mg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pn=null;function gg(){return Pn===null&&(Pn=new Lc(mg,16,16,Mi,tn),Pn.name="DFG_LUT",Pn.minFilter=an,Pn.magFilter=an,Pn.wrapS=Xn,Pn.wrapT=Xn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}class _g{constructor(e={}){const{canvas:t=Wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=dn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const x=f,p=new Set([Ca,Ra,Aa]),m=new Set([dn,Un,Rs,$i,ba,wa]),M=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let P=null,T=null;const v=[],g=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1,C=null,B=null,N=null,V=null;this._outputColorSpace=Zt;let Y=0,I=0,X=null,H=-1,z=null;const q=new Tt,oe=new Tt;let xe=null;const $=new Qe(0);let ve=0,te=t.width,Ue=t.height,Me=1,Fe=null,tt=null;const Ge=new Tt(0,0,te,Ue),ee=new Tt(0,0,te,Ue);let Se=!1;const W=new Ls,de=new Na;let me=!1,pe=!1;const ue=new mt,Ce=new A,ge=new Tt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function We(){return X===null?Me:1}let L=n;function He(b,k){return t.getContext(b,k)}let ne,ye,le,qe,Ee,ke,R,y,F,Z,G,he,fe,ie,re,_e,O,ce,ae,Te,Ae,Pe,Je;try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ma}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),L===null){const k="webgl2";if(L=He(k,b),L===null)throw He(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(b){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),_t("WebGLRenderer: "+b.message),b}function et(){ne=new Mm(L),ne.init(),Ae=new ag(L,ne),ye=new cm(L,ne,e,Ae),le=new rg(L,ne),ye.reversedDepthBuffer&&h&&le.buffers.depth.setReversed(!0),B=L.createFramebuffer(),N=L.createFramebuffer(),V=L.createFramebuffer(),qe=new Em(L),Ee=new X0,ke=new og(L,ne,le,Ee,ye,Ae,qe),R=new xm(E),y=new bh(L),Pe=new am(L,y),F=new Sm(L,y,qe,Pe),Z=new wm(L,F,y,Pe,qe),ce=new bm(L,ye,ke),re=new um(Ee),G=new W0(E,R,ne,ye,Pe,re),he=new fg(E,Ee),fe=new Y0,ie=new j0(ne),O=new om(E,R,le,Z,_,c),_e=new sg(E,Z,ye),Je=new pg(L,qe,ye,le),ae=new lm(L,ne,qe),Te=new ym(L,ne,qe),qe.programs=G.programs,E.capabilities=ye,E.extensions=ne,E.properties=Ee,E.renderLists=fe,E.shadowMap=_e,E.state=le,E.info=qe}x!==dn&&(D=new Am(x,t.width,t.height,a,s,r));const be=new dg(E,L);this.xr=be,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ne.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ne.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(b){b!==void 0&&(Me=b,this.setSize(te,Ue,!1))},this.getSize=function(b){return b.set(te,Ue)},this.setSize=function(b,k,se=!0){if(be.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,Ue=k,t.width=Math.floor(b*Me),t.height=Math.floor(k*Me),se===!0&&(t.style.width=b+"px",t.style.height=k+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(te*Me,Ue*Me).floor()},this.setDrawingBufferSize=function(b,k,se){te=b,Ue=k,Me=se,t.width=Math.floor(b*se),t.height=Math.floor(k*se),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(x===dn){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(q)},this.getViewport=function(b){return b.copy(Ge)},this.setViewport=function(b,k,se,J){b.isVector4?Ge.set(b.x,b.y,b.z,b.w):Ge.set(b,k,se,J),le.viewport(q.copy(Ge).multiplyScalar(We()).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,k,se,J){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,k,se,J),le.scissor(oe.copy(ee).multiplyScalar(We()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(b){le.setScissorTest(Se=b)},this.setOpaqueSort=function(b){Fe=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,se=!0){let J=0;if(b){let j=!1;if(X!==null){const Le=X.texture.format;j=p.has(Le)}if(j){const Le=X.texture.type,Ve=m.has(Le),De=O.getClearColor(),Be=O.getClearAlpha(),Ye=De.r,st=De.g,ct=De.b;Ve?(M[0]=Ye,M[1]=st,M[2]=ct,M[3]=Be,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=Ye,w[1]=st,w[2]=ct,w[3]=Be,L.clearBufferiv(L.COLOR,0,w))}else J|=L.COLOR_BUFFER_BIT}k&&(J|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(J|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&L.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),C=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),O.dispose(),fe.dispose(),ie.dispose(),ke.dispose(),Ee.dispose(),R.dispose(),Z.dispose(),F.dispose(),Pe.dispose(),Je.dispose(),G.dispose(),be.dispose(),be.removeEventListener("sessionstart",ss),be.removeEventListener("sessionend",Q),Xe.stop()};function Ke(b){b.preventDefault(),tl("WebGLRenderer: Context Lost."),U=!0}function nt(){tl("WebGLRenderer: Context Restored."),U=!1;const b=qe.autoReset,k=_e.enabled,se=_e.autoUpdate,J=_e.needsUpdate,j=_e.type;et(),qe.autoReset=b,_e.enabled=k,_e.autoUpdate=se,_e.needsUpdate=J,_e.type=j}function Oe(b){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ft(b){const k=b.target;k.removeEventListener("dispose",ft),Dt(k)}function Dt(b){Tn(b),Ee.remove(b)}function Tn(b){const k=Ee.get(b).programs;k!==void 0&&(k.forEach(function(se){G.releaseProgram(se)}),b.isShaderMaterial&&G.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,se,J,j,Le){k===null&&(k=Ne);const Ve=j.isMesh&&j.matrixWorld.determinantAffine()<0,De=os(b,k,se,J,j);le.setMaterial(J,Ve);let Be=se.index,Ye=1;if(J.wireframe===!0){if(Be=F.getWireframeAttribute(se),Be===void 0)return;Ye=2}const st=se.drawRange,ct=se.attributes.position;let $e=st.start*Ye,ut=(st.start+st.count)*Ye;Le!==null&&($e=Math.max($e,Le.start*Ye),ut=Math.min(ut,(Le.start+Le.count)*Ye)),Be!==null?($e=Math.max($e,0),ut=Math.min(ut,Be.count)):ct!=null&&($e=Math.max($e,0),ut=Math.min(ut,ct.count));const Nt=ut-$e;if(Nt<0||Nt===1/0)return;Pe.setup(j,J,De,se,Be);let bt,St=ae;if(Be!==null&&(bt=y.get(Be),St=Te,St.setIndex(bt)),j.isMesh)J.wireframe===!0?(le.setLineWidth(J.wireframeLinewidth*We()),St.setMode(L.LINES)):St.setMode(L.TRIANGLES);else if(j.isLine){let Xt=J.linewidth;Xt===void 0&&(Xt=1),le.setLineWidth(Xt*We()),j.isLineSegments?St.setMode(L.LINES):j.isLineLoop?St.setMode(L.LINE_LOOP):St.setMode(L.LINE_STRIP)}else j.isPoints?St.setMode(L.POINTS):j.isSprite&&St.setMode(L.TRIANGLES);if(j.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Xt=j._multiDrawStarts,Ze=j._multiDrawCounts,Jt=j._multiDrawCount,vt=Be?y.get(Be).bytesPerElement:1,ui=Ee.get(J).currentProgram.getUniforms();for(let qt=0;qt<Jt;qt++)ui.setValue(L,"_gl_DrawID",qt),St.render(Xt[qt]/vt,Ze[qt])}else if(j.isInstancedMesh)St.renderInstances($e,Nt,j.count);else if(se.isInstancedBufferGeometry){const Xt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ze=Math.min(se.instanceCount,Xt);St.renderInstances($e,Nt,Ze)}else St.render($e,Nt)};function ns(b,k,se,J){C!==null&&b.isNodeMaterial&&C.setObject(J,b),me===!0&&re.setState(b,se,!1),b.transparent===!0&&b.side===on&&b.forceSinglePass===!1?(b.side=en,b.needsUpdate=!0,Rn(b,k,J),b.side=xi,b.needsUpdate=!0,Rn(b,k,J),b.side=on):Rn(b,k,J)}this.compile=function(b,k,se=null){se===null&&(se=b),C!==null&&C.renderStart(b,k,se),T=ie.get(se),T.init(k),g.push(T),se.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),b!==se&&b.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights(),C!==null&&C.updateLights(T.state.lightsArray),pe=this.localClippingEnabled,me=re.init(this.clippingPlanes,pe),me===!0&&re.setGlobalState(this.clippingPlanes,k),C!==null&&_e.render(T.state.shadowsArray,se,k);const J=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Le=j.material;if(Le)if(Array.isArray(Le))for(let Ve=0;Ve<Le.length;Ve++){const De=Le[Ve];ns(De,se,k,j),J.add(De)}else ns(Le,se,k,j),J.add(Le)}),T=g.pop(),C!==null&&C.renderEnd(),J},this.compileAsync=function(b,k,se=null){const J=this.compile(b,k,se);return new Promise(j=>{function Le(){if(J.forEach(function(Ve){const Be=Ee.get(Ve).currentProgram;(Be===void 0||Be.isReady())&&J.delete(Ve)}),J.size===0){j(b);return}setTimeout(Le,10)}ne.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Kn=null;function is(b){Kn&&Kn(b)}function ss(){Xe.stop()}function Q(){Xe.start()}const Xe=new Kc;Xe.setAnimationLoop(is),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(b){Kn=b,be.setAnimationLoop(b),b===null?Xe.stop():Xe.start()},be.addEventListener("sessionstart",ss),be.addEventListener("sessionend",Q),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;C!==null&&C.renderStart(b,k);const se=be.enabled===!0&&be.isPresenting===!0,J=D!==null&&(X===null||se)&&D.begin(E,X);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(k),k=be.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,k,X),T=ie.get(b,g.length),T.init(k),T.state.textureUnits=ke.getTextureUnits(),g.push(T),ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?de.setFromArrayCamera(k):W.setFromProjectionMatrix(ue,bn,k.reversedDepth),pe=this.localClippingEnabled,me=re.init(this.clippingPlanes,pe),P=fe.get(b,v.length),P.init(),v.push(P),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){const Ve=E.xr.getDepthSensingMesh();Ve!==null&&Et(Ve,k,-1/0,E.sortObjects)}Et(b,k,0,E.sortObjects),P.finish(),C!==null&&C.updateLights(T.state.lightsArray),E.sortObjects===!0&&P.sort(Fe,tt),Ie=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Ie&&O.addToRenderList(P,b),this.info.autoReset===!0&&this.info.reset(),me===!0&&re.beginShadows();const j=T.state.shadowsArray;if(_e.render(j,b,k),me===!0&&re.endShadows(),(J&&D.hasRenderPass())===!1){const Ve=P.opaque,De=P.transmissive;if(T.setupLights(),k.isArrayCamera){const Be=k.cameras;if(De.length>0)for(let Ye=0,st=Be.length;Ye<st;Ye++){const ct=Be[Ye];Lt(Ve,De,b,ct)}Ie&&O.render(b);for(let Ye=0,st=Be.length;Ye<st;Ye++){const ct=Be[Ye];ht(P,b,ct,ct.viewport)}}else De.length>0&&Lt(Ve,De,b,k),Ie&&O.render(b),ht(P,b,k)}X!==null&&I===0&&(ke.updateMultisampleRenderTarget(X),ke.updateRenderTargetMipmap(X)),J&&D.end(E),b.isScene===!0&&b.onAfterRender(E,b,k),Pe.resetDefaultState(),H=-1,z=null,g.pop(),g.length>0?(T=g[g.length-1],ke.setTextureUnits(T.state.textureUnits),me===!0&&re.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?P=v[v.length-1]:P=null,C!==null&&C.renderEnd()};function Et(b,k,se,J){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Ve=k.isArrayCamera?de:W;if(!b.frustumCulled||b.intersectsFrustum(Ve)){J&&ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);const De=Z.update(b),Be=b.material;Be.visible&&P.push(b,De,Be,se,ge.z,null,k)}}else if(b.isMesh||b.isLine||b.isPoints){const Ve=k.isArrayCamera?de:W;if(!b.frustumCulled||b.intersectsFrustum(Ve)){const De=Z.update(b),Be=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ge.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ge.copy(De.boundingSphere.center)),ge.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(Be)){const Ye=De.groups;for(let st=0,ct=Ye.length;st<ct;st++){const $e=Ye[st],ut=Be[$e.materialIndex];ut&&ut.visible&&P.push(b,De,ut,se,ge.z,$e,k)}}else Be.visible&&P.push(b,De,Be,se,ge.z,null,k)}}}const Le=b.children;for(let Ve=0,De=Le.length;Ve<De;Ve++)Et(Le[Ve],k,se,J)}function ht(b,k,se,J){const{opaque:j,transmissive:Le,transparent:Ve}=b;T.setupLightsView(se),me===!0&&re.setGlobalState(E.clippingPlanes,se),J&&le.viewport(q.copy(J)),j.length>0&&It(j,k,se),Le.length>0&&It(Le,k,se),Ve.length>0&&It(Ve,k,se),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Lt(b,k,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){const $e=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new nn(1,1,{generateMipmaps:!0,type:$e?tn:dn,minFilter:si,samples:Math.max(4,ye.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Le=T.state.transmissionRenderTarget[J.id],Ve=J.viewport||q;Le.setSize(Ve.z*E.transmissionResolutionScale,Ve.w*E.transmissionResolutionScale);const De=E.getRenderTarget(),Be=E.getActiveCubeFace(),Ye=E.getActiveMipmapLevel();E.setRenderTarget(Le),E.getClearColor($),ve=E.getClearAlpha(),ve<1&&E.setClearColor(16777215,.5),E.clear(),Ie&&O.render(se);const st=E.toneMapping;E.toneMapping=qn;const ct=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),me===!0&&re.setGlobalState(E.clippingPlanes,J),It(b,se,J),ke.updateMultisampleRenderTarget(Le),ke.updateRenderTargetMipmap(Le),ne.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ut=0,Nt=k.length;ut<Nt;ut++){const bt=k[ut],{object:St,geometry:Xt,material:Ze,group:Jt}=bt;if(Ze.side===on&&St.layers.test(J.layers)){const vt=Ze.side;Ze.side=en,Ze.needsUpdate=!0,_n(St,se,J,Xt,Ze,Jt),Ze.side=vt,Ze.needsUpdate=!0,$e=!0}}$e===!0&&(ke.updateMultisampleRenderTarget(Le),ke.updateRenderTargetMipmap(Le))}E.setRenderTarget(De,Be,Ye),E.setClearColor($,ve),ct!==void 0&&(J.viewport=ct),E.toneMapping=st}function It(b,k,se){const J=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Le=b.length;j<Le;j++){const Ve=b[j],{object:De,geometry:Be,group:Ye}=Ve;let st=Ve.material;st.allowOverride===!0&&J!==null&&(st=J),De.layers.test(se.layers)&&_n(De,k,se,Be,st,Ye)}}function _n(b,k,se,J,j,Le){C!==null&&j.isNodeMaterial&&C.setObject(b,j),b.onBeforeRender(E,k,se,J,j,Le),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(E,k,se,J,b,Le),j.transparent===!0&&j.side===on&&j.forceSinglePass===!1?(j.side=en,j.needsUpdate=!0,E.renderBufferDirect(se,k,J,j,b,Le),j.side=xi,j.needsUpdate=!0,E.renderBufferDirect(se,k,J,j,b,Le),j.side=on):E.renderBufferDirect(se,k,J,j,b,Le),b.onAfterRender(E,k,se,J,j,Le)}function An(b){let k=0;for(const se of b)se.texture!==null&&k++;return k}function Rn(b,k,se){k.isScene!==!0&&(k=Ne);const J=Ee.get(b),j=T.state.lights,Le=T.state.shadowsArray,Ve=j.state.version,De=G.getParameters(b,j.state,Le,k,se,T.state.lightProbeGridArray),Be=G.getProgramCacheKey(De);let Ye=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,J.fog=k.fog;const st=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=R.get(b.envMap||J.environment,st),J.envMapRotation=J.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",ft),Ye=new Map,J.programs=Ye,J.programVariants=new Map);let ct=Ye.get(Be);if(ct!==void 0){if(J.currentProgram===ct&&J.lightsStateVersion===Ve)return Ti(b,De),ct}else De.uniforms=G.getUniforms(b),C!==null&&b.isNodeMaterial&&C.build(b,se,De),b.onBeforeCompile(De,E),ct=G.acquireProgram(De,Be),Ye.set(Be,ct),J.uniforms=De.uniforms;const $e=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=re.uniform),Ti(b,De),J.needsLights=ls(b),J.lightsStateVersion=Ve,J.needsLights&&($e.ambientLightColor.value=j.state.ambient,$e.lightProbe.value=j.state.probe,$e.sunLights.value=j.state.sun,$e.sunLightShadows.value=j.state.sunShadow,$e.directionalLights.value=j.state.directional,$e.directionalLightShadows.value=j.state.directionalShadow,$e.spotLights.value=j.state.spot,$e.spotLightShadows.value=j.state.spotShadow,$e.rectAreaLights.value=j.state.rectArea,$e.ltc_1.value=j.state.rectAreaLTC1,$e.ltc_2.value=j.state.rectAreaLTC2,$e.pointLights.value=j.state.point,$e.pointLightShadows.value=j.state.pointShadow,$e.hemisphereLights.value=j.state.hemi,$e.sunShadowMatrix.value=j.state.sunShadowMatrix,$e.sunShadowCascade.value=j.state.sunShadowCascade,$e.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$e.spotLightMatrix.value=j.state.spotLightMatrix,$e.spotLightMap.value=j.state.spotLightMap,$e.pointShadowMatrix.value=j.state.pointShadowMatrix),J.numLightProbeGrids=An(T.state.lightProbeGridArray),J.currentProgram=ct,J.uniformsList=null,ct}function zs(b,k,se,J,j){const Le=Ee.get(b),Ve=Le.currentProgram.id+","+J+","+j;let De=Le.programVariants.get(Ve);return De===void 0?(De=Rn(b,k,se),Le.programVariants.set(Ve,De)):(Le.currentProgram=De,Le.uniformsList=null,Le.outputColorSpace=J,Le.toneMapping=j),De}function rs(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=br.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Ti(b,k){const se=Ee.get(b);se.outputColorSpace=k.outputColorSpace,se.batching=k.batching,se.batchingColor=k.batchingColor,se.instancing=k.instancing,se.instancingColor=k.instancingColor,se.instancingMorph=k.instancingMorph,se.skinning=k.skinning,se.morphTargets=k.morphTargets,se.morphNormals=k.morphNormals,se.morphColors=k.morphColors,se.morphTargetsCount=k.morphTargetsCount,se.numClippingPlanes=k.numClippingPlanes,se.numIntersection=k.numClipIntersection,se.vertexAlphas=k.vertexAlphas,se.vertexTangents=k.vertexTangents,se.toneMapping=k.toneMapping}function os(b,k,se,J,j){k.isScene!==!0&&(k=Ne),ke.resetTextureUnits();const Le=k.fog,Ve=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?k.environment:null,De=X===null?E.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:dt.workingColorSpace,Be=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ye=R.get(J.envMap||Ve,Be),st=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!se.morphAttributes.position,ut=!!se.morphAttributes.normal,Nt=!!se.morphAttributes.color;let bt=qn;J.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(bt=E.toneMapping);const St=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Xt=St!==void 0?St.length:0,Ze=Ee.get(J),Jt=T.state.lights;if(me===!0&&(pe===!0||b!==z)){const Ct=b===z&&J.id===H;re.setState(J,b,Ct)}let vt=!1,ui=!1;J.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Jt.state.version||j.isBatchedMesh&&Ze.batching===!1||!j.isBatchedMesh&&Ze.batching===!0||j.isBatchedMesh&&Ze.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ze.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ze.instancing===!1||!j.isInstancedMesh&&Ze.instancing===!0||j.isSkinnedMesh&&Ze.skinning===!1||!j.isSkinnedMesh&&Ze.skinning===!0||j.isInstancedMesh&&Ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ze.instancingMorph===!1&&j.morphTexture!==null||Ze.envMap!==Ye||J.fog===!0&&Ze.fog!==Le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==re.numPlanes||Ze.numIntersection!==re.numIntersection)||Ze.vertexAlphas!==st||Ze.vertexTangents!==ct||Ze.morphTargets!==$e||Ze.morphNormals!==ut||Ze.morphColors!==Nt||Ze.morphTargetsCount!==Xt||Ze.numLightProbeGrids!==An(T.state.lightProbeGridArray)?vt=!0:(Ze.outputColorSpace!==De||Ze.toneMapping!==bt)&&(ui=!0):(vt=!0,Ze.__version=J.version);let qt=Ze.currentProgram;(vt===!0||ui===!0)&&(qt=ui===!0?zs(J,k,j,De,bt):Rn(J,k,j),C&&J.isNodeMaterial&&C.onUpdateProgram(J,qt,Ze));let Gs=!1,Jn=!1,di=!1;const pt=qt.getUniforms(),kt=Ze.uniforms;if(le.useProgram(qt.program)&&(Gs=!0,Jn=!0,di=!0),J.id!==H&&(H=J.id,Jn=!0),Gs||z!==b){le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",b.projectionMatrix),pt.setValue(L,"viewMatrix",b.matrixWorldInverse);const Bt=pt.map.cameraPosition;Bt!==void 0&&Bt.setValue(L,Ce.setFromMatrixPosition(b.matrixWorld)),ye.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&pt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,Jn=!0,di=!0)}if(Ze.needsLights&&(Jt.state.sunShadowMap.length>0&&pt.setValue(L,"sunShadowMap",Jt.state.sunShadowMap,ke),Jt.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",Jt.state.directionalShadowMap,ke),Jt.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",Jt.state.spotShadowMap,ke),Jt.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",Jt.state.pointShadowMap,ke)),j.isSkinnedMesh){pt.setOptional(L,j,"bindMatrix"),pt.setOptional(L,j,"bindMatrixInverse");const Ct=j.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),pt.setValue(L,"boneTexture",Ct.boneTexture,ke))}j.isBatchedMesh&&(pt.setOptional(L,j,"batchingTexture"),pt.setValue(L,"batchingTexture",j._matricesTexture,ke),pt.setOptional(L,j,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",j._indirectTexture,ke),pt.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",j._colorsTexture,ke));const vn=se.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ce.update(j,se,qt),(Jn||Ze.receiveShadow!==j.receiveShadow)&&(Ze.receiveShadow=j.receiveShadow,pt.setValue(L,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&k.environment!==null&&(kt.envMapIntensity.value=k.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=gg()),Jn){if(pt.setValue(L,"toneMappingExposure",E.toneMappingExposure),Ze.needsLights&&as(kt,di),Le&&J.fog===!0&&he.refreshFogUniforms(kt,Le),he.refreshMaterialUniforms(kt,J,Me,Ue,T.state.transmissionRenderTarget[b.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){const Ct=S;let Bt=0;for(const Bn of T.state.lightProbeGridArray)Bn.texture!==null&&(Ct.textures[Bt]=Bn.texture,Ct.min[Bt]=Bn.boundingBox.min,Ct.max[Bt]=Bn.boundingBox.max,Ct.resolution[Bt]=Bn.resolution,Bt++);for(const Bn in Ct)Ct[Bn].length=Bt;kt.probesSH.value=Ct.textures,kt.probesMin.value=Ct.min,kt.probesMax.value=Ct.max,kt.probesResolution.value=Ct.resolution}br.upload(L,rs(Ze),kt,ke)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(br.upload(L,rs(Ze),kt,ke),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&pt.setValue(L,"center",j.center),pt.setValue(L,"modelViewMatrix",j.modelViewMatrix),pt.setValue(L,"normalMatrix",j.normalMatrix),pt.setValue(L,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){const Ct=J.uniformsGroups;for(let Bt=0,Bn=Ct.length;Bt<Bn;Bt++){const Ya=Ct[Bt];Je.update(Ya,qt),Je.bind(Ya,qt)}}return qt}function as(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.sunLights.needsUpdate=k,b.sunLightShadows.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function ls(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,k,se){const J=Ee.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ee.get(b.texture).__webglTexture=k,Ee.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const se=Ee.get(b);se.__webglFramebuffer=k,se.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,se=0){X=b,Y=k,I=se;let J=null,j=!1,Le=!1;if(b){const De=Ee.get(b);if(De.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(L.FRAMEBUFFER,De.__webglFramebuffer),q.copy(b.viewport),oe.copy(b.scissor),xe=b.scissorTest,le.viewport(q),le.scissor(oe),le.setScissorTest(xe),H=-1;return}else if(De.__webglFramebuffer===void 0)ke.setupRenderTarget(b);else if(De.__hasExternalTextures)ke.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const st=b.depthTexture;if(De.__boundDepthTexture!==st){if(st!==null&&Ee.has(st)&&(b.width!==st.image.width||b.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Le=!0);const Ye=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?J=Ye[k][se]:J=Ye[k],j=!0):b.samples>0&&ke.useMultisampledRTT(b)===!1?J=Ee.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?J=Ye[se]:J=Ye,q.copy(b.viewport),oe.copy(b.scissor),xe=b.scissorTest}else q.copy(Ge).multiplyScalar(Me).floor(),oe.copy(ee).multiplyScalar(Me).floor(),xe=Se;if(se!==0&&(J=B),le.bindFramebuffer(L.FRAMEBUFFER,J)&&le.drawBuffers(b,J),le.viewport(q),le.scissor(oe),le.setScissorTest(xe),j){const De=Ee.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,se)}else if(Le){const De=k;for(let Be=0;Be<b.textures.length;Be++){const Ye=Ee.get(b.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,Ye.__webglTexture,se,De)}}else if(b!==null&&se!==0){const De=Ee.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,De.__webglTexture,se)}H=-1};function ci(b){const k=Ee.get(b);return(k.__readFormat!==b.format||k.__readType!==b.type)&&(k.__readFormat=b.format,k.__readType=b.type,k.__formatReadable=ye.textureFormatReadable(b.format),k.__typeReadable=ye.textureTypeReadable(b.type)),k}this.readRenderTargetPixels=function(b,k,se,J,j,Le,Ve,De=0){if(!(b&&b.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be){le.bindFramebuffer(L.FRAMEBUFFER,Be);try{const Ye=b.textures[De],st=Ye.format,ct=Ye.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De);const $e=ci(Ye);if($e.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-J&&se>=0&&se<=b.height-j&&L.readPixels(k,se,J,j,Ae.convert(st),Ae.convert(ct),Le)}finally{const Ye=X!==null?Ee.get(X).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,k,se,J,j,Le,Ve,De=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be)if(k>=0&&k<=b.width-J&&se>=0&&se<=b.height-j){le.bindFramebuffer(L.FRAMEBUFFER,Be);const Ye=b.textures[De],st=Ye.format,ct=Ye.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De);const $e=ci(Ye);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ut),L.bufferData(L.PIXEL_PACK_BUFFER,Le.byteLength,L.STREAM_READ),L.readPixels(k,se,J,j,Ae.convert(st),Ae.convert(ct),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Nt=X!==null?Ee.get(X).__webglFramebuffer:null;le.bindFramebuffer(L.FRAMEBUFFER,Nt);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xu(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ut),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Le),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ut),L.deleteSync(bt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,se=0){const J=Math.pow(2,-se),j=Math.floor(b.image.width*J),Le=Math.floor(b.image.height*J),Ve=k!==null?k.x:0,De=k!==null?k.y:0;ke.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,se,0,0,Ve,De,j,Le),le.unbindTexture()},this.copyTextureToTexture=function(b,k,se=null,J=null,j=0,Le=0){let Ve,De,Be,Ye,st,ct,$e,ut,Nt;const bt=b.isCompressedTexture?b.mipmaps[Le]:b.image;if(se!==null)Ve=se.max.x-se.min.x,De=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,Ye=se.min.x,st=se.min.y,ct=se.isBox3?se.min.z:0;else{const pt=Math.pow(2,-j);Ve=Math.floor(bt.width*pt),De=Math.floor(bt.height*pt),b.isDataArrayTexture?Be=bt.depth:b.isData3DTexture?Be=Math.floor(bt.depth*pt):Be=1,Ye=0,st=0,ct=0}J!==null?($e=J.x,ut=J.y,Nt=J.z):($e=0,ut=0,Nt=0);const St=Ae.convert(k.format),Xt=Ae.convert(k.type);let Ze;k.isData3DTexture?(ke.setTexture3D(k,0),Ze=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ke.setTexture2DArray(k,0),Ze=L.TEXTURE_2D_ARRAY):(ke.setTexture2D(k,0),Ze=L.TEXTURE_2D),le.activeTexture(L.TEXTURE0),le.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),le.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),le.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Jt=le.getParameter(L.UNPACK_ROW_LENGTH),vt=le.getParameter(L.UNPACK_IMAGE_HEIGHT),ui=le.getParameter(L.UNPACK_SKIP_PIXELS),qt=le.getParameter(L.UNPACK_SKIP_ROWS),Gs=le.getParameter(L.UNPACK_SKIP_IMAGES);le.pixelStorei(L.UNPACK_ROW_LENGTH,bt.width),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,bt.height),le.pixelStorei(L.UNPACK_SKIP_PIXELS,Ye),le.pixelStorei(L.UNPACK_SKIP_ROWS,st),le.pixelStorei(L.UNPACK_SKIP_IMAGES,ct);const Jn=b.isDataArrayTexture||b.isData3DTexture,di=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const pt=Ee.get(b),kt=Ee.get(k),vn=Ee.get(pt.__renderTarget),Ct=Ee.get(kt.__renderTarget);le.bindFramebuffer(L.READ_FRAMEBUFFER,vn.__webglFramebuffer),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Bt=0;Bt<Be;Bt++)Jn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(b).__webglTexture,j,ct+Bt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(k).__webglTexture,Le,Nt+Bt)),L.blitFramebuffer(Ye,st,Ye+Ve,st+De,$e,ut,$e+Ve,ut+De,L.DEPTH_BUFFER_BIT,L.NEAREST);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||Ee.has(b)){const pt=Ee.get(b),kt=Ee.get(k);le.bindFramebuffer(L.READ_FRAMEBUFFER,N),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let vn=0;vn<Be;vn++)Jn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,j,ct+vn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,j),di?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,Le,Nt+vn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,Le),j!==0?L.blitFramebuffer(Ye,st,Ye+Ve,st+De,$e,ut,$e+Ve,ut+De,L.COLOR_BUFFER_BIT,L.NEAREST):di?L.copyTexSubImage3D(Ze,Le,$e,ut,Nt+vn,Ye,st,Ve,De):L.copyTexSubImage2D(Ze,Le,$e,ut,Ye,st,Ve,De);le.bindFramebuffer(L.READ_FRAMEBUFFER,null),le.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else di?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ze,Le,$e,ut,Nt,Ve,De,Be,St,Xt,bt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Ze,Le,$e,ut,Nt,Ve,De,Be,St,bt.data):L.texSubImage3D(Ze,Le,$e,ut,Nt,Ve,De,Be,St,Xt,bt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Le,$e,ut,Ve,De,St,Xt,bt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Le,$e,ut,bt.width,bt.height,St,bt.data):L.texSubImage2D(L.TEXTURE_2D,Le,$e,ut,Ve,De,St,Xt,bt);le.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),le.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt),le.pixelStorei(L.UNPACK_SKIP_PIXELS,ui),le.pixelStorei(L.UNPACK_SKIP_ROWS,qt),le.pixelStorei(L.UNPACK_SKIP_IMAGES,Gs),Le===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&L.generateMipmap(Ze),le.unbindTexture()},this.initRenderTarget=function(b){Ee.get(b).__webglFramebuffer===void 0&&ke.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ke.setTextureCube(b,0):b.isData3DTexture?ke.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ke.setTexture2DArray(b,0):ke.setTexture2D(b,0),le.unbindTexture()},this.resetState=function(){Y=0,I=0,X=null,le.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class vg{constructor(e,t=!1){this.mobile=e,this.level=t?2:e?1:0}mobile;level;duration=0;slowDuration=0;fastDuration=0;samples=0;upgradeDelay=10;stableSeconds=0;trialWindows=0;slowWindows=0;reset(){this.duration=this.slowDuration=this.fastDuration=this.samples=0,this.stableSeconds=0,this.slowWindows=0}sample(e){if(e<=0||e>=1)return this.reset(),!1;if(this.duration+=e,this.samples++,e>(this.mobile?.038:.027)&&(this.slowDuration+=e),e<.021&&(this.fastDuration+=e),this.duration<1.8||this.samples<12)return!1;const t=this.slowDuration/this.duration,n=this.fastDuration/this.duration,s=this.duration;return this.duration=this.slowDuration=this.fastDuration=this.samples=0,this.slowWindows=t>.3?this.slowWindows+1:0,this.slowWindows>=2&&this.level<3?(this.trialWindows>0&&(this.upgradeDelay=Math.min(60,this.upgradeDelay*2)),this.trialWindows=0,this.level++,this.stableSeconds=0,!0):(this.trialWindows>0&&this.trialWindows--,this.stableSeconds=n>.9?this.stableSeconds+s:0,this.stableSeconds>=Math.max(18,this.upgradeDelay)&&this.level>0?(this.level--,this.trialWindows=5,this.stableSeconds=0,!0):!1)}}function xg(i,e){if(i.length<10||i.some(n=>!Number.isFinite(n)||n<=0))return!1;const t=[...i].sort((n,s)=>n-s);return t[Math.floor(t.length*.9)]<=(e?25:22)}function Mg(i,e){if(!new URLSearchParams(location.search).has("perf"))return{begin(){},end(h,f){}};const n=document.createElement("output");n.className="render-metrics",n.dataset.noTranslate="",e.append(n);const s=i.getContext(),r=s.getExtension("EXT_disjoint_timer_query_webgl2"),o=[];let a=null,c=0,l=performance.now();const u=[];let d=0;return i.info.autoReset=!1,{begin(){if(i.info.reset(),!r)return;const h=o[0];h&&s.getQueryParameter(h,s.QUERY_RESULT_AVAILABLE)&&(s.getParameter(r.GPU_DISJOINT_EXT)||(c=s.getQueryParameter(h,s.QUERY_RESULT)/1e6),s.deleteQuery(h),o.shift()),o.length<4&&(a=s.createQuery(),a&&s.beginQuery(r.TIME_ELAPSED_EXT,a))},end(h,f){if(a&&r&&(s.endQuery(r.TIME_ELAPSED_EXT),o.push(a),a=null),u.push(h*1e3),d+=f,performance.now()-l<1e3)return;u.sort((p,m)=>p-m);const _=u[Math.floor(u.length*.95)],x=d/u.length;e.dataset.frameP95=_.toFixed(1),e.dataset.cpuMs=x.toFixed(1),e.dataset.gpuMs=c.toFixed(1),n.textContent=`${e.dataset.quality} · DPR ${e.dataset.renderRatio}
Frame p95 ${_.toFixed(1)} ms · CPU ${x.toFixed(1)} ms · GPU ${c?c.toFixed(1):"n/a"} ms
${i.info.render.calls} draws · ${Math.round(i.info.render.triangles/1e3)}k triangles (all passes)`,u.length=0,d=0,l=performance.now()}}}const wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sg=new za(-1,1,1,-1,0,1);class yg extends Wt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const Eg=new yg;class Ha{constructor(e){this._mesh=new we(Eg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bg extends ts{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qi.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ha(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class sc extends ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class wg extends ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Tg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bg(wr),this.copyPass.material.blending=_i,this.timer=new Mh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sc!==void 0&&(o instanceof sc?n=!0:o instanceof wg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ag extends ts{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Rg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ji extends ts{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Qe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(r,o,{type:tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new nn(r,o,{type:tn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new nn(r,o,{type:tn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}const a=Rg;this.highPassUniforms=Qi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qi.clone(wr.uniforms),this.blendMaterial=new jt({uniforms:this.copyUniforms,vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,premultipliedAlpha:!0,blending:Ar,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qe,this._oldClearAlpha=1,this._basic=new Gt,this._fsQuad=new Ha(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<e;o+=2){const a=t[o],c=o+1<e?t[o+1]:0,l=a+c;s.push((o*a+(o+1)*c)/l),r.push(l)}return new jt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}ji.BlurDirectionX=new Re(1,0);ji.BlurDirectionY=new Re(0,1);const mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Cg extends ts{constructor(){super(),this.isOutputPass=!0,this.uniforms=Qi.clone(mr.uniforms),this.material=new Yc({name:mr.name,uniforms:this.uniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this._fsQuad=new Ha(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_a?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===va?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ma&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Pg extends Ac{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new yt;e.deleteAttribute("uv");const t=new rt({side:en}),n=new rt,s=new kr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new we(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new hn(e,n,6),a=new wt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new we(e,Gi(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new we(e,Gi(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new we(e,Gi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new we(e,Gi(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const h=new we(e,Gi(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new we(e,Gi(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Gi(i){return new hh({color:0,emissive:16777215,emissiveIntensity:i})}const _s=new A;function pn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;_s.copy(e),_s[n]=0,_s.normalize();const l=.5*o/(o+a),u=1-_s.angleTo(i)/c;return Math.sign(_s[t])===1?u*l:a/(o+a)+l+l*(1-u)}class Nn extends yt{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new A,l=new A,u=new A(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,_=d.length/6,x=new A,p=.5/o;for(let m=0,M=0;m<d.length;m+=3,M+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*r,d[m+1]=u.y*Math.sign(c.y)+l.y*r,d[m+2]=u.z*Math.sign(c.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/_)){case 0:x.set(1,0,0),f[M+0]=pn(x,l,"z","y",r,n),f[M+1]=1-pn(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[M+0]=1-pn(x,l,"z","y",r,n),f[M+1]=1-pn(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[M+0]=1-pn(x,l,"x","z",r,e),f[M+1]=pn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[M+0]=1-pn(x,l,"x","z",r,e),f[M+1]=1-pn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[M+0]=1-pn(x,l,"x","y",r,e),f[M+1]=1-pn(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[M+0]=pn(x,l,"x","y",r,e),f[M+1]=1-pn(x,l,"y","x",r,t);break}}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.segments,e.radius)}}function ai(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Wt;c.morphTargetsRelative=a;let l=0;for(let u=0;u<i.length;++u){const d=i[u];let h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in d.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;r[_]===void 0&&(r[_]=[]),r[_].push(d.attributes[_]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in d.morphAttributes){if(!s.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;o[_]===void 0&&(o[_]=[]),o[_].push(d.morphAttributes[_]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,_,u),l+=_}}if(t){let u=0;const d=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let _=0;_<f.count;++_)d.push(f.getX(_)+u);u+=i[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=rc(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][h]);const _=rc(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(_)}}}return c}function rc(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new $n(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,f=u.count;h<f;h++)for(let _=0;_<t;_++){const x=u.getComponent(h,_);a.setComponent(h+d,_,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}const Zn=4832255,pa=16730421,ot=[{id:"identidad",code:"ID",title:"Identidad",count:3,start:6,end:0,x:-2.09,route:"#sobre-mi"},{id:"proyectos",code:"PRJ",title:"Proyectos",count:5,start:-2,end:-11,x:2.09,route:"#archivo/proyectos"},{id:"experiencia",code:"EXP",title:"Experiencia",count:3,start:-13,end:-19,x:-2.09,route:"#archivo/experiencia"},{id:"educacion",code:"EDU",title:"Educación",count:3,start:-21,end:-27,x:2.09,route:"#archivo/educacion"},{id:"premios",code:"AWD",title:"Premios",count:3,start:-29,end:-36,x:-2.09,route:"#archivo/premios"},{id:"aptitudes",code:"SKL",title:"Aptitudes",count:3,start:-39,end:-48,x:2.09,route:"#archivo/aptitudes"}].map(i=>({...i,start:i.start-6,end:i.end-6})),sn=ot.flatMap((i,e)=>Array.from({length:i.count},(t,n)=>({id:`${i.code}-${n+1}`,zoneIndex:e,slot:n}))),oc="hugo-recovery-v1";function Lg(i){const e=new Set;let t=!1,n=!1,s=!1,r=!!i;try{const c=JSON.parse(i?.getItem(oc)||"null");if(c?.version===1&&Array.isArray(c.rescued)){for(const l of sn)c.rescued.includes(l.id)&&e.add(l.id);t=c.greeted===!0,n=c.hasPda===!0||t,s=c.accessUnlocked===!0||c.accessUnlocked===void 0&&(n||e.size>0)}}catch{r=!1}const o=new Set;function a(){try{i?.setItem(oc,JSON.stringify({version:1,rescued:[...e],greeted:t,hasPda:n,accessUnlocked:s})),r=!!i}catch{r=!1}o.forEach(c=>c())}return{get count(){return e.size},get complete(){return e.size===sn.length},get greeted(){return t},get hasPda(){return n},get accessUnlocked(){return s},get saved(){return r},has(c){return e.has(c)},zoneCount(c){return sn.filter(l=>l.zoneIndex===c&&e.has(l.id)).length},rescue(c){return!s||e.has(c)||!sn.some(l=>l.id===c)?!1:(e.add(c),a(),!0)},greet(){t=!0,n=!0,a()},unlockAccess(){n&&!s&&(s=!0,a())},reset(){e.clear(),t=!1,n=!1,s=!1,a()},subscribe(c){return o.add(c),()=>o.delete(c)}}}const In={cyan:7395803,red:14894944,violet:8682984};function wn(i,e=1.8){return new rt({color:i,emissive:i,emissiveIntensity:e,roughness:.35,metalness:.3})}function vi(i,e="#8acbd2",t=5,n){const s=document.createElement("canvas");s.width=1024,s.height=n===""?160:256;const r=new Ds(s);r.userData={labelText:i,labelColor:e};function o(c){const l=c.image.getContext("2d"),u=Tr(c.userData.labelText).toLocaleUpperCase();l.globalAlpha=1,l.fillStyle="#080f16",l.fillRect(0,0,s.width,s.height),l.fillStyle=c.userData.labelColor,l.fillRect(32,20,6,s.height-40);let d=64;for(l.font=`500 ${d}px "IBM Plex Mono", monospace`;l.measureText(u).width>910&&d>24;)l.font=`500 ${--d}px "IBM Plex Mono", monospace`;l.fillText(u,70,n===""?100:123),l.font='24px "IBM Plex Mono", monospace',l.globalAlpha=.65,l.fillText(n===void 0?_r("architecture"):Tr(n),72,190),c.userData.language=$a(),c.needsUpdate=!0}o(r),r.colorSpace=Zt;const a=new we(new gn(t,t*s.height/s.width),new Gt({map:r,side:on}));return a.onBeforeRender=c=>{const l=a.material.map;l.userData.language!==$a()&&o(l);const u=Math.min(8,c.capabilities.getMaxAnisotropy());l.anisotropy!==u&&(l.anisotropy=u,l.needsUpdate=!0)},a}function K(i,e,t,n){const s=new we(new yt(...e),n);return s.position.set(...t),i.add(s),s}function au(){const i=new Mt,e=new rt({color:1514787,metalness:.65,roughness:.4}),t=new rt({color:5661034,metalness:.8,roughness:.38}),n=new rt({color:10975817,metalness:.8,roughness:.4}),s=new we(new Nn(.85,.68,.65,2,.045),e);i.add(s);const r=wn(Zn,.85),o=new we(new Nn(.7,.24,.045,2,.015),new rt({color:198152,roughness:.32}));o.position.set(0,.025,.325),i.add(o);for(let x=0;x<8;x++)K(i,[.035,x%3===0?.095:.045,.018],[-.245+x*.07,.03,.356],r);K(i,[.23,.018,.018],[-.14,-.23,.333],r),K(i,[.1,.018,.018],[.23,-.23,.333],t);const a=K(i,[.035,.36,.018],[.29,.1,.337],r);a.rotation.z=-.24,K(i,[.16,.025,.22],[.2,.345,-.12],t);for(const x of[-.37,.37]){K(i,[.035,.58,.025],[x,0,.328],t);for(let p=0;p<5;p++)K(i,[.025,.05,.07],[x,-.22+p*.11,-.325],n)}for(let x=0;x<4;x++)K(i,[.26,.012,.04],[-.08,.343,-.2+x*.1],t);for(const x of[-.34,.34])for(const p of[-.27,.27])K(i,[.035,.035,.012],[x,p,.346],t);for(const x of[-.26,.26])K(i,[.15,.09,.3],[x,-.37,.04],e);for(const x of[-.337,.337]){K(i,[.58,.19,.02],[0,.06,x],e);for(let m=0;m<8;m++)K(i,[.035,.045+m%3*.025,.025],[-.245+m*.07,.06,x*1.04],r);const p=K(i,[.025,.29,.025],[.27,.015,x*1.04],r);p.rotation.z=-.3,K(i,[.22,.018,.025],[-.12,-.22,x*1.04],r)}for(const x of[-.431,.431]){K(i,[.018,.022,.4],[x,.1,0],r);for(let p=0;p<3;p++)K(i,[.018,.08,.025],[x,.06,-.14+p*.14],r)}const c=new rt({color:3160643,metalness:.65,roughness:.55}),l=new hn(new yt(.2,.025,.045),c,28);l.instanceMatrix.setUsage(Pa),l.frustumCulled=!1,i.add(l);const u=new wt;for(const x of[-.29,.29]){const p=new we(new Nn(.19,.14,.52,2,.055),e);p.position.set(x,-.345,0),i.add(p)}let d=0;function h(x){d+=x;for(let p=0;p<28;p++){const m=(p%14/14+d/1.15)*Math.PI*2;u.position.set(p<14?-.29:.29,-.345+Math.cos(m)*.056,Math.sin(m)*.225),u.rotation.x=-Math.atan2(.056*Math.sin(m),.225*Math.cos(m)),u.updateMatrix(),l.setMatrixAt(p,u.matrix)}l.instanceMatrix.needsUpdate=!0}h(0);const f=new kr(Zn,.65,3,2);f.position.set(0,.35,.7),i.add(f);const _=new Map;for(const x of[...i.children]){if(!(x instanceof we)||x instanceof hn||Array.isArray(x.material))continue;x.updateMatrix();const p=(x.geometry.index?x.geometry.toNonIndexed():x.geometry.clone()).applyMatrix4(x.matrix),m=_.get(x.material)??[];m.push(p),_.set(x.material,m),x.removeFromParent(),x.geometry.dispose()}for(const[x,p]of _){const m=ai(p,!1);m&&i.add(new we(m,x)),p.forEach(M=>M.dispose())}return{root:i,core:r,light:f,animate:h}}class Xr extends we{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,s=t.color!==void 0?new Qe(t.color):new Qe(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||Xr.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Wn,d=new A,h=new A,f=new A,_=new mt,x=new A(0,0,-1),p=new Tt,m=new A,M=new A,w=new Tt,S=new mt,P=new nn(r,o,{samples:l,type:tn}),T=new jt({name:c.name!==void 0?c.name:"unspecified",uniforms:Qi.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=P.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=S,this.material=T,this.onBeforeRender=function(v,g,D){const E=this.getReflectionCamera(D);if(h.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(D.matrixWorld),_.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(_),m.subVectors(h,f),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(h),_.extractRotation(D.matrixWorld),x.set(0,0,-1),x.applyMatrix4(_),x.add(f),M.subVectors(h,x),M.reflect(d).negate(),M.add(h),E.position.copy(m),E.up.set(0,1,0),E.up.applyMatrix4(_),E.up.reflect(d),E.lookAt(M),E.far=D.far,E.updateMatrixWorld(),E.projectionMatrix.copy(D.projectionMatrix),E.projectionMatrix.elements[8]*=-1,E.projectionMatrix.elements[12]*=-1,S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(E.projectionMatrix),S.multiply(E.matrixWorldInverse),S.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,h),u.applyMatrix4(E.matrixWorldInverse),p.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const C=E.projectionMatrix;E.isOrthographicCamera?(w.x=(Math.sign(p.x)+C.elements[8])/C.elements[0],w.y=(Math.sign(p.y)+C.elements[9])/C.elements[5],w.z=-D.far,w.w=1):(w.x=(Math.sign(p.x)+C.elements[8])/C.elements[0],w.y=(Math.sign(p.y)+C.elements[9])/C.elements[5],w.z=-1,w.w=(1+C.elements[10])/C.elements[14]),p.multiplyScalar(2/p.dot(w)),C.elements[2]=p.x,C.elements[6]=p.y,E.isOrthographicCamera?(C.elements[10]=p.z-a,C.elements[14]=p.w-1):(C.elements[10]=p.z+1-a,C.elements[14]=p.w),n.visible=!1;const B=v.getRenderTarget(),N=v.xr.enabled,V=v.shadowMap.autoUpdate;v.xr.enabled=!1,v.shadowMap.autoUpdate=!1,v.setRenderTarget(P),v.state.buffers.depth.setMask(!0),v.autoClear===!1&&v.clear(),v.render(g,E),v.xr.enabled=N,v.shadowMap.autoUpdate=V,v.setRenderTarget(B);const Y=D.viewport;Y!==void 0&&v.state.viewport(Y),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return P},this.dispose=function(){P.dispose(),n.material.dispose()},this.getReflectionCamera=function(v){let g=this._reflectionCameras.get(v);return g===void 0&&(g=v.clone(),this._reflectionCameras.set(v,g)),g}}}Xr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function ln(i){const e=Rt.clamp((10-i)/72,0,1);return-.12-Math.sin(e*Math.PI*3)**2*.72}function qi(i,e){let t=Math.max(ln(i-e),ln(i),ln(i+e));for(const n of[8,-5,-18,-31,-44,-55,-61]){const s=Math.max(0,Math.abs(i-n)-e-.1);s<.25&&(t=Math.max(t,ln(n)+.06-s*.4))}return t}function Dg(i,e){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),s=n.createImageData(128,128);for(let g=0;g<s.data.length;g+=4){const D=110+Math.sin(g*12.9898)*22;s.data[g]=s.data[g+1]=s.data[g+2]=D,s.data[g+3]=255}n.putImageData(s,0,0);const r=new Ds(t);r.wrapS=r.wrapT=Rr,r.repeat.set(4,24);const o=new rt({color:1054752,metalness:.08,roughness:.42,bumpMap:r,bumpScale:.014}),a=new rt({color:2371902,metalness:.65,roughness:.23}),c=new rt({color:6582654,metalness:.9,roughness:.23}),l=new rt({color:10051899,metalness:.85,roughness:.3}),u=new rt({color:730150,metalness:.35,roughness:.48}),d=new rt({color:592137,metalness:.05,roughness:.95}),h=wn(In.cyan,.38),f=wn(In.red,.65),_=(g,D,E,U=40,C=8,B=i)=>{const N=new we(new Xi(new ki(g),U,D,C,!1),E);return B.add(N),N};for(let g=0;g<19;g++){const D=(g-9)*.38,E=Array.from({length:100},(U,C)=>{const B=10-C/99*72;return new A(D,ln(B)-.2,B)});_(E,.185,g%5===0?a:o,e?80:140,8),g%3===0&&_(E.map(U=>U.clone().add(new A(0,.184,0))),.012,g===0?f:h,80,3)}for(const g of[8,-5,-18,-31,-44,-55,-61]){const D=ln(g);K(i,[7.4,.09,.19],[0,D+.015,g],a),K(i,[7.4,.12,.3],[0,D-.58,g],o);for(const E of[-3.65,3.65]){K(i,[.12,.65,.3],[E,D-.28,g],a);const U=new we(new At(.085,.085,.05,8),c);U.position.set(E,D+.1,g),i.add(U)}}for(const g of[10,-62]){const D=new we(new Nn(8.1,1.3,1.6,2,.12),o);D.position.set(0,-.7,g),i.add(D),K(i,[8.4,.18,2],[0,-1.4,g],a);for(let E=0;E<19;E++)K(i,[.22,.15,.8],[(E-9)*.38,-.05,g],l)}for(const g of[8,-5,-18,-31,-44]){const D=ln(g);for(const E of[-3.65,3.65])K(i,[.09,.012,.018],[E,D+.13,g],d),K(i,[.018,.012,.09],[E,D+.131,g],d)}for(const g of[9.4,-61.4])for(let D=0;D<19;D++){const E=(D-9)*.38;for(let U=0;U<4;U++){const C=new we(new mn(.195,.015,3,8),o);C.position.set(E,ln(g)-.2,g+U*.1),i.add(C)}}K(i,[27,.7,39],[0,17,-25],a),K(i,[25,.14,37],[0,16.58,-25],u);for(let g=0;g<23;g++)K(i,[17,.7,.16],[0,16.15,-8-g*1.5],c);for(const g of[-11,11]){K(i,[.12,.08,37],[g,16.45,-25],h);for(let D=-9;D>-43;D-=6)K(i,[1.7,.3,2.5],[g,16.15,D],o),K(i,[.2,2.8,.2],[g,18.5,D],c)}for(let g=0;g<6;g++){const D=-9+g*.45;_([new A(D,15,16),new A(D-4,12,0),new A(D-8,13,-21),new A(-24,5,-43)],.18,g%3?o:a,42)}for(const g of[-5,5])_([new A(g,7,-58),new A(g*2,12,-49),new A(g*2,14,-26),new A(g*3,10,-12)],.3,l,36,10);for(const g of[-1,1]){for(let D=0;D<(e?3:5);D++){const E=g*(20+D*.3);_([new A(E,24,25),new A(E,22.9,10),new A(E+g*.5,23.7,-6),new A(E,22.8,-26),new A(E,23.6,-47),new A(g*29,18,-61)],.1,D===0?a:o,e?32:48,6)}for(const D of[24,9,-7,-27,-47]){K(i,[2.5,.18,.35],[g*20.6,23.9,D],c);for(const E of[g*19.4,g*21.8])K(i,[.12,.7,.18],[E,24.2,D],a)}}K(i,[15,.6,110],[-30.5,25,-18],a),K(i,[53,.6,110],[11.5,25,-18],a),K(i,[8,.6,73],[-19,25,-36.5],a),K(i,[8,.6,27],[-19,25,23.5],a);for(let g=0;g<12;g++){const D=g%2?-1:1;K(i,[.75,.18,1.1],[-19+D*3.8,24.65,.5+Math.floor(g/2)*1.7],c).rotation.set(D*.35,g*.23,D*.45),K(i,[.14,.04,.5],[-19+D*3.65,24.5,.5+Math.floor(g/2)*1.7],d)}const x=K(i,[3.6,.25,2],[-6.5,8.8,-8],d);x.rotation.z=-.18;for(let g=0;g<5;g++)_([new A(-16+g*.22,24.6,5),new A(-12+g*.2,17,1),new A(-7+g*.24,9,-8)],.065,g%2?o:l,24,5),_([new A(-7+g*.24,9,-8),new A(-6.8+g*.24,8.35,-7.8)],.035,l,3,5);K(i,[76,28,1],[0,11,36],a);for(let g=28;g>-70;g-=9){g===1?(K(i,[12,.75,.5],[-29,24.25,g],c),K(i,[50,.75,.5],[10,24.25,g],c)):K(i,[70,.75,.5],[0,24.25,g],c);for(const D of[-30,30])K(i,[.8,5,.9],[D,22,g],o)}for(let g=0;g<28;g++)K(i,[18,.12,.14],[21,14+g*.26,35.4],o),K(i,[18,.12,.14],[-21,14+g*.26,35.4],o);const p=new Mt;p.position.z=-6,i.add(p);for(let g=0;g<(e?100:210);g++){const E=(g%2?-1:1)*(6+g*7.13%26),U=20-g*11.37%86;K(p,[.65+g%3*.25,.18,.4],[E,-2.96,U],g%8===0?d:o);for(const C of[-.48,.48])K(p,[.17,.1,.4],[E+C,-2.98,U],c)}const m=new Mt;p.add(m);const M=new Mt;M.position.set(-6.4,-.65,-9),M.rotation.set(.23,-.32,-.19),m.add(M),K(M,[2.8,.18,1.8],[0,-.6,0],a),K(M,[2.8,1.25,.16],[0,-.02,-.82],d);for(const g of[-1.32,1.32])K(M,[.16,1.1,1.7],[g,-.08,0],d);K(M,[2.4,.12,1.3],[0,-.36,0],u);const w=K(M,[2.7,.12,1.25],[0,.68,-.48],a);w.rotation.x=-.55;for(let g=0;g<5;g++)K(M,[.18,.08,.7],[-.9+g*.45,.78,-.5],d).rotation.x=-.55;K(m,[.3,1.1,2.1],[-7.8,-1.9,-9],c),K(m,[3.8,.16,2.4],[-6.7,-1.5,-9],a),M.updateMatrix();for(let g=0;g<8;g++){const D=-.96+g%4*.64,E=g<4?-.2:.2;K(M,[.23,.23,.2],[D,E,.66],o),K(M,[.12,.12,.25],[D,E,.81],l);const U=new A(D,E,.94).applyMatrix4(M.matrix),C=new A(D,E,1.25).applyMatrix4(M.matrix),B=new A(-8.3+g*.18,-2.72+g%3*.1,-4.8-g%2*.4);_([U,C,new A(C.x-.15,C.y-.1,-7.15),new A(U.x-.25,-2.5,-6.25),B],.065,g%3===0?a:o,22,6,m),_([B,B.clone().add(new A(-.14,.08,.22))],.032,l,2,5,m)}K(m,[4,.03,5],[-7,-3.03,-10],d);for(let g=0;g<16;g++)K(m,[.3+g%3*.15,.18,.4],[-5-g*.71%5,-2.85+g%4*.08,-7-g*1.13%6],g%3?d:l).rotation.set(g*.7,g*1.4,g*.3);const S=new Mt;p.add(S),S.position.set(10,0,3);const P=new Hc;P.moveTo(-2.25,-2.5),P.lineTo(2.25,-2.5),P.lineTo(2.25,.5),P.lineTo(1.5,.35),P.lineTo(1.7,1.15),P.lineTo(.8,.9),P.lineTo(.4,2.5),P.lineTo(-2.25,2.5),P.closePath();const T=new we(new Oa(P,{depth:.3,bevelEnabled:!1}),u);T.position.set(8,1,-26),S.add(T),T.rotation.z=.28;for(let g=0;g<3;g++)for(let D=0;D<3;D++)g===2&&D===2||(K(T,[.9,.6,.12],[-1.4+D*1.15,-1.4+g*1.25,.36],o),K(T,[.55,.025,.02],[-1.4+D*1.15,-1.6+g*1.25,.43],g===2?f:h));K(S,[5.4,.3,1.4],[8,-2.7,-26],a),K(S,[1.8,2,.3],[10.7,-1.8,-25],d).rotation.set(.3,.5,-.5);for(let g=0;g<12;g++)K(S,[.08,.4+g%3*.17,.08],[6+g*.34,-1.6,-25.7],l);for(const g of[-1,1])for(let D=0;D<3;D++){const E=g*(8.8+D%2*2.5),U=-3-D*16,C=p;K(C,[1.3,1.65,.45],[E,-1.6,U],o),K(C,[1.3,.7,.14],[E,-.43,U-.12],c);const B=new we(new At(.17,.17,.16,10),d);B.rotation.x=Math.PI/2,B.position.set(E,-.4,U-.02),C.add(B);for(let I=0;I<3;I++)K(C,[.09,.65,.1],[E-.4+I*.4,-2.65,U],l);const N=new Mt;p.add(N),N.position.set(g*12,-2.85,g===1&&D===1?-21:U-5),K(N,[2.5,.2,1.6],[0,0,0],u);const V=new we(new At(.45,.45,1.1,12),l);V.rotation.z=Math.PI/2,V.position.set(-.3,.65,0),N.add(V);for(let I=0;I<9;I++){const X=new we(new mn(.46,.025,4,12),d);X.rotation.y=Math.PI/2,X.position.set(-.8+I*.125,.65,0),N.add(X)}K(N,[.15,1.1,1.1],[.55,.6,0],c);const Y=K(N,[1.8,.09,.28],[.15,1.22,.18],c);Y.rotation.z=-.12;for(const I of[.65,.95])K(N,[.12,.65,.18],[I,.4,.3],l)}}function Ig(i,e){const t=sn.length,n=new hn(new Nn(.55,.43,.43,2,.025),new rt({color:2371900,metalness:.55,roughness:.46}),t),s=new hn(new yt(.13,.035,.025),new Gt({color:16777215,toneMapped:!1}),t*4),r=new hn(new yt(.27,.015,.17),new rt({color:4740188,metalness:.8,roughness:.4}),t),o=new hn(new yt(.04,.06,.035),new rt({color:10451017,metalness:.75,roughness:.4}),t*8),a=new hn(new mn(.4,.025,4,20),wn(Zn,1.8),t),c=[n,s,r,o,a];n.name="recovery-packet-bodies",s.name="recovery-packet-indicators";for(const g of c)g.instanceMatrix.setUsage(Pa),g.boundingSphere=new li(new A(0,0,-29),40),g.userData.skipReflection=g!==n,i.add(g);const l=new wt,u=new A,d=new A,h=new Qe,f=Array.from({length:t},()=>new A),_=new Float64Array(t),x=new Float64Array(t).fill(-100),p=ot.map(()=>0),m=.57,M=Math.PI*m;let w=0;function S(g,D,E,U,C,B){const N=g-U.x,V=D-U.z;if(Math.abs(N)>1.1||Math.abs(V)>1.1)return!1;const Y=Math.cos(E),I=Math.sin(E),X=Math.cos(C),H=Math.sin(C),z=Math.abs(Y*X+I*H),q=Math.abs(I*X-Y*H);return Math.abs(N*Y-V*I)<=.435+.275*z+.24*q+B&&Math.abs(N*I+V*Y)<=.365+.275*q+.24*z+B&&Math.abs(N*X-V*H)<=.275+.435*z+.365*q+B&&Math.abs(N*H+V*X)<=.24+.435*q+.365*z+B}function P(g,D,E){const U=sn[g],C=ot[U.zoneIndex],B=C.start-C.end,N=B*2+M*2,V=((U.slot*N/C.count+D)%N+N)%N,Y=C.x;if(V<B)return E.set(Y-m,0,C.start-V),Math.PI;if(V<B+M){const X=(V-B)/m;return E.set(Y-m*Math.cos(X),0,C.end-m*Math.sin(X)),Math.PI-X}if(V<2*B+M)return E.set(Y+m,0,C.end+V-B-M),0;const I=(V-2*B-M)/m;return E.set(Y+m*Math.cos(I),0,C.start+m*Math.sin(I)),-I}function T(g){h.setHex(e.has(sn[g].id)?Zn:pa);for(let D=0;D<4;D++)s.setColorAt(g*4+D,h);s.instanceColor.needsUpdate=!0}for(let g=0;g<t;g++)T(g);e.subscribe(()=>{for(let g=0;g<t;g++)T(g);e.count||(p.fill(0),x.fill(-100))});function v(g,D,E,U){d.set(g,D,E).applyAxisAngle(wt.DEFAULT_UP,U),l.position.copy(u).add(d),l.updateMatrix()}return{canOccupy(g,D,E=0){return f.every((U,C)=>!S(g,D,E,U,_[C],.008))},recover(g,D,E,U=0){const C=[];if(E>.25||!e.accessUnlocked)return C;for(let B=0;B<t;B++)!e.has(sn[B].id)&&S(g,D,U,f[B],_[B],.035)&&(e.rescue(sn[B].id),x[B]=w,C.push(sn[B].id));return C},update(g,D,E,U=0){const C=Math.min(Math.max(0,g-w),.12);w=g;for(let B=0;B<ot.length;B++){const N=p[B]+(D?0:C*.85);let V=!1;if(E)for(let Y=0;Y<t;Y++){if(sn[Y].zoneIndex!==B)continue;const I=P(Y,N,u);S(E.x,E.z,U,u,I,.02)&&(V=!0)}V||(p[B]=N)}for(let B=0;B<t;B++){const N=P(B,p[sn[B].zoneIndex],u);u.y=qi(u.z,.28)+.24,f[B].copy(u),_[B]=N,l.position.copy(u),l.rotation.set(0,N,0),l.scale.setScalar(1),l.updateMatrix(),n.setMatrixAt(B,l.matrix);for(let I=0;I<4;I++)v(I%2?.1:-.1,e.has(sn[B].id)?.015:I%2?-.025:.055,I<2?.22:-.22,N),s.setMatrixAt(B*4+I,l.matrix);v(0,.222,0,N),r.setMatrixAt(B,l.matrix);for(let I=0;I<8;I++)v(-.18+I%4*.12,-.16,I<4?.224:-.224,N),o.setMatrixAt(B*8+I,l.matrix);const V=g-x[B],Y=!D&&V>=0&&V<.65;l.position.copy(u),l.rotation.set(Math.PI/2,0,0),l.scale.setScalar(Y?.3+V*2.5:0),l.updateMatrix(),a.setMatrixAt(B,l.matrix)}for(const B of c)B.instanceMatrix.needsUpdate=!0}}}function Ng(i,e,t){const n=new rt({color:1911611,metalness:.65,roughness:.35}),s=new rt({color:1648435,metalness:.45,roughness:.45}),r=new rt({color:4543589,metalness:.8,roughness:.28}),o=wn(In.cyan,.35),a=wn(In.violet,.3),c=wn(In.red,.5),l=new Xr(new gn(180,180),{color:2438211,textureWidth:384,textureHeight:384,clipBias:.003,multisample:0});l.name="motherboard-floor";const u=l.onBeforeRender.bind(l);l.onBeforeRender=(...I)=>{l.getReflectionCamera(I[2]).layers.set(1),u(...I)},l.rotation.x=-Math.PI/2,l.position.set(0,-3.15,-22),i.add(l);const d=new yh(150,75,1718859,991277);d.position.set(0,-3.12,-25),i.add(d),Dg(i,e);for(const I of[2.6,...ot.map(X=>(X.start+X.end)/2)]){K(i,[10.4,.28,1.8],[0,-1.7,I],n);for(const X of[-5.1,5.1])K(i,[.04,.04,1.8],[X,-1.55,I],o);for(const X of[-3,3])K(i,[.5,1.3,.5],[X,-2.49,I],r)}K(i,[20,2,15],[0,-2.1,-62],n),K(i,[10,4.5,6],[0,1.2,-65],r);for(let I=0;I<19;I++)K(i,[.24,7,6.8],[-5.4+I*.6,3.2,-65],s);K(i,[12,.1,.1],[0,6.6,-61.55],o);const h=new we(new mn(7.5,.035,6,100),a);h.position.set(0,6,-67),i.add(h),K(i,[76,29,1],[0,10,-72],n);for(const I of[-1,1]){K(i,[1,19,89],[I*36,6,-26],n),K(i,[.4,.4,89],[I*35.4,15.5,-26],r);for(let oe=10;oe>-68;oe-=13)K(i,[.4,18,.45],[I*35.4,6,oe],r);const X=new Mt;X.position.set(I*18,8,-70.8),i.add(X);const H=new we(new mn(4.8,.16,8,64),r);X.add(H);const z=new we(new mn(4.55,.025,5,64),I===-1?c:a);X.add(z);const q=new we(new At(.75,.75,.6,20),s);q.rotation.x=Math.PI/2,X.add(q);for(let oe=0;oe<7;oe++){const xe=new Mt;xe.rotation.z=oe/7*Math.PI*2,X.add(xe);const $=K(xe,[1.5,3.2,.1],[0,2.3,0],n);$.rotation.z=.3}}const f=new Mt;f.position.z=-6,i.add(f);const _=new At(.65,.65,2.4,16),x=new At(.53,.53,.05,16);for(let I=0;I<36;I++){const X=(I%2?-1:1)*(7+I*17%19),H=14-I*13%78,z=new we(_,n);z.position.set(X,-1.9,H),f.add(z);const q=new we(x,r);q.position.set(X,-.68,H),f.add(q),K(f,[.09,1.5,.05],[X,-1.8,H+.65],I%9===0?c:o);const oe=X<0?1:-1,xe=new ki([new A(X,-3.06,H),new A(X+oe*3,-3.06,H-3),new A(X+oe*3,-3.06,H-9),new A(X+oe*7,-3.06,H-13)]),$=new we(new Xi(xe,8,.025,3,!1),I%7===0?c:o);f.add($)}const p=new ki([new A(0,19,30),new A(5,16,25),new A(6,11,20),new A(-2,7,16),new A(-3,4.4,12),new A(-1.3,2.8,9)],!1,"catmullrom",.35),m=new rt({color:1320246,metalness:.7,roughness:.35}),M=new A;for(let I=0;I<=50;I++){const X=I/50,H=p.getPointAt(X);M.copy(p.getTangentAt(X));const z=new we(new mn(2.6,I%5===0?.12:.025,5,40),I%9===0?c:I%3===0?o:m);z.position.copy(H),z.quaternion.setFromUnitVectors(new A(0,0,1),M),i.add(z)}for(let I=0;I<7;I++){const X=Math.PI*.12+I/6*Math.PI*.76,H=[];for(let z=0;z<=80;z++){const q=z/80,oe=new A(Math.cos(X)*2.6,-Math.sin(X)*2.6,0);oe.applyQuaternion(new Ht().setFromUnitVectors(new A(0,0,1),p.getTangentAt(q))),H.push(p.getPointAt(q).add(oe))}i.add(new we(new Xi(new ki(H),140,I%2===0?.065:.12,5,!1),I%2===0?o:m))}for(const I of[-.36,0,.36]){const X=Array.from({length:181},(H,z)=>{const q=z/180,oe=new Ht().setFromUnitVectors(new A(0,0,-1),p.getTangentAt(q));return p.getPointAt(q).add(new A(I,-.59,0).applyQuaternion(oe))});i.add(new we(new Xi(new ki(X),120,.14,8,!1),m))}const w=new we(new mn(2.6,.1,8,64),r);w.position.copy(p.getPointAt(1)),w.quaternion.setFromUnitVectors(new A(0,0,1),p.getTangentAt(1)),i.add(w);const S=new Mt;S.position.copy(p.getPointAt(0)),S.quaternion.setFromUnitVectors(new A(0,0,-1),p.getTangentAt(0)),i.add(S);for(const I of[-1,1])K(S,[.55,6.3,.5],[I*2.95,0,1.2],n),K(S,[5.4,.55,.5],[0,I*2.95,1.2],n);const P=new we(new At(2.6,2.9,1.3,48,1,!0),m);P.rotation.x=Math.PI/2,P.position.z=.6,S.add(P);const T=vi("I/O / PACKET INTAKE","#86b6c2",4);T.position.set(0,2.85,.9),S.add(T),i.updateMatrixWorld(!0);const v=new Map,g=new A,D=[];i.traverse(I=>{if(I===l||!(I instanceof we)||!(I.material instanceof rt))return;const X=I.geometry.clone().applyMatrix4(I.matrixWorld);X.index||X.setIndex(Array.from({length:X.getAttribute("position").count},($,ve)=>ve)),X.getAttribute("uv")||X.setAttribute("uv",new gt(new Float32Array(X.getAttribute("position").count*2),2)),X.computeBoundingBox(),X.boundingBox.getCenter(g);const H=new A;X.boundingBox.getSize(H);const z=Math.max(H.x,H.y,H.z)<.65,q=`${Math.floor((g.x+16)/32)},${Math.floor(g.z/32)},${z?"detail":"structure"}`,oe=v.get(I.material)||new Map,xe=oe.get(q)||[];xe.push(X),oe.set(q,xe),v.set(I.material,oe),D.push(I)});for(const I of D)I.removeFromParent(),I.geometry.dispose();for(const[I,X]of v)for(const[H,z]of X){const q=ai(z,!1);if(q){q.computeBoundingSphere();const oe=new we(q,I);oe.name=`hardware-cell-${H}`,oe.matrixAutoUpdate=!1,oe.userData.staticHardware=!0,oe.userData.microDetail=H.endsWith("detail"),i.add(oe)}z.forEach(oe=>oe.dispose())}const E=new hn(new yt(.12,.12,.34),wn(In.cyan,.8),65);E.instanceMatrix.setUsage(Pa),i.add(E);const U=new wt,C=256,B=Array.from({length:C+1},(I,X)=>{const H=X/C;return{position:p.getPointAt(H),rotation:new Ht().setFromUnitVectors(new A(0,0,1),p.getTangentAt(H))}}),N=new A;let V=!1;const Y=Ig(i,t);return{path:p,packets:E,fault:c,setQuality(I){const X=[512,384,256,192][I],H=l.getRenderTarget();H.width!==X&&H.setSize(X,X)},canOccupy:(I,X,H)=>Y.canOccupy(I,X,H),recover:(I,X,H,z)=>Y.recover(I,X,H,z),update(I,X,H,z){if(Y.update(I,X,H,z),c.emissiveIntensity=X?.5:.4+Math.pow(Math.sin(I*2.3),12)*.6,!(X&&V)){V=X;for(let q=0;q<65;q++){if(q<35){const xe=((X?0:I*.035)+q/35)%1*C,$=Math.min(C-1,Math.floor(xe)),ve=xe-$;U.position.lerpVectors(B[$].position,B[$+1].position,ve),U.quaternion.slerpQuaternions(B[$].rotation,B[$+1].rotation,ve);const te=q*2.39996;U.position.add(N.set(Math.cos(te)*1.95,Math.sin(te)*1.95,0).applyQuaternion(U.quaternion))}else{const oe=10-((X?0:I*3)+q*3.1)%70;U.position.set(q%2?3.1:-3.1,ln(oe)+.08,oe),U.rotation.set(0,0,0)}U.updateMatrix(),E.setMatrixAt(q,U.matrix)}E.instanceMatrix.needsUpdate=!0}}}}function Ug(i,e,t,n,s){const r=e.color.clone(),o=e.groundColor.clone(),a=t.color.clone(),c=new Qe(16720920),l=new Qe(3934216),u=new Qe(198414),d=new Qe(1508357),h=new rt({color:2501424,roughness:.4,metalness:.7}),f=[],_=new Qe(14085119),x=new Qe(4832255),p=[0,0,0];let m=0;const M=[];for(const[C,B]of[[-5.5,-4],[5.5,-24],[-5.5,-45]]){const N=B===-4?24.6:15.75;for(const I of[-.52,.52])K(i,[.32,.12,.34],[C+I,N,B],h),K(i,[.045,N-7.5,.045],[C+I,(N+7.5)/2,B],h);K(i,[1.5,.3,.6],[C,7.3,B],h);const V=wn(16722201,.5);f.push(V),K(i,[1.15,.2,.35],[C,7.05,B],V);for(const I of[-.48,0,.48])K(i,[.035,.28,.46],[C+I,7.02,B],h);const Y=new kr(16720920,0,29,1.4);Y.position.set(C,6.7,B),i.add(Y),M.push(Y)}const w=[new A(-17,24.5,5),new A(-6.4,8.5,-7.8)],S=s?28:48,P=new Gt({color:16777215,toneMapped:!1}),T={sparkTime:{value:0},sparkStability:{value:0},sparkBudget:{value:S},sparkReduced:{value:0}};P.onBeforeCompile=C=>{Object.assign(C.uniforms,T),C.vertexShader=C.vertexShader.replace("#include <common>",`
      #include <common>
      attribute vec2 sparkSeed;
      uniform float sparkTime, sparkStability, sparkBudget, sparkReduced;
    `).replace("#include <begin_vertex>",`
      float source = sparkSeed.x;
      float slot = sparkSeed.y;
      float period = 4.8 + source * 1.3;
      float age = mod(sparkTime + source * 1.8, period) - slot / max(sparkBudget, 1.0) * .65;
      float life = source < .5 ? 2.3 : 1.55;
      float t = max(0.0, age);
      float seed = slot * 2.0 + source;
      float angle = seed * 2.39996;
      float speed = .7 + mod(seed * .37, 1.7);
      vec3 velocity = vec3(cos(angle) * speed, -.6 - 8.4 * t, sin(angle) * speed);
      vec3 axis = normalize(velocity);
      vec3 side = normalize(cross(axis, vec3(0.0, 0.0, 1.0)));
      vec3 front = cross(side, axis);
      float fade = max(0.0, 1.0 - t / life);
      float sparkVisible = float(sparkReduced < .5 && slot < sparkBudget && age >= 0.0 && age < life && slot / max(sparkBudget, 1.0) < 1.0 - sparkStability * .9);
      vec3 transformed = (side * position.x * .04 + axis * position.y * (.22 + t * .16) + front * position.z * .04) * fade * sparkVisible;
      transformed += vec3(velocity.x * t, -.6 * t - 4.2 * t * t, velocity.z * t);
    `)};const v=new hn(new yt(1,1,1),P,w.length*S);v.name="ceiling-fault-sparks",v.boundingSphere=new li(new A(-11,11,-1),28),i.add(v);const g=new wt,D=new Qe,E=new Float32Array(v.count*2);let U=S;for(let C=0;C<v.count;C++){const B=C%w.length;E[C*2]=B,E[C*2+1]=Math.floor(C/w.length),g.position.copy(w[B]),g.updateMatrix(),v.setMatrixAt(C,g.matrix),D.setHex(C%4===0?16772271:C%3===0?16733211:16753723),v.setColorAt(C,D)}return v.geometry.setAttribute("sparkSeed",new ca(E,2)),{setQuality(C){n.forEach(B=>{B.visible=!0}),M.forEach(B=>{B.visible=!0}),U=C>=3?0:C===2?8:C===1?14:S,T.sparkBudget.value=U,v.visible=U>0},update(C,B,N=[],V=!1,Y=1/60){const I=B?1:1-Math.exp(-Y*.8);m+=((V?1:0)-m)*I;for(let z=0;z<p.length;z++)p[z]+=((N[z*2]&&N[z*2+1]?1:0)-p[z])*I;const X=.5-.5*Math.cos(C*Math.PI*2/5),H=(B?.28:Rt.smoothstep(X,.18,.9))*(1-m);return e.color.copy(r).lerp(c,H*.82),e.groundColor.copy(o).lerp(l,H),e.intensity=1.05-H*.5+m*.25,t.color.copy(a).lerp(c,H*.9),t.intensity=1.15-H*.75+m*.15,i.environmentIntensity=.22-H*.12,i.fog instanceof Gr&&i.fog.color.copy(u).lerp(d,H),i.background instanceof Qe&&i.background.copy(u).lerp(d,H),n.forEach((z,q)=>{z.intensity=25*(q===1?1+H*.3:1-H*.9),q===1&&z.color.copy(c).lerp(x,m)}),M.forEach((z,q)=>{const oe=Math.max(m,p[q]);z.color.copy(c).lerp(_,oe),z.intensity=(1+H*58)*(1-oe)+oe*24,f[q].color.copy(z.color),f[q].emissive.copy(z.color),f[q].emissiveIntensity=(.12+H*1.5)*(1-oe)+oe*.7}),T.sparkTime.value=C,T.sparkStability.value=m,T.sparkReduced.value=B?1:0,H}}}const ka=[];for(const i of[-.425,.425])for(const e of[-.34,.34])for(const t of[-.365,.365])ka.push(new A(i,e,t));for(const i of[-.39,-.19,.19,.39])for(const e of[-.26,.26])ka.push(new A(i,-.415,e));const bo=new A;function gi(i,e,t){let n=-1/0;for(const s of ka)bo.copy(s).multiply(t).applyQuaternion(e),n=Math.max(n,qi(i+bo.z,.025)-bo.y);return n+.012}function gr(i,e,t){return t.setFromUnitVectors(new A(0,0,-1),i).multiply(new Ht().setFromEuler(new Fn(e*.55,e*.22,-e*.8)))}function Fg(i,e,t,n,s,r,o){const a=document.createElement("div");a.className="recovery-hud",a.innerHTML='<div class="recovery-meter"><span>RECOVERY PROCESS</span><strong></strong><small></small></div><button class="recovery-interact" type="button" hidden></button><p class="recovery-toast" role="status" aria-live="polite"></p>',e.append(a);const c=document.createElement("button");c.className="pda-access",c.type="button",c.hidden=!n.hasPda,c.innerHTML="PDA <kbd>Q</kbd>",c.setAttribute("aria-label","Abrir PDA");const l=document.createElement("div");l.className="pda-acquired",l.setAttribute("role","status"),l.setAttribute("aria-live","polite"),a.append(c,l);let u=!1,d,h="summary";function f(){_.close(),n.unlockAccess(),s(!1),u&&(u=!1,l.innerHTML='<strong>PDA OBTENIDA</strong><span class="pda-keyboard-notice">Pulsa <kbd>Q</kbd> para volver a abrirla.</span><span class="pda-touch-notice">Toca el botón PDA para volver a abrirla.</span>',l.classList.add("is-visible"),window.clearTimeout(d),d=window.setTimeout(()=>l.classList.remove("is-visible"),2500))}const _=document.createElement("dialog");_.className="recovery-dialog",_.setAttribute("aria-labelledby","recovery-dialog-title"),t.append(_);const x=au();x.light.removeFromParent(),x.root.name="aux-guide",x.root.position.set(1.85,qi(4.8,.4)+.42,4.8),x.root.rotation.set(.09,-.35,-.15),x.root.scale.setScalar(.8),x.core.emissiveIntensity=.22,i.add(x.root);const p=new Mt,m=new Gt({color:Zn,toneMapped:!1}),M=new we(new Fs(.23,.27,24),m),w=new we(new yt(.045,.19,.025),m);w.position.y=.04;const S=new we(new yt(.045,.045,.025),m);S.position.y=-.115,p.add(M,w,S),p.position.copy(x.root.position).add(new A(0,.9,0)),i.add(p);const P=2.6,T=new Mt;T.name="aux-holographic-gate",T.position.set(0,qi(P,.3)-.15,P),i.add(T);let v=n.accessUnlocked?1:0;const g=new rt({color:2439495,metalness:.7,roughness:.35}),D=new Gt({color:pa,toneMapped:!1}),E=new jt({transparent:!0,depthWrite:!1,side:on,blending:Ar,uniforms:{time:{value:0},opacity:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vUv; uniform float time; uniform float opacity;
      void main(){
        float lines=pow(.5+.5*sin(vUv.y*180.-time*2.),14.);
        float grid=step(.97,fract(vUv.x*14.))+step(.97,fract(vUv.y*9.));
        float edge=pow(abs(vUv.y-.5)*2.,10.);
        gl_FragColor=vec4(1.,.12,.07,(.09+lines*.19+grid*.12+edge*.3)*opacity);
      }`}),U=[-1,1].map(F=>{const Z=T.position.y-.09;K(i,[.42,Z+1.56,.65],[F*3.7,(Z-1.56)/2,P],g),K(T,[.48,.18,.85],[F*3.7,0,0],g),K(T,[.28,3.3,.4],[F*3.7,1.65,0],g),K(T,[.07,2.9,.44],[F*3.7-F*.16,1.65,0],D);for(const he of[-.27,.27]){K(T,[.68,.09,.12],[F*3.5,.1,he],g),K(T,[.68,.09,.12],[F*3.5,-.47,he],g),K(T,[.1,.66,.12],[F*3.79,-.185,he],g);const fe=new we(new At(.055,.055,.055,6),g);fe.position.set(F*3.3,.17,he),T.add(fe)}const G=new we(new gn(3.7,3.1),E);return G.name=`gate-hologram-${F}`,G.position.set(F*1.85,1.6,0),T.add(G),G}),C=new rt({color:5662068,metalness:.65,roughness:.5}),B=new we(new yt(.24,.025,.22),C);B.position.set(-.12,.355,.02),B.rotation.y=-.2,x.root.add(B);const N=new we(new At(.016,.016,.28,5),C);N.position.set(.28,.44,-.08),N.rotation.z=-.4,x.root.add(N);const V=new we(new Ba(.035,6,4),m);V.position.set(.335,.57,-.08),x.root.add(V);const Y=new we(new yt(.76,.42,.025),new rt({color:594459,roughness:.8}));Y.position.set(0,0,.38),x.root.add(Y);const I=[];for(const F of[-1,1])I.push(new yt(.12,.025,.025).rotateZ(F*-.25).translate(F*.17,.08,.404)),I.push(new yt(.09,.018,.025).rotateZ(F*-.35).translate(F*.04,-.105,.404));const X=ai(I),H=new Gt({color:Zn}),z=X?new we(X,H):void 0;z&&x.root.add(z),I.forEach(F=>F.dispose());const q=[];for(const F of[-1,1]){for(const Z of[-1,1])q.push(new yt(.075,.028,.025).rotateZ(Z*-.65).translate(F*.17+Z*.025,.09,.404));q.push(new yt(.085,.024,.025).rotateZ(F*.55).translate(F*.075,-.105,.404)),q.push(new yt(.055,.024,.025).rotateZ(F*1.05).translate(F*.13,-.058,.404))}q.push(new yt(.09,.024,.025).translate(0,-.125,.404));const oe=ai(q),xe=new we(oe,H);xe.name="aux-happy-face",x.root.add(xe),q.forEach(F=>F.dispose());const $=new hn(new Nn(.72,.44,.3,2,.065),new rt({color:2569534,metalness:.6,roughness:.5}),ot.length),ve=[!1,!0].map(F=>{const Z=document.createElement("canvas");Z.width=256,Z.height=128;const G=Z.getContext("2d");G.fillStyle="#07131c",G.fillRect(0,0,256,128),G.strokeStyle=F?"#49bbff":"#ff4935",G.lineWidth=8,G.lineCap="round",G.lineJoin="round",G.beginPath(),G.arc(64,64,42,0,Math.PI*2),G.stroke(),G.beginPath(),F?(G.moveTo(42,64),G.lineTo(58,80),G.lineTo(86,49)):(G.moveTo(49,49),G.lineTo(79,79),G.moveTo(79,49),G.lineTo(49,79)),G.stroke(),G.lineWidth=5;for(let fe=0;fe<3;fe++)G.beginPath(),G.moveTo(130,42+fe*22),G.lineTo(226-fe*18,42+fe*22),G.stroke();const he=new Ds(Z);return he.colorSpace=Zt,new Gt({map:he,toneMapped:!1})}),te=new gn(.53,.22),Ue=[];i.add($);const Me=new wt,Fe=ot.map(F=>new A(Math.sign(F.x)*4.35,qi((F.start+F.end)/2,.3)+.34,(F.start+F.end)/2)),tt=ot.map((F,Z)=>{const G=Fe[Z],he=G.y-.12,fe=new we(new At(.12,.17,he+1.56,12),g);fe.position.set(G.x,(he-1.56)/2,G.z),i.add(fe);const ie=new we(new At(.29,.33,.1,16),g);ie.position.set(G.x,-1.51,G.z),i.add(ie);const re=new we(new At(.19,.19,.09,12),C);re.position.set(G.x,he-.08,G.z),i.add(re),Me.rotation.set(-.35,-Math.sign(F.x)*(Math.PI/2-.3),0,"YXZ"),Me.position.copy(G),Me.updateMatrix(),$.setMatrixAt(Z,Me.matrix),Me.position.copy(G).add(new A(0,.035,.16).applyEuler(Me.rotation));const _e=new we(te,ve[0]);_e.position.copy(Me.position),_e.rotation.copy(Me.rotation),Ue.push(_e),i.add(_e);const O=K(i,[.37,.025,.025],[0,0,0],C);O.rotation.copy(Me.rotation),O.position.copy(G).add(new A(0,-.13,.16).applyEuler(Me.rotation));const ce=vi(`${F.code} / ${F.title.toUpperCase()}`,"#9aacbb",2.2);return ce.position.copy(Fe[Z]).add(new A(0,1.2,0)),i.add(ce),ce}),Ge=Fe.map((F,Z)=>{const G=new Mt;return G.name=`terminal-ready-${ot[Z].code}`,G.add(M.clone(),w.clone(),S.clone()),G.scale.setScalar(.65),G.position.copy(F).add(new A(0,1.85,0)),G.visible=!1,i.add(G),G});let ee=-2,Se=!1,W=0,de="",me=n.count,pe=ot.map((F,Z)=>n.zoneCount(Z)===F.count);const ue=a.querySelector(".recovery-interact"),Ce=a.querySelector(".recovery-meter strong"),ge=a.querySelector(".recovery-meter small"),Ne=a.querySelector(".recovery-toast"),Ie=matchMedia("(hover: none) and (pointer: coarse)");function We(F,Z){let G=Tr(Z);Ie.matches&&(G=G.replace(/^\[E\]\s*/,"")),F.textContent!==G&&(F.textContent=G)}function L(F){de=F,W=performance.now()+2500,Ne.textContent=F,Ne.classList.add("is-visible")}function He(){if(z&&(z.visible=!n.complete),xe.visible=n.complete,c.hidden=!n.hasPda,n.hasPda||(u=!1,l.classList.remove("is-visible"),h="summary"),Ce.textContent=n.hasPda?n.complete?"SISTEMA ESTABLE · 20/20":`RECUPERACIÓN ${String(n.count).padStart(2,"0")} / 20`:"HABLA CON AUX",n.hasPda||We(ge,"ACÉRCATE AL ROBOT CON EL SÍMBOLO !"),e.dataset.recovered=String(n.count),e.dataset.stable=String(n.complete),ot.forEach((F,Z)=>{Ue[Z].material=ve[n.zoneCount(Z)===F.count?1:0]}),n.count<me)pe=ot.map(()=>!1),L("NUEVA RECUPERACIÓN / Habla con AUX junto a la entrada.");else if(n.count>me){const F=ot.findIndex((Z,G)=>!pe[G]&&n.zoneCount(G)===Z.count);n.complete?L("SYSTEM STABLE / CORE DESBLOQUEADO · Reanuda el sistema al final del bus."):F>=0&&L(`MEMORIA RESTAURADA / ${ot[F].title.toUpperCase()} · Examina los chips desde su terminal.`),pe=ot.map((Z,G)=>n.zoneCount(G)===Z.count)}me=n.count}n.subscribe(He),He();const ne=matchMedia("(prefers-reduced-motion: reduce)");let ye;function le(){if(!(!_.open||ye)){if(ne.matches){f();return}ye=_.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(8px)"}],{duration:160,easing:"ease-in",fill:"forwards"}),ye.finished.then(()=>{ye?.cancel(),ye=void 0,f()}).catch(()=>{})}}function qe(F){const Z=_.open;if(ye?.cancel(),ye=void 0,_.innerHTML=`<div class="recovery-dialog-bar"><span><i></i> AUX / COMM LINK <small>ENCRYPTED · LOCAL</small></span><button type="button" data-close aria-label="Cerrar conversación">CERRAR <kbd>ESC</kbd> ×</button></div><div class="pda-body"><div class="pda-identity"><svg class="aux-portrait" viewBox="0 0 64 64" aria-hidden="true"><path class="aux-shell" d="M12 23 29 15l23 8v26L34 57 12 48Z M12 23l22 8 18-8 M34 31v26"/><path d="m43 19 3-10-6-4 M19 35l7 2 M39 39l7-3 M22 45l5-2 4 4 M16 52v5m6-3v5m19-3v5m6-8v5"/><circle cx="40" cy="5" r="2"/><path class="aux-patch" d="m22 22 8-4 9 4-8 4Z"/></svg><div><strong>AUX<span>_</span></strong><small>MAINTENANCE UNIT / CONNECTED</small></div><span class="pda-signal" aria-hidden="true">▂▄▆</span></div><div class="pda-content">${F}</div><div class="pda-footer" aria-hidden="true"><span>RECOVERY OS / HANDHELD TERMINAL</span><span>LINK ESTABLISHED ●</span></div></div>`,_.querySelector("[data-close]").addEventListener("click",le),s(!0),_.open?_.querySelector("[data-close]").focus({preventScroll:!0}):_.showModal(),_.scrollTop=0,!ne.matches){const G=_.querySelector(".pda-content");Z?G.animate([{opacity:0,transform:"translateY(5px)"},{opacity:1,transform:"translateY(0)"}],{duration:240,easing:"ease-out"}):[...G.children].forEach((he,fe)=>he.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],{duration:420,delay:220+Math.min(fe*65,325),easing:"cubic-bezier(.16,1,.3,1)",fill:"backwards"}))}}function Ee(){const F=n.complete;h="summary",n.hasPda||(n.greet(),u=!0);const Z=F?"Lo has conseguido.":n.count?"La señal está volviendo.":"Todavía queda un proceso limpio.",G=F?"Has recuperado los veinte paquetes y reconstruido todos los registros. La alarma se ha detenido. El hardware sigue dañado, pero la información está a salvo. Gracias por volver.":n.count?`Llevas ${n.count} de 20 paquetes recuperados. Los grupos circulan cerca de sus terminales. Abre los objetivos para localizar los que faltan.`:"El ataque ha corrompido los paquetes que transportan los registros de Hugo. Soy AUX; mi oruga está averiada y no puedo ir a buscarlos.";if(qe(`<p class="recovery-file">AUX / PAQUETE DE MANTENIMIENTO</p><h2 id="recovery-dialog-title">${Z}</h2><p>${G}</p>
      ${F?"":"<p>Acércate a un paquete rojo hasta tocar su carcasa: tu señal lo reparará y sus indicadores pasarán a azul. Cada grupo reconstruye un registro distinto.</p><p>No tienes que perseguirlos por todo el ordenador: cada grupo circula en su propia zona. Los primeros paquetes de Identidad están justo delante.</p>"}
      <p>También puedes consultar la última copia de seguridad. A tu izquierda hay una unidad de cinta antigua: todavía funciona. Actívala si prefieres acceder directamente al portfolio en modo texto.</p>
      <div class="recovery-actions"><button data-objectives>VER OBJETIVOS</button></div>`),F){const he=document.createElement("p");he.textContent="El CORE al final del bus ya está desbloqueado. Acércate a su conector y reanuda el sistema para completar la carga que quedó interrumpida.",_.querySelector(".recovery-actions").before(he)}_.querySelector("[data-objectives]").addEventListener("click",ke)}function ke(){h="objectives",qe(`<p class="recovery-file">RECONSTRUIR PETICIÓN / ARCHIVO DE HUGO</p><h2 id="recovery-dialog-title">Recupera la información.</h2><p>Repara los paquetes rojos por contacto. Cada grupo devuelve un registro al sistema. Para consultar el portfolio en modo texto, utiliza la unidad de backup junto a AUX.</p><div class="recovery-objectives">${ot.map((Z,G)=>`<button data-track="${G}" data-restored="${n.zoneCount(G)===Z.count}"><span>${Z.code} / ${Z.title}</span><strong>${n.zoneCount(G)} / ${Z.count}</strong><small>${n.zoneCount(G)===Z.count?"RESTAURADO · LOCALIZAR TERMINAL":"PENDIENTE · LOCALIZAR PAQUETES"} ↗</small></button>`).join("")}</div><div class="pda-objective-actions"><button class="reset-recovery" data-reset>REINICIAR RECUPERACIÓN</button></div>`);const F=document.createElement("button");F.type="button",F.className="pda-summary",F.textContent="← RESUMEN",F.addEventListener("click",Ee),_.querySelector(".pda-objective-actions").prepend(F),_.querySelectorAll("[data-track]").forEach(Z=>Z.addEventListener("click",()=>{const G=Number(Z.dataset.track);le(),L(n.zoneCount(G)===ot[G].count?`MEMORIA RESTAURADA / ${ot[G].title.toUpperCase()} · Examina los chips desde su terminal.`:`${ot[G].title.toUpperCase()} / ${n.zoneCount(G)} de ${ot[G].count} · Repara los paquetes rojos de esta zona.`)})),_.querySelector("[data-reset]").addEventListener("click",()=>{qe('<p class="recovery-file">NUEVA PARTIDA</p><h2 id="recovery-dialog-title">¿Reiniciar la recuperación?</h2><p>Los veinte paquetes volverán a estar corruptos y se borrará el progreso guardado. El contenido del Archivo seguirá disponible.</p><div class="recovery-actions"><button data-confirm>REINICIAR</button><button data-cancel>CONSERVAR PARTIDA</button></div>'),_.querySelector("[data-confirm]").addEventListener("click",()=>{n.reset(),le()}),_.querySelector("[data-cancel]").addEventListener("click",ke)})}function R(){if(!(!Se||_.open)){if(ee===-3)o.open();else if(ee===-1)Ee();else if(ee>=0){const F=ot[ee];n.zoneCount(ee)===F.count?r(ee):L(`${F.title.toUpperCase()} / ${n.zoneCount(ee)} de ${F.count} · Repara los paquetes rojos de esta zona.`)}}}ue.addEventListener("click",R);function y(){!Se||_.open||!n.hasPda||(h==="objectives"?ke():Ee())}return c.addEventListener("click",y),_.addEventListener("cancel",F=>{F.preventDefault(),le()}),window.addEventListener("keydown",F=>{t.dataset.view!=="explorar"||!Se||_.open||F.repeat||F.ctrlKey||F.metaKey||F.altKey||(F.code==="KeyE"&&(F.preventDefault(),R()),F.code==="KeyQ"&&n.hasPda&&(F.preventDefault(),y()))}),{get canRecover(){return n.accessUnlocked&&v>=1},canOccupy(F,Z){return(v>=1||Z>=P+.75)&&!(Math.abs(Z-P)<.75&&Math.abs(F)>3)&&Math.hypot(F-x.root.position.x,Z-x.root.position.z)>.78},rescued(F){if(F.length&&!(performance.now()<W&&de.startsWith("REGISTRO RESTAURADO"))&&!n.complete){const Z=sn.find(he=>he.id===F[0]),G=ot[Z.zoneIndex];L(`PAQUETE RECUPERADO · ${Z.id} / ${G.title.toUpperCase()} ${n.zoneCount(Z.zoneIndex)}/${G.count}`)}},update(F,Z,G,he,fe){Se=G,v=n.accessUnlocked?Math.min(1,v+(fe?1:he/1.1)):0;const ie=v*v*(3-2*v);if(U.forEach((_e,O)=>{const ce=O===0?-1:1;_e.scale.x=Math.max(.001,1-ie),_e.position.x=ce*(3.7-1.85*(1-ie)),_e.visible=v<1}),E.uniforms.time.value=fe?0:performance.now()*.001,E.uniforms.opacity.value=1-ie*.6,D.color.setHex(n.accessUnlocked?Zn:pa),e.dataset.gate=v>=1?"open":n.accessUnlocked?"opening":"locked",x.root.rotation.z=Rt.lerp(x.root.rotation.z,n.complete?0:-.15,fe?1:1-Math.exp(-he*2)),x.root.rotation.x=Rt.lerp(x.root.rotation.x,n.complete?0:.09,fe?1:1-Math.exp(-he*2)),N.rotation.z=n.complete?0:-.4,V.position.x=n.complete?.28:.335,V.position.y=n.complete?.6:.57,x.core.emissiveIntensity=n.complete?.8:.22,p.visible=G&&F.distanceTo(x.root.position)<12,p.quaternion.copy(Z.quaternion),p.position.y=x.root.position.y+.95+(fe||n.complete?0:Math.sin(performance.now()*.0025)*.06),p.scale.setScalar(n.greeted?.8:1),tt.forEach((_e,O)=>{_e.visible=G&&Math.abs(F.z-Fe[O].z)<8,_e.quaternion.copy(Z.quaternion)}),Ge.forEach((_e,O)=>{_e.visible=G&&n.zoneCount(O)===ot[O].count,_e.quaternion.copy(Z.quaternion)}),!G)return;ee=F.distanceTo(x.root.position)<2.8?-1:-2,ee===-2&&Fe.forEach((_e,O)=>{F.distanceTo(_e)<2.4&&(ee=O)}),ee===-2&&o.isNearby(F)&&(ee=-3),ue.hidden=ee===-2,We(ue,ee===-3?"[E] CONSULTAR BACKUP":ee===-1?"[E] HABLAR CON AUX":ee>=0?`[E] ${n.zoneCount(ee)===ot[ee].count?"ABRIR":"EXAMINAR"} ${ot[ee].title.toUpperCase()}`:"");const re=ot.findIndex(_e=>F.z<=_e.start+1&&F.z>=_e.end-1);We(ge,n.hasPda?re>=0?`${ot[re].title.toUpperCase()} ${n.zoneCount(re)}/${ot[re].count}`:"BUS DE DATOS / REGISTROS EN RECUPERACIÓN":"ACÉRCATE AL ROBOT CON EL SÍMBOLO !"),performance.now()>W&&(Ne.classList.remove("is-visible"),de="")}}}function Og(i,e,t,n,s){const r=matchMedia("(prefers-reduced-motion: reduce)"),o=new rt({color:3425619,metalness:.8,roughness:.3}),a=new rt({color:1055525,metalness:.65,roughness:.4}),c=wn(15115086,.55),l=new rt({color:10529712,metalness:.18,roughness:.48}),u=new rt({color:14066761,metalness:.85,roughness:.27}),d=new Mt;d.position.set(0,ln(-57.8)-.15,-57.8),i.add(d);function h(L){const He=new Map;for(const ne of L.children){if(!(ne instanceof we)||Array.isArray(ne.material))continue;const ye=He.get(ne.material)||[];ye.push(ne),He.set(ne.material,ye)}for(const[ne,ye]of He){const le=ye.map(Ee=>(Ee.updateMatrix(),Ee.geometry.clone().applyMatrix4(Ee.matrix))),qe=ai(le);if(qe){for(const Ee of ye)Ee.removeFromParent(),Ee.geometry.dispose();L.add(new we(qe,ne))}le.forEach(Ee=>Ee.dispose())}}for(const L of[-1,1]){K(d,[.7,4.6,4],[L*3.8,2,-1.4],l),K(d,[.12,3.7,3.7],[L*3.42,1.8,-1.5],o),K(d,[2.35,.65,4],[L*2.65,4.15,-1.4],l),K(d,[.7,.38,3.6],[L*1.15,4.03,-1.5],l),K(d,[.34,.2,.06],[L*3.78,.22,.64],c);for(const He of[.7,2.1,3.3])K(d,[.26,.48,1.4],[L*4.23,He,-1.3],o);K(d,[.035,2.7,2.8],[L*3.32,1.8,-1.9],a)}K(d,[8.3,.5,4.2],[0,-.28,-1.4],l),K(d,[1.65,.22,4],[0,4.6,-1.4],l),K(d,[6.6,.18,3.8],[0,-.01,-1.4],a);const f=new Gt({color:66052});K(d,[6.6,4.7,.18],[0,2.1,-3.75],f),K(d,[6.6,.15,2.9],[0,3.75,-1.9],a);const _=Array.from({length:8},(L,He)=>{const ne=(He-3.5)*.72,ye=K(d,[.18,.1,2.9],[ne,.14,-1.8],u);ye.rotation.x=-.12,K(d,[.18,.48,.12],[ne,.45,-3.2],u);const le=wn(7786495,0);return le.color.setHex(1652036),K(d,[.12,.035,1.9],[ne,.31,-2],le),le});for(const L of[-1,1]){for(let He=0;He<5;He++){const ne=-.65-He*.56;K(d,[.13,2.65,.09],[L*3.15,1.75,ne],o);const ye=K(d,[.09,.64,.14],[L*3.05,2.5,ne],u);ye.rotation.z=L*.2,K(d,[.12,.12,.25],[L*2.9,.42,ne],a)}K(d,[.16,.18,3],[L*2.9,.3,-1.8],o)}const x=document.createElement("canvas");x.width=8,x.height=256;const p=x.getContext("2d"),m=p.createLinearGradient(0,0,0,256);m.addColorStop(0,"rgba(1,2,4,0)"),m.addColorStop(.3,"rgba(1,2,4,.3)"),m.addColorStop(.7,"rgba(1,2,4,.92)"),m.addColorStop(1,"rgba(1,2,4,1)"),p.fillStyle=m,p.fillRect(0,0,8,256);const M=new Ds(x);M.colorSpace=Zt;const w=new Gt({map:M,transparent:!0,side:on,depthWrite:!1,toneMapped:!1});for(const L of[-1,1]){const He=new we(new gn(6.7,3.7),w);He.rotation.x=L*Math.PI/2,L===-1&&He.geometry.rotateZ(Math.PI),He.position.set(0,L===1?.03:3.73,-1.8),d.add(He);const ne=new we(new gn(3.7,3.7),w);ne.rotation.y=L*Math.PI/2,ne.geometry.rotateZ(L*Math.PI/2),ne.position.set(L*3.33,1.85,-1.8),d.add(ne)}const S=new Mt;S.name="core-isolation-flap",d.add(S),K(S,[6.6,3.7,.2],[0,1.8,-.25],o);for(let L=0;L<7;L++)K(S,[6.35,.045,.055],[0,.3+L*.47,-.12],a);K(S,[1.3,.28,.12],[0,.36,-.06],a),K(S,[.65,.055,.04],[0,.36,.02],c);const P=new Mt;d.add(P),K(P,[.85,.24,.42],[0,.04,.02],o),K(P,[.3,.07,.04],[0,.18,.25],c),h(S),h(P),h(d);const T=document.createElement("canvas");T.width=1024,T.height=256;const v=T.getContext("2d"),g=new Ds(T);g.colorSpace=Zt;const D=new we(new gn(6.4,1.6),new Gt({map:g}));D.position.set(0,5,.3),d.add(D);let E=n.complete?1:0,U=n.complete?8.5:0,C=-100,B=n.complete;function N(){n.complete&&!B&&(C=0,U=0),n.complete||(U=0,E=0),B=n.complete,v.fillStyle="#061018",v.fillRect(0,0,1024,256),v.fillStyle=n.complete?"#a7e4ff":"#ff7964",v.font='500 48px "IBM Plex Mono", monospace',v.fillText(_r(n.complete?"coreLinkRestored":"coreIsolatedTitle"),38,76),v.font='27px "IBM Plex Mono", monospace',v.fillText(_r("coreData",{count:n.count}),38,134),v.fillStyle="#87a6b8",v.font='22px "IBM Plex Mono", monospace',v.fillText(_r(n.complete?"coreReady":"coreRestore"),38,193),g.needsUpdate=!0,c.color.setHex(n.complete?7786495:15115086),c.emissive.copy(c.color),t.dataset.core=n.complete?"ready":"isolated"}n.subscribe(N),N(),window.addEventListener("languagechange",N);const V=new Mt;i.add(V),V.visible=!1;const Y=new Gt({color:11135743});for(const L of[-3,-1.5,0,1.5,3])K(V,[.07,.045,1.3],[L,0,0],Y);h(V);const I=document.createElement("button");I.className="core-interact",I.type="button",I.hidden=!0,t.append(I);const X=document.createElement("p");X.className="core-notice",X.setAttribute("role","status"),t.append(X);const H=matchMedia("(hover: none) and (pointer: coarse)"),z=document.createElement("dialog");z.className="ending-dialog",z.setAttribute("aria-label","Restauración del sistema y créditos"),z.innerHTML=`<div class="ending-veil"></div><button class="ending-skip" type="button">OMITIR TRANSICIÓN</button>
    <section class="ending-boot" hidden aria-labelledby="ending-title">
      <div class="console-meta"><span>SYS / RESUME_087</span><span>LOCAL CHANNEL / VERIFIED</span></div>
      <div class="title-block"><p class="eyebrow">PERSONAL PORTFOLIO / RECOVERED</p><h2 id="ending-title"><span class="title-line">HUGO /</span><span class="title-line">SOFTWARE DEVELOPER</span><span class="title-cursor" aria-hidden="true">_</span></h2></div>
      <div class="load-module"><div class="load-heading"><span class="phase">RESUMING PORTFOLIO DATA…</span><span class="percentage"><span data-percent>087</span><span class="percentage-sign">%</span></span></div><div class="progress-track" role="progressbar" aria-label="Carga del portfolio restaurado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="87"><div class="progress-fill"></div><div class="progress-grid" aria-hidden="true"></div></div></div>
      <div class="event-log"><p class="log-line">› Recovery verified / 20 packets restored</p><p class="log-line" data-boot-status role="status">› Resuming interrupted session…</p></div>
    </section>
    <section class="ending-signature" hidden aria-labelledby="ending-signature-title"><p class="eyebrow">END OF THE DATA BUS / SYSTEM RESTORED</p><span class="ending-heart" aria-hidden="true">♡</span><h2 id="ending-signature-title" tabindex="-1">Made with love<br>by <span>Hugo.</span></h2><p>Gracias por llegar hasta el final.</p><div class="ending-links"><button type="button" data-return>← VOLVER AL MUNDO</button><a href="#archivo/proyectos" data-archive>VER ARCHIVO ↗</a></div><small>20 / 20 PACKETS · CONNECTION COMPLETE</small></section>
    <p class="sr-only" role="status" data-announcement></p>`,e.append(z);const q=document.createElement("canvas");q.className="ending-cursor-particles",q.setAttribute("aria-hidden","true"),z.append(q),z.dataset.state="entered",lu(q,z,{cursorOnly:!0});const oe=z.querySelector(".ending-boot"),xe=z.querySelector(".ending-signature"),$=z.querySelector(".ending-skip"),ve=z.querySelector(".ending-veil");let te="idle",Ue=0,Me=!1,Fe=0,tt=0;const Ge=new A,ee=new A,Se=new A,W=new A(0,ln(-60.4)+.48,-60.4),de=new A,me=new A,pe=L=>L*L*(3-2*L);function ue(){if(!(!Me||te!=="idle")){if(!n.complete){X.textContent=`CORE AISLADO / Recupera todos los paquetes para restablecer el enlace (${n.count}/20).`,Fe=performance.now()+4500;return}if(E<.99){X.textContent="ENLACE VERIFICADO / Liberando el seguro del conector…",Fe=performance.now()+2500;return}te="travel",Ue=0,I.hidden=!0,X.textContent="",t.dataset.ending="true",e.dataset.ending="true",Ce=!1,oe.hidden=xe.hidden=!0,$.hidden=!1,ve.style.opacity="0",z.showModal(),$.focus({preventScroll:!0}),z.querySelector("[data-announcement]").textContent="Enlace restablecido. Reanudando el sistema.",s("start")}}let Ce=!1;const ge=L=>new Promise(He=>window.setTimeout(He,L));async function Ne(){if(te!=="travel")return;te="loading";const L=++tt;z.dataset.state="restored",s("screen"),$.hidden=!0,ve.style.opacity="1",oe.hidden=!1,z.style.setProperty("--progress","87%"),z.querySelector("[data-percent]").textContent="087",z.querySelector(".progress-track").setAttribute("aria-valuenow","87"),z.querySelector(".phase").textContent="RESUMING PORTFOLIO DATA…",z.querySelector("[data-boot-status]").textContent="› Resuming interrupted session…",oe.classList.remove("is-finished"),z.classList.remove("is-revealing-signature");for(let He=88;He<=100;He++){if(await ge(r.matches?45:180),L!==tt)return;z.style.setProperty("--progress",`${He}%`),z.querySelector("[data-percent]").textContent=String(He).padStart(3,"0"),z.querySelector(".progress-track").setAttribute("aria-valuenow",String(He))}if(z.querySelector(".phase").textContent="SYSTEM RESTORED",z.querySelector("[data-boot-status]").textContent="› Todos los registros recuperados. Conexión completada.",z.querySelector("[data-announcement]").textContent="Carga completada al cien por cien. Sistema restaurado.",await ge(r.matches?350:1200),oe.classList.add("is-finished"),r.matches)oe.hidden=!0;else{const He=oe.animate([{opacity:1,transform:"translateY(0)",filter:"blur(0)"},{opacity:0,transform:"translateY(-10px)",filter:"blur(3px)"}],{duration:1100,easing:"cubic-bezier(.4,0,.2,1)",fill:"forwards"});await He.finished,oe.hidden=!0,He.cancel(),await ge(120)}L===tt&&(xe.hidden=!1,z.classList.add("is-revealing-signature"),te="signature",xe.querySelector("h2").focus({preventScroll:!0}))}async function Ie(L=!1){if(te==="signature"){if(tt++,te="leaving",r.matches?xe.hidden=!0:(await We(xe,500),xe.hidden=!0,xe.style.removeProperty("opacity")),delete t.dataset.ending,delete e.dataset.ending,s("return"),ac(),L){location.hash="archivo/proyectos";const He=performance.now()+2500;for(;e.dataset.view!=="archivo"&&performance.now()<He;)await ge(16);await ge(r.matches?0:350)}else await new Promise(He=>requestAnimationFrame(()=>requestAnimationFrame(()=>He())));r.matches?z.close():(await We(z,850),z.close(),z.style.removeProperty("opacity")),te="idle",z.dataset.state="entered",e.querySelector(L?".reading-hero h1":".world-viewport canvas")?.focus({preventScroll:!0})}}function We(L,He){return new Promise(ne=>{const ye=performance.now();function le(){const qe=Math.min((performance.now()-ye)/He,1);L.style.opacity=String(1-pe(qe)),qe<1?window.setTimeout(le,16):ne()}le()})}return I.addEventListener("click",ue),$.addEventListener("click",()=>{Ne()}),z.querySelector("[data-return]").addEventListener("click",()=>{Ie()}),z.querySelector("[data-archive]").addEventListener("click",L=>{L.preventDefault(),Ie(!0)}),z.addEventListener("cancel",L=>{L.preventDefault(),te==="signature"?Ie():te==="travel"&&Ne()}),window.addEventListener("keydown",L=>{L.code!=="KeyE"||L.repeat||L.ctrlKey||L.metaKey||L.altKey||!Me||e.dataset.view!=="explorar"||z.open||e.querySelector("dialog[open]")||(L.preventDefault(),ue())}),{canOccupy(L){return L>(n.complete&&E>=.99?-59.9:-56.95)},update(L,He,ne,ye,le,qe){n.complete&&(U=Math.min(U+le,8.5));const Ee=Rt.clamp((U-4.4)/4,0,1);E=r.matches?Number(n.complete):pe(Ee),S.position.y=E*3.7,S.scale.y=Math.max(.001,1-E),S.visible=E<.999,S.position.z=-E*.65,P.position.y=-.22*(r.matches?Number(n.complete):Rt.clamp((U-3.8)/.6,0,1)),_.forEach((F,Z)=>{const G=n.complete&&(r.matches||E>.3+Z*.075);F.color.setHex(G?7786495:1652036),F.emissiveIntensity=G?.65:0}),t.dataset.coreOpening=E.toFixed(3),C>=0&&C<3.8&&!r.matches?(C+=le,V.visible=!0,V.position.z=Rt.lerp(7,-60,Math.min(C/3.8,1)),V.position.y=ln(V.position.z)+.14):V.visible=!1,Me=ye&&L.z<-54.7&&te==="idle",I.hidden=!Me;let ke=Tr(n.complete?E<.99?"LIBERANDO CONECTOR…":"[E] REANUDAR EL SISTEMA":`[E] EXAMINAR CORE · ${n.count}/20`);if(H.matches&&(ke=ke.replace(/^\[E\]\s*/,"")),I.textContent!==ke&&(I.textContent=ke),X.textContent&&performance.now()>Fe&&(X.textContent=""),te!=="travel")return;Ce||(Ge.copy(L),ee.copy(He.position),Ce=!0),Ue+=le;const R=r.matches?1:Math.min(Ue/4.2,1),y=L.z;L.lerpVectors(Ge,W,pe(R)),L.y=ln(L.z)+.48,ne.position.copy(L),ne.rotation.set(0,Math.PI,0),r.matches||qe(Math.abs(L.z-y)),de.set(L.x,L.y+1.1,L.z+4.5-R*4.8),He.position.lerpVectors(ee,de,pe(Math.min(R*2,1))),Se.copy(L).add(me.set(0,.35,-1.5*R)),He.lookAt(Se),ve.style.opacity=String(pe(Rt.clamp((R-.65)/.35,0,1))),R===1&&Ne()}}}function Bg(i,e,t,n,s,r,o){const a=matchMedia("(prefers-reduced-motion: reduce)"),c=new rt({color:1781821,metalness:.55,roughness:.4}),l=new rt({color:5333619,metalness:.8,roughness:.3}),u=new rt({color:1055009,metalness:.45,roughness:.4}),d=new rt({color:13476454,metalness:.7,roughness:.4}),h=new rt({color:5406336,metalness:.65,roughness:.45}),f=new hn(new yt(.68,.04,.035),new Gt({color:16777215,toneMapped:!1}),ot.length*12);f.name="memory-chip-indicators",i.add(f);const _=new wt,x=new Qe,p=new Mt;i.add(p);const m=ot.map((ee,Se)=>{const W=new Mt;W.name=`memory-board-${ee.id}`,W.position.set(Math.sign(ee.x)*11.5,-2.5,(ee.start+ee.end)/2),W.rotation.y=Math.sign(ee.x)*-.2,p.add(W),K(W,[6.4,7.6,.55],[0,3.8,0],c),K(W,[6.8,.25,1.15],[0,.1,0],l),K(W,[6.4,.07,.1],[0,7.5,.32],l);const de=n.zoneCount(Se)===ee.count,me=vi(`${ee.code} / ${ee.title.toUpperCase()}`,de?"#8ecfe9":"#ff4935",5.8);me.position.set(0,6.6,.4),W.add(me);for(let ue=0;ue<18;ue++)K(W,[.15,.55,.12],[-2.9+ue*.34,.55,.35],d);for(const ue of[-1,1]){const Ce=ue*.286;for(let ge=0;ge<10;ge++){const Ne=-2.85+ge*.62,Ie=1.05+ge%3*.13,We=2.05+ge%4*1.12,L=(ge%2?1:-1)*.2;K(W,[.018,Ie-.65,.012],[Ne,(.65+Ie)/2,Ce],h),K(W,[.22,.018,.012],[Ne+L/2,Ie,Ce],h),K(W,[.018,We-Ie,.012],[Ne+L,(We+Ie)/2,Ce],h),K(W,[.065,.065,.018],[Ne+L,We,Ce],d)}for(const ge of[-1,1]){K(W,[.025,6.7,.015],[ge*3.02,3.9,Ce],h);for(const Ne of[1.2,2.85,4.4,5.8,7.2])K(W,[.12,.12,.035],[ge*3.02,Ne,Ce],l),K(W,[.052,.052,.042],[ge*3.02,Ne,Ce+ue*.018],u)}for(let ge=0;ge<8;ge++){const Ne=-2.65+ge*.75;K(W,[.23,.12,.08],[Ne,1.05,ue*.33],u);for(const Ie of[-1,1])K(W,[.045,.13,.085],[Ne+Ie*.12,1.05,ue*.33],l)}}K(W,[1.25,1.25,.16],[.65,4.2,-.35],u);for(let ue=0;ue<7;ue++)for(const Ce of[-1,1])K(W,[.07,.075,.06],[.65+Ce*.68,3.7+ue*.16,-.34],l),K(W,[.075,.07,.06],[.15+ue*.16,4.2+Ce*.68,-.34],l);for(let ue=0;ue<6;ue++)K(W,[.12,1.5,.18],[-2.2+ue*.23,4.25,-.39],l);for(let ue=0;ue<6;ue++){const Ce=.1+ue%3*.63,ge=2.15+Math.floor(ue/3)*.47;K(W,[.35,.18,.13],[Ce,ge,-.34],d);for(const Ne of[-1,1])K(W,[.06,.2,.14],[Ce+Ne*.18,ge,-.35],l)}for(let ue=0;ue<3;ue++){const Ce=-2+ue*1.2,ge=.6+ue%2*.25,Ne=new we(new At(.22,.22,ge,10),u);Ne.position.set(Ce,ge/2+.18,-1),W.add(Ne);const Ie=new we(new At(.2,.2,.035,10),l);Ie.position.set(Ce,ge+.2,-1),W.add(Ie),K(W,[.27,.012,.02],[Ce,ge+.22,-1],u),K(W,[.02,.012,.27],[Ce,ge+.22,-1],u);for(const We of[-1,1])K(W,[.035,.2,.035],[Ce+We*.11,.13,-1],d)}const pe=Array.from({length:12},(ue,Ce)=>{const ge=-2.19+Ce%4*1.46,Ne=5.2-Math.floor(Ce/4)*1.55;K(W,[1.08,1.05,.2],[ge,Ne,.39],u);for(const Ie of[-1,1])for(let We=0;We<4;We++)K(W,[.09,.055,.12],[ge+Ie*.58,Ne-.3+We*.2,.4],l);return{instance:Se*12+Ce,local:new A(ge,Ne,.55),world:new A,color:-1}});return{group:W,title:me,titleRestored:de,indicators:pe,restoredAt:de?-100:1/0}});p.updateMatrixWorld(!0),m.forEach(ee=>ee.indicators.forEach(Se=>{ee.group.localToWorld(Se.world.copy(Se.local)),_.position.copy(Se.local),_.position.y-=.27,_.position.z=.51,_.updateMatrix(),f.setMatrixAt(Se.instance,new mt().multiplyMatrices(ee.group.matrixWorld,_.matrix)),f.setColorAt(Se.instance,x.setHex(16730421))}));const M=new Map,w=[];p.traverse(ee=>{if(!(ee instanceof we)||!(ee.material instanceof rt))return;const Se=M.get(ee.material)||[];Se.push(ee.geometry.clone().applyMatrix4(ee.matrixWorld)),M.set(ee.material,Se),w.push(ee)}),w.forEach(ee=>{ee.removeFromParent(),ee.geometry.dispose()});for(const[ee,Se]of M){const W=ai(Se);W&&i.add(new we(W,ee)),Se.forEach(de=>de.dispose())}const S=document.createElement("section");S.className="memory-explorer",S.hidden=!0,S.setAttribute("aria-label","Explorador de memoria"),S.innerHTML='<header><div><small>MEMORY / READ ONLY</small><h2 tabindex="-1"></h2><p><span class="memory-pointer-hint">Selecciona un registro azul.</span><span class="memory-touch-hint">Toca para abrir. Mantén pulsado para ver la etiqueta.</span></p></div><button type="button" data-back>← VOLVER AL BUS <kbd>ESC</kbd></button></header><div class="memory-chip-targets"></div><p class="memory-selection" aria-live="polite"></p>',e.append(S);const P=S.querySelector(".memory-chip-targets"),T=document.createElement("dialog");T.className="recovery-dialog memory-dialog",T.setAttribute("aria-label","Registro de memoria"),e.append(T);let v="idle",g=-1,D=0,E=0,U=-1,C=s.near,B=s.near,N=s.near;const V=new A,Y=new Ht,I=new A,X=new Ht,H=new A,z=new Ht,q=new rn,oe=new A;function xe(){const ee=m[g],Se=ee.group.localToWorld(new A(0,3.8,.4)),W=Math.max(8.8,7.4/(2*Math.tan(Rt.degToRad(s.fov/2))*s.aspect));N=W-.9,H.copy(ee.group.localToWorld(new A(0,3.8,W+.4))),q.position.copy(H),q.lookAt(Se),z.copy(q.quaternion)}function $(ee){U=ee,P.querySelectorAll("button").forEach(Se=>Se.classList.toggle("is-active",Number(Se.dataset.chip)===ee)),S.querySelector(".memory-selection").textContent=ee<0?"":Hs[ot[g].id][ee].title}let ve=!1,te=()=>{};function Ue(){if(!T.open)return;const ee=U;T.close(),o(!1),ve?P.querySelector(`[data-chip="${ee}"]`)?.focus({preventScroll:!0}):(S.querySelector("h2").focus({preventScroll:!0}),$(-1))}function Me(ee){if(v!=="browse")return;const Se=Hs[ot[g].id][ee];$(ee),T.innerHTML=`<div class="recovery-dialog-bar"><span>MEMORY / ${Za(ot[g].code)} / RECORD ${String(ee+1).padStart(2,"0")}</span><button type="button" data-close>VOLVER A LA TARJETA ×</button></div><div class="pda-body"><div class="pda-content">${cu(Se)}</div><div class="pda-footer"><span>RECOVERY OS / MEMORY READER</span><span>RECORD VERIFIED ●</span></div></div>`,T.querySelector("[data-close]").addEventListener("click",Ue),o(!0),T.showModal(),T.scrollTop=0}function Fe(ee){v!=="idle"||n.zoneCount(ee)!==ot[ee].count||(te(),g=ee,v="enter",E=0,U=-1,S.querySelector(".memory-selection").textContent="",V.copy(s.position),Y.copy(s.quaternion),C=B=s.near,I.copy(s.position),X.copy(s.quaternion),xe(),S.hidden=!1,S.dataset.phase=v,S.querySelector("h2").textContent=ot[ee].title,P.replaceChildren(),Hs[ot[ee].id].forEach((Se,W)=>{const de=document.createElement("button");de.type="button",de.dataset.chip=String(W),de.setAttribute("aria-label",`${Se.title}${Se.demo?" · DEMO":""}`),de.innerHTML=`<span>${String(W+1).padStart(2,"0")}</span><small>${Za(Se.title)}</small>`;let me,pe,ue=0,Ce=0,ge=!1;const Ne=()=>{window.clearTimeout(me),pe=void 0,U===W&&$(-1)};de.addEventListener("click",Ie=>{if(ge&&Ie.detail!==0){Ie.preventDefault(),ge=!1;return}ge=!1,ve=Ie.detail===0,Me(W)}),de.addEventListener("pointerenter",Ie=>{Ie.pointerType==="mouse"&&$(W)}),de.addEventListener("pointerdown",Ie=>{Ie.pointerType==="mouse"||!Ie.isPrimary||v!=="browse"||(te(),te=Ne,ge=!1,pe=Ie.pointerId,ue=Ie.clientX,Ce=Ie.clientY,de.setPointerCapture(Ie.pointerId),me=window.setTimeout(()=>{pe===void 0||v!=="browse"||(ge=!0,$(W))},350))}),de.addEventListener("pointermove",Ie=>{Ie.pointerId===pe&&Math.hypot(Ie.clientX-ue,Ie.clientY-Ce)>12&&(ge=!0,Ne())});for(const Ie of["pointerup","pointercancel","lostpointercapture"])de.addEventListener(Ie,We=>{We.pointerId===pe&&Ne()});de.addEventListener("contextmenu",Ie=>{(pe!==void 0||ge)&&Ie.preventDefault()}),de.addEventListener("focus",()=>{de.matches(":focus-visible")&&$(W)}),de.addEventListener("blur",()=>{U===W&&$(-1)}),de.addEventListener("pointerleave",()=>{U===W&&$(-1)}),P.append(de)}),r(!0),t.dataset.memory="true")}function tt(){te(),v="idle",S.hidden=!0,delete t.dataset.memory,s.position.copy(V),s.quaternion.copy(Y),r(!1),s.near=C,s.updateProjectionMatrix()}function Ge(){if(te(),T.open){Ue();return}v!=="browse"&&v!=="enter"||(v="return",E=0,S.dataset.phase=v,I.copy(s.position),X.copy(s.quaternion),B=s.near,N=C,H.copy(V),z.copy(Y))}return S.querySelector("[data-back]").addEventListener("click",Ge),window.addEventListener("blur",()=>te()),document.addEventListener("visibilitychange",()=>{document.hidden&&te()}),T.addEventListener("cancel",ee=>{ee.preventDefault(),Ue()}),window.addEventListener("keydown",ee=>{ee.key==="Escape"&&v!=="idle"&&!T.open&&(ee.preventDefault(),Ge())}),window.addEventListener("resize",()=>{(v==="enter"||v==="browse")&&xe()}),{open:Fe,cancel(){v!=="idle"&&(Ue(),tt())},update(ee){if(D+=ee,m.forEach((Se,W)=>{const de=n.zoneCount(W)===ot[W].count;if(Se.titleRestored!==de){const me=vi(`${ot[W].code} / ${ot[W].title.toUpperCase()}`,de?"#8ecfe9":"#ff4935",5.8),pe=Se.title.material;pe.map?.dispose(),pe.map=me.material.map,pe.needsUpdate=!0,me.geometry.dispose(),me.material.dispose(),Se.titleRestored=de}de&&Se.restoredAt===1/0&&(Se.restoredAt=D),de||(Se.restoredAt=1/0),Se.indicators.forEach((me,pe)=>{const ue=de&&pe<Hs[ot[W].id].length&&(a.matches||D-Se.restoredAt>=pe*.15),Ce=de?ue?g===W&&U===pe&&v!=="idle"?12840959:4832255:1319983:16730421;me.color!==Ce&&(me.color=Ce,f.setColorAt(me.instance,x.setHex(Ce)),f.instanceColor.needsUpdate=!0)})}),v!=="idle"){if(v==="enter"||v==="return"){E+=ee;const Se=a.matches?1:Math.min(E/1.7,1),W=Se*Se*(3-2*Se);if(s.position.lerpVectors(I,H,W),s.quaternion.slerpQuaternions(X,z,W),s.near=Rt.lerp(B,N,W),s.updateProjectionMatrix(),Se===1){if(v==="return"){tt();return}v="browse",S.dataset.phase=v,P.querySelector("button")?.focus({preventScroll:!0})}}else s.position.copy(H),s.quaternion.copy(z),s.near=N,s.updateProjectionMatrix();s.updateMatrixWorld(),P.querySelectorAll("button").forEach((Se,W)=>{oe.copy(m[g].indicators[W].world).project(s),Se.style.left=`${(oe.x+1)*innerWidth/2}px`,Se.style.top=`${(1-oe.y)*innerHeight/2}px`})}}}}function zg(i,e,t,n,s,r){const o=matchMedia("(prefers-reduced-motion: reduce)"),a=new Mt;a.name="legacy-tape-backup",a.position.set(-11.5,-2.5,5),a.rotation.y=Math.PI/2,i.add(a);const c=new rt({color:2502969,metalness:.65,roughness:.52}),l=new rt({color:8622746,metalness:.85,roughness:.34}),u=new rt({color:791062,metalness:.35,roughness:.55}),d=new rt({color:10326907,metalness:.25,roughness:.8}),h=new rt({color:2169108,metalness:.25,roughness:.48,side:on}),f=new rt({color:16740676,emissive:16731424,emissiveIntensity:1.4,roughness:.3}),_=new Gt({color:2569018,toneMapped:!1}),x=new A(-4.35,qi(5,.3)+.34,5),p=new Mt;p.name="backup-access-terminal",i.add(p);const m=x.y-.12,M=new we(new At(.12,.17,m+1.56,12),l);M.position.set(x.x,(m-1.56)/2,x.z),p.add(M);const w=new we(new At(.29,.33,.1,16),l);w.position.set(x.x,-1.51,x.z),p.add(w);const S=new we(new At(.19,.19,.09,12),c);S.position.set(x.x,m-.08,x.z),p.add(S);const P=new Mt;P.position.copy(x),P.rotation.set(-.35,Math.PI/2-.3,0,"YXZ"),p.add(P);const T=new we(new Nn(.72,.44,.3,2,.065),c);P.add(T),K(P,[.53,.22,.02],[0,.035,.16],u),K(P,[.37,.025,.025],[0,-.13,.16],l);const v=new Gt({color:2569018,toneMapped:!1});for(const ne of[-1,1]){const ye=new we(new Fs(.044,.058,16),v);ye.position.set(ne*.105,.055,.175),P.add(ye)}K(P,[.21,.013,.008],[0,.005,.175],v);const g=new Mt,D=new Gt({color:9359337,toneMapped:!1});g.add(new we(new Fs(.23,.27,24),D));const E=new we(new yt(.045,.19,.025),D);E.position.y=.04;const U=new we(new yt(.045,.045,.025),D);U.position.y=-.115,g.add(E,U),g.position.copy(x).add(new A(0,.95,0)),i.add(g);const C=new Mt;a.add(C);const B=new we(new Nn(5.8,7.2,1.65,2,.14),c);B.position.y=3.6,C.add(B),K(C,[6.2,.24,2.2],[0,.12,0],l),K(C,[5.35,5.45,.12],[0,4.05,.86],u),K(C,[5.05,3.65,.1],[0,4.6,.95],c);for(const ne of[-1,1]){K(C,[.16,6.65,.15],[ne*2.64,3.65,.94],l),K(C,[.13,1.05,.35],[ne*2.53,3.1,1.06],u);for(const ye of[.45,2.1,5.8,6.85]){const le=new we(new At(.065,.065,.04,8),l);le.rotation.x=Math.PI/2,le.position.set(ne*2.65,ye,1.04),C.add(le),K(C,[.075,.012,.008],[ne*2.65,ye,1.065],u)}for(let ye=0;ye<11;ye++)K(C,[.48,.055,.025],[ne*2,.65+ye*.09,.852],u);K(C,[.75,.2,1.5],[ne*2.1,-.08,0],u)}const N=[];for(const ne of[-1,1]){const ye=new Mt;ye.position.set(ne*1.28,5.08,1.08),a.add(ye),N.push(ye);const le=new we(new At(ne<0?.94:.74,ne<0?.94:.74,.24,48),h);le.rotation.x=Math.PI/2,ye.add(le);for(const ke of[-1,1]){const R=new we(new mn(1.04,.045,6,48),l);R.position.z=ke*.17,ye.add(R);const y=new we(new At(.26,.26,.07,20),l);y.rotation.x=Math.PI/2,y.position.z=ke*.18,ye.add(y);for(let F=0;F<3;F++){const Z=K(ye,[.14,.85,.035],[0,0,ke*.17],l),G=F*Math.PI*2/3;Z.position.x=Math.sin(G)*.6,Z.position.y=Math.cos(G)*.6,Z.rotation.z=-G}for(let F=0;F<5;F++){const Z=new we(new mn(.4+F*(ne<0?.1:.075),.007,3,48),d);Z.position.z=ke*.125,ye.add(Z)}}const qe=new we(new At(.1,.1,.48,12),u);qe.rotation.x=Math.PI/2,ye.add(qe);const Ee=new we(new At(.12,.12,.35,16),l);Ee.rotation.x=Math.PI/2,Ee.position.set(ne*1.45,3.45,1.14),C.add(Ee)}const V=[new A(-2.18,4.8,1.12),new A(-1.45,3.45,1.12),new A(1.45,3.45,1.12),new A(1.98,4.72,1.12)];for(let ne=1;ne<V.length;ne++){const ye=V[ne-1],le=V[ne],qe=K(C,[.075,ye.distanceTo(le),.1],[0,0,0],h);qe.position.copy(ye).lerp(le,.5),qe.quaternion.setFromUnitVectors(new A(0,1,0),le.clone().sub(ye).normalize())}K(C,[1.3,.38,.38],[0,3.45,1.15],l),K(C,[1.08,.13,.05],[0,3.48,1.36],u),K(C,[1.18,.055,.2],[0,3.36,1.37],l),K(C,[4.6,1.1,.3],[0,2.3,1],l),K(C,[2.65,.73,.04],[-.64,2.3,1.17],u);const Y=vi("ÚLTIMO BACKUP","#8ecfe9",2.45,"");Y.position.set(-.65,2.33,1.2),a.add(Y),K(C,[.62,.45,.15],[1.55,2.3,1.26],f),K(C,[.3,.025,.02],[1.55,2.3,1.345],u),K(C,[.09,.09,.04],[.91,2.3,1.2],_);const I=vi("ARCHIVO / BACKUP","#b5c5ca",4.1,"");I.position.set(0,6.65,1.12),a.add(I);const X=vi("MAGNETIC STORAGE / REV. 01","#baab8f",3.1,"");X.position.set(0,1.02,.88),a.add(X),K(C,[1.15,.37,.02],[-1.6,1.5,.88],d);for(let ne=0;ne<22;ne++)K(C,[.013+ne%3*.008,.24,.008],[-2.1+ne*.045,1.5,.895],u);for(let ne=0;ne<15;ne++){const ye=K(C,[.08+ne%4*.045,.012,.009],[-2.4+ne*.73%4.8,.35+ne*1.37%6.4,.837],l);ye.rotation.z=-.3+ne%3*.23}for(let ne=0;ne<5;ne++)K(C,[.035,.1,.035],[.95+ne*.12,1.48,.87],f);a.updateMatrixWorld(!0);for(const ne of[c,l,u,d,h,f,_]){const ye=[],le=new mt().copy(a.matrixWorld).invert();if(C.traverse(qe=>{if(qe instanceof we&&qe.material===ne){const Ee=qe.geometry.index?qe.geometry.toNonIndexed():qe.geometry.clone();ye.push(Ee.applyMatrix4(new mt().multiplyMatrices(le,qe.matrixWorld)))}}),ye.length){const qe=ai(ye);qe&&a.add(new we(qe,ne)),ye.forEach(Ee=>Ee.dispose())}}C.traverse(ne=>{ne instanceof we&&ne.geometry.dispose()}),C.removeFromParent();for(const ne of N){const ye=[...ne.children];for(const le of[l,u,h,d]){const qe=ye.filter(Ee=>Ee.material===le).map(Ee=>(Ee.updateMatrix(),(Ee.geometry.index?Ee.geometry.toNonIndexed():Ee.geometry.clone()).applyMatrix4(Ee.matrix)));if(qe.length){const Ee=ai(qe);Ee&&ne.add(new we(Ee,le)),qe.forEach(ke=>ke.dispose())}}ye.forEach(le=>{le.geometry.dispose(),le.removeFromParent()})}const H=new gn(1,1,1,48),z={value:1},q=new Gt({color:462873,side:on,toneMapped:!1,fog:!1,transparent:!0,depthWrite:!1});q.onBeforeCompile=ne=>{ne.uniforms.tapeDetail=z,ne.vertexShader=ne.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vTapeUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vTapeUv = uv;`),ne.fragmentShader=ne.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vTapeUv;
uniform float tapeDetail;`).replace("#include <color_fragment>",`#include <color_fragment>
        // One large film frame across the strip, with simple sprocket holes.
        float frameY = fract(vTapeUv.y * 7.0);
        float frame = step(0.16, vTapeUv.x) * (1.0 - step(0.84, vTapeUv.x))
          * step(0.055, frameY) * (1.0 - step(0.945, frameY));
        float edgeX = min(vTapeUv.x, 1.0 - vTapeUv.x);
        float holeY = fract(vTapeUv.y * 28.0);
        float hole = step(0.035, edgeX) * (1.0 - step(0.105, edgeX))
          * step(0.22, holeY) * (1.0 - step(0.78, holeY));
        diffuseColor.rgb += tapeDetail * frame * vec3(0.018, 0.033, 0.046);
        diffuseColor.a *= mix(1.0, mix(0.97, 0.84, frame) * (1.0 - hole), tapeDetail);
      `)};const oe=new we(H,q);oe.visible=!1,oe.frustumCulled=!1,a.add(oe);const xe=document.createElement("section");xe.hidden=!0,xe.className="backup-console",xe.setAttribute("aria-labelledby","backup-title"),xe.innerHTML='<p class="backup-code">TAPE DRIVE / LOCAL ARCHIVE_01</p><h2 id="backup-title">Última copia disponible.</h2><p>Consulta el portfolio en modo texto. El progreso del bus quedará guardado.</p><div class="backup-console-actions"><button type="button" data-cancel>VOLVER AL BUS</button></div><p class="backup-status" role="status" aria-live="polite"></p>',e.append(xe);const $=document.createElement("button");$.type="button",$.className="backup-physical-button",$.setAttribute("aria-label","CARGAR ÚLTIMA COPIA ↗"),$.title="CARGAR ÚLTIMA COPIA ↗",$.hidden=!0,e.append($);const ve=document.createElement("div");ve.className="backup-tape-curtain",ve.setAttribute("aria-hidden","true"),document.body.append(ve);let te=!1,Ue=!1,Me=0,Fe=0,tt=7.5,Ge;const ee=new A,Se=new Ht,W=new A,de=new A,me=new Ht;let pe="idle",ue=s.near,Ce=s.near,ge=s.near;const Ne=new A,Ie=new Ht,We=new A;function L(){Ue||!te||pe==="return"||(xe.hidden=!0,$.hidden=!0,pe="return",Me=0,Ne.copy(s.position),Ie.copy(s.quaternion),Ce=s.near,W.copy(ee),me.copy(Se),ge=ue)}xe.querySelector("[data-cancel]").addEventListener("click",L),window.addEventListener("keydown",ne=>{ne.key==="Escape"&&te&&(ne.preventDefault(),L())});async function He(){if(Ue||pe!=="browse")return;Ue=!0,Fe=0,z.value=1,xe.querySelectorAll("button").forEach(le=>{le.disabled=!0}),$.hidden=!0,xe.querySelector(".backup-status").textContent="Leyendo cinta…",o.matches||await new Promise(le=>{Ge=le}),xe.hidden=!0,ve.classList.add("is-active");const ne=ve.animate([{opacity:0},{opacity:1}],{duration:o.matches?160:120,fill:"forwards"});await ne.finished,ac(),location.hash="inicio",await new Promise(le=>setTimeout(le,400)),te=!1,pe="idle",oe.visible=!1,s.near=ue,s.updateProjectionMatrix(),s.position.copy(ee),s.quaternion.copy(Se),r(!1),ne.cancel();const ye=ve.animate([{transform:"translateY(0)",opacity:1},{transform:"translateY(0)",opacity:0}],{duration:o.matches?120:550,fill:"forwards"});await ye.finished,ve.classList.remove("is-active"),e.classList.remove("is-backup-covering"),ye.cancel(),Ue=!1,xe.querySelectorAll("button").forEach(le=>{le.disabled=!1}),xe.querySelector(".backup-status").textContent=""}return $.addEventListener("click",()=>{He()}),{isNearby:ne=>n.accessUnlocked&&ne.distanceTo(x)<2.4,open(){if(te||!n.accessUnlocked)return;te=!0,Me=0,pe="enter",ee.copy(s.position),Se.copy(s.quaternion),Ne.copy(s.position),Ie.copy(s.quaternion),ue=Ce=s.near,a.updateMatrixWorld(!0),tt=Math.max(7.5,3.3/(Math.tan(Rt.degToRad(s.fov/2))*s.aspect)+1),W.copy(a.localToWorld(new A(0,3.8,tt))),de.copy(a.localToWorld(new A(0,3.8,1))),ge=tt-1.65;const ne=new rn;ne.position.copy(W),ne.lookAt(de),me.copy(ne.quaternion),r(!0),xe.hidden=!0},update(ne){if(_.color.setHex(n.accessUnlocked?9359337:2569018),v.color.copy(_.color),g.visible=!te&&n.accessUnlocked,g.quaternion.copy(s.quaternion),g.position.y=x.y+.95+(o.matches?0:Math.sin(performance.now()*.0025)*.06),t.dataset.backup=te?Ue?"reading":"console":n.accessUnlocked?"ready":"locked",!te)return;if(pe==="enter"||pe==="return"){Me+=ne;const Z=o.matches?1:Math.min(Me/1.7,1),G=Z*Z*(3-2*Z);if(s.position.lerpVectors(Ne,W,G),s.quaternion.slerpQuaternions(Ie,me,G),s.near=Rt.lerp(Ce,ge,G),s.updateProjectionMatrix(),Z===1){if(pe==="return"){te=!1,pe="idle",r(!1);return}pe="browse",xe.hidden=!1,$.hidden=!1,$.focus({preventScroll:!0})}}else s.position.copy(W),s.quaternion.copy(me);if(s.updateMatrixWorld(),We.copy(a.localToWorld(new A(1.55,2.3,1.35))).project(s),$.style.left=`${(We.x+1)*innerWidth/2}px`,$.style.top=`${(1-We.y)*innerHeight/2}px`,f.emissiveIntensity=n.accessUnlocked?o.matches?1.4:1.3+Math.sin(performance.now()*.003)*.3:.2,!Ue||o.matches)return;Fe+=ne;const ye=Math.min(1,Fe/1.2);s.near=Rt.lerp(ge,.035,ye*ye*(3-2*ye)),s.updateProjectionMatrix(),N.forEach((Z,G)=>{Z.rotation.z-=ne*(G?1.8:1.3)}),oe.visible=!0;const le=H.attributes.position,qe=Math.min(1,Fe/6.2),Ee=qe*qe*(3-2*qe);z.value=1-Rt.smoothstep(Ee,.68,.89);const ke=Rt.smoothstep(Ee,.45,1);Ee>.65&&(xe.hidden=!0,e.classList.add("is-backup-covering"));const R=Math.tan(Rt.degToRad(s.fov/2))*(.84+.7*Rt.smoothstep(Ee,.65,.86)),y=4*(.32+R*(tt-1.4)),F=y-R*(tt-.6);for(let Z=0;Z<=48;Z++){const he=Z/48*Ee,fe=1.4+he*(tt-.6),ie=.8+44*ke*he*he,re=3.48+F*he-y*he*he,_e=Math.sin(he*Math.PI/2)*.025;for(let O=0;O<2;O++){const ce=(O?1:-1)*ie/2;le.setXYZ(Z*2+O,ce,re+ce*_e,fe)}}if(le.needsUpdate=!0,H.computeVertexNormals(),qe>=.8&&Ge){const Z=Ge;Ge=void 0,requestAnimationFrame(()=>requestAnimationFrame(Z))}}}}async function Hg(i){const e=document.createElement("section");e.className="world-layer",e.hidden=!0,e.setAttribute("aria-label","Interior del ordenador. Explora el bus de datos con WASD o las flechas."),e.innerHTML=`<div class="world-viewport"></div>
    <div class="world-heading"><h2 tabindex="-1">THE DATA BUS<span>_</span></h2><p>Recupera los paquetes. Restaura la información.</p></div>
    <button class="skip-transit" type="button">OMITIR <kbd>ESC</kbd></button>
    <div class="world-bottom"><div class="movement-hint"><span class="keyboard-hint"><kbd>W A S D</kbd> <span>MOVER</span> &nbsp; <kbd>ESPACIO</kbd> <span>SALTAR</span> &nbsp; <span>ARRASTRA PARA MIRAR</span></span><span class="touch-hint">ARRASTRA EL ESCENARIO PARA MIRAR</span></div></div>
    <div class="mobile-controls" aria-label="Controles de movimiento"><div class="movement-joystick" role="group" aria-label="Joystick de movimiento: arrastra para moverte"><span class="joystick-guide" aria-hidden="true"></span><span class="joystick-thumb" aria-hidden="true"></span></div><button class="jump-control" type="button" aria-label="Saltar">↥</button></div>
    <span class="world-announcement sr-only" aria-live="polite"></span>`,i.append(e);const t=e.querySelector(".world-viewport"),n=window.matchMedia("(prefers-reduced-motion: reduce)"),s=matchMedia("(max-width: 700px), (pointer: coarse)").matches,r=new _g({antialias:!1,powerPreference:"high-performance",alpha:!1}),o=r.getContext(),a=o.getExtension("WEBGL_debug_renderer_info"),c=a?/swiftshader|llvmpipe|software/i.test(o.getParameter(a.UNMASKED_RENDERER_WEBGL)):!1,l=navigator.deviceMemory,u=new vg(s,s&&(l!==void 0&&l<=4||navigator.hardwareConcurrency<=4)),d=new URLSearchParams(location.search).get("quality"),h=["full","balanced","light","minimal"].indexOf(d??"");function f(){if(c)return .75;const Q=[4e6,s?1e6:25e5,7e5,42e4][u.level],Xe=[1.75,s?1.25:1.5,1,.8][u.level];return Math.min(devicePixelRatio,Xe,Math.sqrt(Q/(innerWidth*innerHeight)))}let _=f();r.setPixelRatio(_),r.setSize(innerWidth,innerHeight),r.setClearColor(198414),r.toneMapping=zr,r.toneMappingExposure=.95,r.domElement.tabIndex=0,r.domElement.setAttribute("aria-label","Escena 3D. Flechas o WASD para moverte, espacio para saltar."),t.append(r.domElement);const x=new Ac;x.background=new Qe(198414),x.fog=new Gr(198414,.019);const p=new Os(r),m=new Pg;x.environment=p.fromScene(m,.04).texture,x.environmentIntensity=.45,m.dispose(),p.dispose();const M=new rn(57,innerWidth/innerHeight,.1,200),w=new mh(8493764,1581622,3);x.add(w);const S=new vh(10929127,3);S.position.set(5,20,15),x.add(S);const P=[];for(const[Q,Xe,Et]of[[-9,-3,In.cyan],[10,-18,In.red],[-9,-38,In.violet],[0,-61,In.cyan]]){const ht=new kr(Et,60,25,2);ht.position.set(Q,4,Xe),x.add(ht),P.push(ht)}let T;try{T=sessionStorage}catch{}const v=Lg(T),g=Ng(x,s||c,v),D=Ug(x,w,S,P,s||c),E=au();x.add(E.root);const U=new Tg(r);U.renderTarget1.samples=s||c?0:2,U.renderTarget2.samples=s||c?0:2,U.addPass(new Ag(x,M));const C=new ji(new Re(innerWidth,innerHeight),.18,.2,1.1),B=C.setSize.bind(C);C.setSize=(Q,Xe)=>B(Math.max(1,Math.round(Q*.6)),Math.max(1,Math.round(Xe*.6))),U.addPass(C),U.addPass(new Cg);const N=Mg(r,e),V=[],Y=new A;function I(){for(const Q of V){Y.copy(Q.geometry.boundingSphere.center);const Xe=Math.max(0,M.position.distanceTo(Y)-Q.geometry.boundingSphere.radius);Q.visible=Xe<(Q.visible?38:32)}}function X(){U.render()}function H(){const Q=f();_!==Q&&(_=Q,r.setPixelRatio(_),U.setPixelRatio(_));const Xe=[.6,.45,.32,.25][u.level];C.setSize=(Et,ht)=>B(Math.max(1,Math.round(Et*Xe)),Math.max(1,Math.round(ht*Xe))),C.setSize(innerWidth*_,innerHeight*_),D.setQuality(u.level),g.setQuality(u.level),e.dataset.quality=["full","balanced","light","minimal"][u.level],e.dataset.renderRatio=_.toFixed(2),u.reset()}H();const z=new Set,q=e.querySelector(".movement-joystick"),oe={id:-1,x:0,z:0};function xe(){const Q=oe.id;oe.id=-1,oe.x=oe.z=0,q.classList.remove("is-active"),q.style.setProperty("--stick-x","0px"),q.style.setProperty("--stick-y","0px"),Q!==-1&&q.hasPointerCapture(Q)&&q.releasePointerCapture(Q)}const $=new A,ve=new A,te=new A(0,.7,7);let Ue=0,Me=0,Fe=0,tt=0,Ge=0,ee="idle",Se=0,W=0,de,me=0,pe=!1,ue=!1,Ce=!1,ge=!1;const Ne=new A,Ie=new A;let We=.38,L=.32,He=s?7.8:6.4;const ne={active:!1,id:-1,x:0,y:0};function ye(){return Ie.set(Math.sin(We)*Math.cos(L)*He,.65+Math.sin(L)*He,Math.cos(We)*Math.cos(L)*He)}ye();const le=new Qe(Zn),qe=new Qe(Zn),Ee=Q=>Q*Q*(3-2*Q),ke=g.path.getPointAt(1),R=g.path.getTangentAt(1),y=R.clone().multiplyScalar(g.path.getLength()*1.58/5.8),F=R.clone().multiplyScalar(-2.8).add(new A(0,.9,0)),Z=new A;let G=0,he=.5;const fe=new A,ie=new A,re=new Ht,_e=new A(1,1,1),O=new A,ce=Bg(x,i,e,v,M,Q=>{xe(),z.clear(),ne.active=!1,ee=Q?"memory":"explore",e.dataset.mode=ee,Te.update(te,M,!Q,0,n.matches),Q||r.domElement.focus({preventScroll:!0})},Q=>{Ce=Q,et()}),ae=zg(x,i,e,v,M,Q=>{xe(),z.clear(),ne.active=!1,ee=Q?"backup":"explore",e.dataset.mode=ee,Te.update(te,M,!Q,0,n.matches),!Q&&!ue&&r.domElement.focus({preventScroll:!0})}),Te=Fg(x,e,i,v,Q=>{Ce=Q,et()},Q=>ce.open(Q),ae),Ae=Og(x,i,e,v,Q=>{xe(),z.clear(),ne.active=!1,Q==="start"?(ee="ending",e.dataset.mode="ending"):Q==="screen"?(ge=!0,et()):(te.set(-1.2,0,7.15),E.root.rotation.set(0,-.95,0),te.y=gi(te.z,E.root.quaternion,E.root.scale),E.root.position.copy(te),We=.38,L=.32,M.position.copy(te).add(ye()),ie.copy(te).add(new A(0,.45,0)),M.lookAt(ie),W=Se=0,O.set(0,0,0),ee="explore",e.dataset.mode="explore",ge=!1,et())}),Pe=ot.map((Q,Xe)=>v.zoneCount(Xe)===Q.count);function Je(){!v.hasPda&&te.z<3.6&&(te.set(0,0,6.2),W=Se=0,O.set(0,0,0)),ot.forEach((Q,Xe)=>{Pe[Xe]=v.zoneCount(Xe)===Q.count})}v.subscribe(Je),Je();function et(){xe(),u.reset(),pe=ue||Ce||ge,z.clear(),ne.active=!1,e.classList.remove("is-orbiting"),e.inert=pe,ee==="idle"&&(e.hidden=!ue),cancelAnimationFrame(me),!pe&&ee!=="idle"&&!document.hidden&&(Fe=0,ft(),ee==="explore"&&r.domElement.focus({preventScroll:!0}))}function be(Q,Xe){return Xe.copy(ke).addScaledVector(y,Q),Xe.y-=5.5*Q*Q,Xe}for(let Q=.005;Q<=2;Q+=.005)if(be(Q,fe),gr(R,Q,re),fe.y<=gi(fe.z,re,_e)){let Xe=Q-.005,Et=Q;for(let ht=0;ht<12;ht++){const Lt=(Xe+Et)/2;be(Lt,fe),gr(R,Lt,re),fe.y>gi(fe.z,re,_e)?Xe=Lt:Et=Lt}he=Et;break}be(he,fe),gr(R,he,re),fe.y=gi(fe.z,re,_e);function Ke(Q=!1){ee="explore",tt=Ue,e.dataset.mode="explore",z.clear(),te.copy(fe),E.root.scale.setScalar(1),E.root.quaternion.copy(Q?re:new Ht),te.y=gi(te.z,E.root.quaternion,E.root.scale),E.root.position.copy(te),O.copy(y).multiplyScalar(Q?.38:0),O.y=0,W=0,Se=Q?Math.min(1.55,Math.abs(y.y-11*he)*.18):0,Q||(M.position.copy(te).add(ye()),ie.copy(te).add(new A(0,.45,0)),M.lookAt(ie)),e.querySelector(".world-bottom").inert=!1,e.querySelector(".mobile-controls").inert=!1,E.core.color.copy(qe),E.core.emissive.copy(qe),E.light.color.copy(qe),e.querySelector(".world-announcement").textContent="Proceso de recuperación desplegado. Habla con AUX junto a la entrada: acércate y pulsa E para conocer los objetivos. Usa WASD para moverte.",r.domElement.focus({preventScroll:!0}),de?.(),de=void 0}function nt(Q){E.root.position.copy(g.path.getPointAt(0)),E.root.scale.setScalar(.1+Ee(Q)*.9),E.root.quaternion.setFromUnitVectors(new A(0,0,-1),g.path.getTangentAt(0)),M.position.copy(Ne),ie.copy(E.root.position).add(new A(0,.15,0)),M.lookAt(ie)}function Oe(Q){const Xe=Math.min(Q,.12);Ue+=Xe,Me+=Q;const Et=D.update(Me,n.matches,Pe,v.complete,Xe);if(e.dataset.alert=Et.toFixed(2),g.update(Ue,n.matches,ee==="explore"||ee==="memory"?te:fe,E.root.rotation.y),ee==="forming"){Ge+=Q;const ht=Math.min(Ge/1.1,1);nt(ht),ht===1&&(ee="transit",Ge=0,e.dataset.mode="transit")}else if(ee==="transit"){Ge+=Q;const ht=Math.min(Ge/5.8,1),Lt=.42*ht+.58*ht*ht,It=g.path.getPointAt(Lt),_n=g.path.getTangentAt(Lt);E.root.position.copy(It),E.root.quaternion.setFromUnitVectors(new A(0,0,-1),_n);const An=It.clone().addScaledVector(_n,-2.8).add(new A(0,.9,0)),Rn=Ee(Math.min(ht*5,1));ve.copy(Ne).lerp(An,Rn),M.position.copy(ve),ie.copy(E.root.position).add(new A(0,.15,0)),M.lookAt(ie),E.core.color.copy(le).lerp(qe,Ee(Math.max(0,(ht-.65)/.35))),E.core.emissive.copy(E.core.color),E.light.color.copy(E.core.color),e.style.setProperty("--transit",`${ht*100}%`),ht===1&&(ee="falling",e.dataset.mode="falling",G=0,E.root.position.copy(ke))}else if(ee==="falling")G=Math.min(G+Math.min(Q,.1),he),be(G,Z),E.root.position.copy(Z),gr(R,G,E.root.quaternion),ve.copy(Z).add(F),M.position.copy(ve),ie.lerp(Z.clone().add(new A(0,.3,0)),1-Math.exp(-Xe*9)),M.lookAt(ie),G>=he&&Ke(!0);else if(ee==="explore"){const ht=Number(z.has("KeyD")||z.has("ArrowRight"))-Number(z.has("KeyA")||z.has("ArrowLeft"))+oe.x,Lt=Number(z.has("KeyS")||z.has("ArrowDown"))-Number(z.has("KeyW")||z.has("ArrowUp"))+oe.z,It=Math.max(1,Math.hypot(ht,Lt)),_n=(ht*Math.cos(We)+Lt*Math.sin(We))/It,An=(-ht*Math.sin(We)+Lt*Math.cos(We))/It,Rn=(1-Math.exp(-Xe*4))/4,zs=Rt.clamp(te.x+_n*Xe*4.5+O.x*Rn,-3.15,3.15),rs=Rt.clamp(te.z+An*Xe*4.5+O.z*Rn,-59.9,8.5);O.multiplyScalar(Math.exp(-Xe*4));const Ti=te.x,os=te.z,as=Math.max(1,Math.ceil(Math.hypot(zs-Ti,rs-os)/.015)),ls=(zs-Ti)/as,ci=(rs-os)/as;for(let Le=0;Le<as;Le++)g.canOccupy(te.x+ls,te.z,E.root.rotation.y)&&Te.canOccupy(te.x+ls,te.z)&&(te.x+=ls),Ae.canOccupy(te.z+ci)&&g.canOccupy(te.x,te.z+ci,E.root.rotation.y)&&Te.canOccupy(te.x,te.z+ci)&&(te.z+=ci);const b=Te.canRecover?g.recover(te.x,te.z,W,E.root.rotation.y):[];b.length&&(Te.rescued(b),e.querySelector(".world-announcement").textContent=`${v.count} paquetes recuperados de veinte.`);const k=Math.hypot(te.x-Ti,te.z-os);W===0&&k>0&&E.animate(k),z.has("Space")&&W===0&&(Se=4),Se-=Xe*11,W=Math.max(0,W+Se*Xe),W===0&&(Se=0);const se=Ue-tt,J=n.matches?0:Math.max(0,1-se/.16)*.07;E.root.scale.set(1+J*.5,1-J,1+J*.5);const j=n.matches||W>0?0:-Math.min(.045,k*.09/Math.max(Xe,.001));if(E.root.rotation.x=Rt.lerp(E.root.rotation.x,j,1-Math.exp(-Xe*5)),ht||Lt){const Le=Math.atan2(_n,An),Ve=Math.atan2(Math.sin(Le-E.root.rotation.y),Math.cos(Le-E.root.rotation.y))*Math.min(Xe*12,1),De=Math.max(1,Math.ceil(Math.abs(Ve)/.03));for(let Be=0;Be<De;Be++){const Ye=E.root.rotation.y+Ve/De;if(!g.canOccupy(te.x,te.z,Ye))break;E.root.rotation.y=Ye}}E.root.rotation.z*=n.matches?0:Math.exp(-Xe*4.5),te.y=gi(te.z,E.root.quaternion,E.root.scale),E.root.position.copy(te),E.root.position.y+=W,e.dataset.landing=`${se.toFixed(2)},${W.toFixed(3)},${O.length().toFixed(3)}`,ve.copy(te).add(ye()),M.position.lerp(ve,n.matches?1:1-Math.exp(-Xe*3)),$.copy(te),$.y+=.45,ie.lerp($,n.matches?1:1-Math.exp(-Xe*6)),M.lookAt(ie),e.dataset.camera=`${We.toFixed(2)},${L.toFixed(2)}`,e.dataset.position=`${te.x.toFixed(2)},${te.z.toFixed(2)}`}Te.update(te,M,ee==="explore",Xe,n.matches),Ae.update(te,M,E.root,ee==="explore",Q,E.animate),ce.update(Q),ae.update(Q)}function ft(){if(ee==="idle"||document.hidden||pe)return;const Q=performance.now(),Xe=Fe?(Q-Fe)/1e3:1/60;Fe=Q,h<0&&(ee==="explore"||ee==="memory")&&u.sample(Xe)&&H(),N.begin();const Et=performance.now();Oe(Xe),I(),X(),N.end(Xe,performance.now()-Et),pe||(me=requestAnimationFrame(ft))}async function Dt(Q){if(ee!=="idle"&&ee!=="explore")return;z.clear(),cancelAnimationFrame(me),xe(),Ge=0,W=Se=0,te.set(0,ln(7)+.45,7),We=.38,L=.32,ye(),E.core.color.copy(le),E.core.emissive.copy(le),E.light.color.copy(le);const Xe=g.path.getPointAt(0);Ne.copy(Xe).addScaledVector(g.path.getTangentAt(0),-3.5).add(new A(0,.65,0)),e.dataset.mode="forming",ee="forming",e.querySelector(".world-bottom").inert=!0,e.querySelector(".mobile-controls").inert=!0,e.style.setProperty("--origin-x",`${Q.x+Q.width/2}px`),e.style.setProperty("--origin-y",`${Q.y+Q.height/2}px`),e.style.setProperty("--transit","0%");const Et=new Promise(ht=>{de=ht});n.matches?Ke():nt(0),X(),e.hidden=!1,Fe=performance.now(),me=requestAnimationFrame(ft),await Et}const Tn=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",Q=>{if(!(pe||ee==="idle"||Q.ctrlKey||Q.metaKey||Q.altKey)){if(Q.code==="Escape"&&["forming","transit","falling"].includes(ee)){Q.preventDefault(),Ke();return}ee!=="explore"||!Tn.includes(Q.code)||Q.target instanceof Element&&Q.target.closest("button, a, input, textarea")||(Q.preventDefault(),z.add(Q.code))}}),window.addEventListener("keyup",Q=>z.delete(Q.code)),window.addEventListener("blur",()=>{z.clear(),xe(),ne.active=!1,e.classList.remove("is-orbiting")}),t.addEventListener("pointermove",Q=>{!ne.active||Q.pointerId!==ne.id||ee!=="explore"||(We-=(Q.clientX-ne.x)*.005,L=Rt.clamp(L+(Q.clientY-ne.y)*.004,.05,.95),ne.x=Q.clientX,ne.y=Q.clientY)}),t.addEventListener("pointerdown",Q=>{r.domElement.focus({preventScroll:!0}),!(ee!=="explore"||Q.button!==0)&&(ne.active=!0,ne.id=Q.pointerId,ne.x=Q.clientX,ne.y=Q.clientY,t.setPointerCapture(Q.pointerId),e.classList.add("is-orbiting"))});for(const Q of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(Q,()=>{ne.active=!1,e.classList.remove("is-orbiting")});t.addEventListener("wheel",Q=>{ee==="explore"&&(Q.preventDefault(),He=Rt.clamp(He+Q.deltaY*.005,4,9))},{passive:!1});function ns(Q){if(Q.pointerId!==oe.id)return;const Xe=q.getBoundingClientRect(),Et=Xe.width*.3,ht=Q.clientX-Xe.left-Xe.width/2,Lt=Q.clientY-Xe.top-Xe.height/2,It=Math.hypot(ht,Lt),_n=It>Et?Et/It:1,An=Math.max(0,(Math.min(It/Et,1)-.12)/.88);oe.x=It?ht/It*An:0,oe.z=It?Lt/It*An:0,q.style.setProperty("--stick-x",`${ht*_n}px`),q.style.setProperty("--stick-y",`${Lt*_n}px`)}q.addEventListener("pointerdown",Q=>{pe||ee!=="explore"||oe.id!==-1||Q.button!==0||(Q.preventDefault(),oe.id=Q.pointerId,q.setPointerCapture(Q.pointerId),q.classList.add("is-active"),ns(Q))}),q.addEventListener("pointermove",ns);for(const Q of["pointerup","pointercancel","lostpointercapture"])q.addEventListener(Q,Xe=>{Xe.pointerId===oe.id&&xe()});q.addEventListener("contextmenu",Q=>Q.preventDefault());const Kn=e.querySelector(".jump-control");Kn.addEventListener("pointerdown",Q=>{pe||ee!=="explore"||Q.button!==0||(Q.preventDefault(),Kn.setPointerCapture(Q.pointerId),z.add("Space"))});for(const Q of["pointerup","pointercancel","lostpointercapture"])Kn.addEventListener(Q,()=>z.delete("Space"));Kn.addEventListener("click",Q=>{Q.detail===0&&!pe&&ee==="explore"&&W===0&&(Se=4)}),e.querySelector(".skip-transit").addEventListener("click",()=>Ke()),window.addEventListener("resize",()=>{xe(),z.delete("Space"),M.aspect=innerWidth/innerHeight,M.updateProjectionMatrix(),H(),r.setSize(innerWidth,innerHeight),U.setSize(innerWidth,innerHeight),He=innerWidth<700?7.8:6.4,ye()}),document.addEventListener("visibilitychange",()=>{xe(),z.clear(),cancelAnimationFrame(me),!document.hidden&&ee!=="idle"&&!pe&&(Fe=0,ft())}),n.addEventListener("change",()=>{n.matches&&["forming","transit","falling"].includes(ee)&&Ke()}),M.position.copy(Ne.copy(g.path.getPointAt(0)).addScaledVector(g.path.getTangentAt(0),-3.5).add(new A(0,.65,0))),M.lookAt(g.path.getPointAt(0)),g.update(0,!0),D.update(0,n.matches),E.root.position.copy(g.path.getPointAt(0)),x.traverse(Q=>{Q instanceof Hr&&Q.layers.enable(1),!(!(Q instanceof we)||Q.name==="motherboard-floor")&&(Q.userData.microDetail&&V.push(Q),!(Q.userData.microDetail||Q.name==="ceiling-fault-sparks"||Q.userData.skipReflection)&&(Q.geometry.computeBoundingSphere(),(Q instanceof hn||Q.geometry.boundingSphere.radius>.2)&&Q.layers.enable(1)))}),await r.compileAsync(x,M),X(),M.position.copy(fe).add(ye()),M.lookAt(fe),X();for(const Q of[-1,1])await new Promise(Xe=>requestAnimationFrame(()=>Xe())),M.position.set(Q*3,3,-9),M.lookAt(Q*13,9,-23),X();M.position.copy(fe).add(ye()),M.lookAt(fe);const is=performance.now();let ss=3;for(let Q=0;Q<=3&&!(performance.now()-is>4500);Q++){u.level=Q,H();const Xe=[];for(let Et=0;Et<18;Et++){const ht=Et<9?0:-24;$.copy(fe),$.z+=ht,M.position.copy($).add(ye()),M.lookAt($);const Lt=performance.now();if(X(),await new Promise(It=>requestAnimationFrame(()=>It())),Et%9>1&&Xe.push(performance.now()-Lt),performance.now()-is>4500)break}if(xg(Xe,s)){ss=Q;break}}return u.level=h>=0?h:ss,e.dataset.calibrationMs=String(Math.round(performance.now()-is)),H(),M.position.copy(fe).add(ye()),M.lookAt(fe),X(),nt(0),X(),{enter:Dt,resume(){if(ee==="idle"){Ke();try{const Q=JSON.parse(sessionStorage.getItem("hugo-world-position-v1")||"null");Array.isArray(Q)&&Q.length===2&&Q.every(Number.isFinite)&&(te.x=Rt.clamp(Q[0],-3.15,3.15),te.z=Rt.clamp(Q[1],v.accessUnlocked?-59.9:3.35,8.5),te.y=gi(te.z,E.root.quaternion,E.root.scale),E.root.position.copy(te),M.position.copy(te).add(ye()),ie.copy(te).add(new A(0,.45,0)),M.lookAt(ie))}catch{}e.hidden=!1,et()}},setPaused(Q){if(ue=Q,Q&&(ce.cancel(),ee!=="idle"))try{sessionStorage.setItem("hugo-world-position-v1",JSON.stringify([te.x,te.z]))}catch{}et()}}}export{Hg as prepareWorld};
