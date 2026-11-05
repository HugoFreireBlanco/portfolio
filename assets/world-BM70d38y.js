import{g as $o,t as fo,a as ms,c as ou,m as zr,e as Zo,b as lu}from"./index-BtveCoQP.js";const po="187",cu=0,Ko=1,uu=2,gs=1,hu=2,mr=3,_i=0,Qt=1,mn=2,gi=0,xr=1,bs=2,Jo=3,Qo=4,du=5,ki=100,fu=101,pu=102,mu=103,gu=104,_u=200,xu=201,vu=202,Mu=203,oc=204,lc=205,Su=206,yu=207,Eu=208,bu=209,Tu=210,wu=211,Au=212,Ru=213,Cu=214,ya=0,Ea=1,ba=2,br=3,Ta=4,wa=5,Aa=6,Ra=7,mo=0,Pu=1,Lu=2,Wn=0,go=1,_o=2,xo=3,Os=4,vo=5,Mo=6,So=7,cc=300,Yi=301,Tr=302,Ws=303,Xs=304,Ts=1e3,Vn=1001,Ca=1002,zt=1003,Du=1004,Gr=1005,rn=1006,qs=1007,ni=1008,hn=1009,uc=1010,hc=1011,wr=1012,yo=1013,In=1014,yn=1015,jt=1016,Eo=1017,bo=1018,$i=1020,dc=35902,fc=35899,pc=1021,mc=1022,Ln=1023,si=1026,ii=1027,To=1028,wo=1029,xi=1030,Ao=1031,Ro=1033,_s=33776,xs=33777,vs=33778,Ms=33779,Pa=35840,La=35841,Da=35842,Ia=35843,Na=36196,Ua=37492,Fa=37496,Oa=37488,Ba=37489,ws=37490,za=37491,Ga=37808,Ha=37809,ka=37810,Va=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,$a=37816,Za=37817,Ka=37818,Ja=37819,Qa=37820,ja=37821,eo=36492,to=36494,no=36495,io=36283,ro=36284,As=36285,so=36286,Iu=3200,Rs=0,Nu=1,ti="",Xt="srgb",Cs="srgb-linear",Ps="linear",Mt="srgb",Ys=7680,Uu=519,Fu=512,Ou=513,Bu=514,gc=515,zu=516,Gu=517,_c=518,xc=519,Hu=35044,Co=35048,jo="300 es",En=2e3,Ar=2001;function ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vu(){const i=Ls("canvas");return i.style.display="block",i}const el={};function tl(...i){const e="THREE."+i.shift();console.log(e,...i)}function vc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=vc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=vc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ss(...i){const e=i.join(" ");e in el||(el[e]=!0,Qe(...i))}function Wu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Xu={[ya]:ya,[ba]:Aa,[Ta]:Ta,[br]:wa,[Ea]:Ea,[Aa]:ba,[Ra]:Ra,[wa]:br};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const vr=Math.PI/180,Rr=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Po(i,e){return(i%e+e)%e}function qu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Yu(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function $u(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function Zu(i,e=1){return e-Math.abs(Po(i,e*2)-e)}function Ku(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ju(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ju(i,e){return i+Math.random()*(e-i)}function eh(i){return i*(.5-Math.random())}function th(i){i!==void 0&&(nl=i);let e=nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nh(i){return i*vr}function ih(i){return i*Rr}function rh(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ah(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*h,o*u,o*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Lo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Sc(i,e){if(e.constructor===Float32Array)return i;const t=Lo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function yc(i,e){if(e.constructor===Float32Array)return i;const t=Lo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Kt={DEG2RAD:vr,RAD2DEG:Rr,generateUUID:Si,clamp:ot,euclideanModulo:Po,mapLinear:qu,inverseLerp:Yu,lerp:Mr,damp:$u,pingpong:Zu,smoothstep:Ku,smootherstep:Ju,randInt:Qu,randFloat:ju,randFloatSpread:eh,seededRandom:th,degToRad:nh,radToDeg:ih,isPowerOfTwo:rh,ceilPowerOfTwo:sh,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:ah,normalize:yc,denormalize:Sc},Vo=class Vo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vo.prototype.isVector2=!0;let ye=Vo;class en{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],f=s[a+0],h=s[a+1],_=s[a+2],M=s[a+3];if(d!==M||l!==f||c!==h||u!==_){let m=l*f+c*h+u*_+d*M;m<0&&(f=-f,h=-h,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),T=Math.sin(S);p=Math.sin(p*S)/T,o=Math.sin(o*S)/T,l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+M*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+_*o,d=d*p+M*o;const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),f=l(n/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wo=class Wo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $s.copy(this).projectOnVector(e),this.sub($s)}reflect(e){return this.sub($s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wo.prototype.isVector3=!0;let A=Wo;const $s=new A,il=new en,Xo=class Xo{constructor(e,t,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],M=r[0],m=r[3],p=r[6],S=r[1],T=r[4],y=r[7],C=r[2],w=r[5],x=r[8];return s[0]=a*M+o*S+l*C,s[3]=a*m+o*T+l*w,s[6]=a*p+o*y+l*x,s[1]=c*M+u*S+d*C,s[4]=c*m+u*T+d*w,s[7]=c*p+u*y+d*x,s[2]=f*M+h*S+_*C,s[5]=f*m+h*T+_*w,s[8]=f*p+h*y+_*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=d*M,e[1]=(r*c-u*n)*M,e[2]=(o*n-r*a)*M,e[3]=f*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=h*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xo.prototype.isMatrix3=!0;let et=Xo;const Zs=new et,rl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oh(){const i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Mt&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cs]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:rl,fromXYZ:sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const dt=oh();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class lh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=Ls("canvas")),Ai.width=e.width,Ai.height=e.height;const r=Ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ch=0;class Do{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ks(r[a].image)):s.push(Ks(r[a]))}else s=Ks(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let uh=0;const Js=new A;class Yt extends Mi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Vn,r=Vn,s=rn,a=ni,o=Ln,l=hn,c=Yt.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Si(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=cc;Yt.DEFAULT_ANISOTROPY=1;const qo=class qo{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(h+1)/2,C=(p+1)/2,w=(u+f)/4,x=(d+M)/4,g=(_+m)/4;return T>y&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=w/n,s=x/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=g/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=x/s,r=g/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-M)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qo.prototype.isVector4=!0;let Tt=qo;class hh extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Yt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Do(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends hh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ec extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dh extends Yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Fs=class Fs{constructor(e,t,n,r,s,a,o,l,c,u,d,f,h,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,f,h,_,M,m)}set(e,t,n,r,s,a,o,l,c,u,d,f,h,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,M=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-M*c,t[9]=-o*l,t[2]=M-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,M=c*d;t[0]=f+M*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=M+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,M=c*d;t[0]=f-M*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=M-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,M=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-M*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+M,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fh,e,ph)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Kn.crossVectors(n,ln),Kn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Kn.crossVectors(n,ln)),Kn.normalize(),Hr.crossVectors(ln,Kn),r[0]=Kn.x,r[4]=Hr.x,r[8]=ln.x,r[1]=Kn.y,r[5]=Hr.y,r[9]=ln.y,r[2]=Kn.z,r[6]=Hr.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],M=n[6],m=n[10],p=n[14],S=n[3],T=n[7],y=n[11],C=n[15],w=r[0],x=r[4],g=r[8],L=r[12],E=r[1],N=r[5],U=r[9],O=r[13],I=r[2],k=r[6],q=r[10],D=r[14],V=r[3],G=r[7],B=r[11],Y=r[15];return s[0]=a*w+o*E+l*I+c*V,s[4]=a*x+o*N+l*k+c*G,s[8]=a*g+o*U+l*q+c*B,s[12]=a*L+o*O+l*D+c*Y,s[1]=u*w+d*E+f*I+h*V,s[5]=u*x+d*N+f*k+h*G,s[9]=u*g+d*U+f*q+h*B,s[13]=u*L+d*O+f*D+h*Y,s[2]=_*w+M*E+m*I+p*V,s[6]=_*x+M*N+m*k+p*G,s[10]=_*g+M*U+m*q+p*B,s[14]=_*L+M*O+m*D+p*Y,s[3]=S*w+T*E+y*I+C*V,s[7]=S*x+T*N+y*k+C*G,s[11]=S*g+T*U+y*q+C*B,s[15]=S*L+T*O+y*D+C*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],M=e[7],m=e[11],p=e[15],S=l*h-c*f,T=o*h-c*d,y=o*f-l*d,C=a*h-c*u,w=a*f-l*u,x=a*d-o*u;return t*(M*S-m*T+p*y)-n*(_*S-m*C+p*w)+r*(_*T-M*C+p*x)-s*(_*y-M*w+m*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],M=e[13],m=e[14],p=e[15],S=t*o-n*a,T=t*l-r*a,y=t*c-s*a,C=n*l-r*o,w=n*c-s*o,x=r*c-s*l,g=u*M-d*_,L=u*m-f*_,E=u*p-h*_,N=d*m-f*M,U=d*p-h*M,O=f*p-h*m,I=S*O-T*U+y*N+C*E-w*L+x*g;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return e[0]=(o*O-l*U+c*N)*k,e[1]=(r*U-n*O-s*N)*k,e[2]=(M*x-m*w+p*C)*k,e[3]=(f*w-d*x-h*C)*k,e[4]=(l*E-a*O-c*L)*k,e[5]=(t*O-r*E+s*L)*k,e[6]=(m*y-_*x-p*T)*k,e[7]=(u*x-f*y+h*T)*k,e[8]=(a*U-o*E+c*g)*k,e[9]=(n*E-t*U-s*g)*k,e[10]=(_*w-M*y+p*S)*k,e[11]=(d*y-u*w-h*S)*k,e[12]=(o*L-a*N-l*g)*k,e[13]=(t*N-n*L+r*g)*k,e[14]=(M*T-_*C-m*S)*k,e[15]=(u*C-d*T+f*S)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,M=a*u,m=a*d,p=o*d,S=l*c,T=l*u,y=l*d,C=n.x,w=n.y,x=n.z;return r[0]=(1-(M+p))*C,r[1]=(h+y)*C,r[2]=(_-T)*C,r[3]=0,r[4]=(h-y)*w,r[5]=(1-(f+p))*w,r[6]=(m+S)*w,r[7]=0,r[8]=(_+T)*x,r[9]=(m-S)*x,r[10]=(1-(f+M))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ri.set(r[0],r[1],r[2]).length();const o=Ri.set(r[4],r[5],r[6]).length(),l=Ri.set(r[8],r[9],r[10]).length();s<0&&(a=-a),xn.copy(this);const c=1/a,u=1/o,d=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,a,o=En,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let _,M;if(l)_=s/(a-s),M=a*s/(a-s);else if(o===En)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ar)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=En,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),h=-(n+r)/(n-r);let _,M;if(l)_=1/(a-s),M=a/(a-s);else if(o===En)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===Ar)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fs.prototype.isMatrix4=!0;let xt=Fs;const Ri=new A,xn=new xt,fh=new A(0,0,0),ph=new A(1,1,1),Kn=new A,Hr=new A,ln=new A,al=new xt,ol=new en;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ol.setFromEuler(this),this.setFromQuaternion(ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mh=0;const ll=new A,Ci=new en,On=new xt,kr=new A,ar=new A,gh=new A,_h=new en,cl=new A(1,0,0),ul=new A(0,1,0),hl=new A(0,0,1),dl={type:"added"},xh={type:"removed"},Pi={type:"childadded",child:null},Qs={type:"childremoved",child:null};class Et extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new A,t=new Nn,n=new en,r=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new et}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(cl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(hl,e)}translateOnAxis(e,t){return ll.copy(e).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ar,kr,this.up):On.lookAt(kr,ar,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(On),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xh),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,_h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Et.DEFAULT_UP=new A(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class At extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vh={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vh)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=dt.workingColorSpace){if(e=Po(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ea(a,s,e+1/3),this.g=ea(a,s,e),this.b=ea(a,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return dt.workingToColorSpace(Wt.copy(this),e),Math.round(ot(Wt.r*255,0,255))*65536+Math.round(ot(Wt.g*255,0,255))*256+Math.round(ot(Wt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Xt){dt.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Vr);const n=Mr(Jn.h,Vr.h,t),r=Mr(Jn.s,Vr.s,t),s=Mr(Jn.l,Vr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new $e;$e.NAMES=Tc;class Bs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Bs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wc extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new A,Bn=new A,ta=new A,zn=new A,Li=new A,Di=new A,fl=new A,na=new A,ia=new A,ra=new A,sa=new Tt,aa=new Tt,oa=new Tt;class Sn{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),Bn.subVectors(n,t),ta.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Bn),l=vn.dot(ta),c=Bn.dot(Bn),u=Bn.dot(ta),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return sa.setScalar(0),aa.setScalar(0),oa.setScalar(0),sa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),oa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sa,s.x),a.addScaledVector(aa,s.y),a.addScaledVector(oa,s.z),a}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),Bn.subVectors(e,t),vn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Li.subVectors(r,n),Di.subVectors(s,n),na.subVectors(e,n);const l=Li.dot(na),c=Di.dot(na);if(l<=0&&c<=0)return t.copy(n);ia.subVectors(e,r);const u=Li.dot(ia),d=Di.dot(ia);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Li,a);ra.subVectors(e,s);const h=Li.dot(ra),_=Di.dot(ra);if(_>=0&&h<=_)return t.copy(s);const M=h*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Di,o);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return fl.subVectors(s,r),o=(d-u)/(d-u+(h-_)),t.copy(r).addScaledVector(fl,o);const p=1/(m+M+f);return a=M*p,o=f*p,t.copy(n).addScaledVector(Li,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Xr.subVectors(this.max,or),Ii.subVectors(e.a,or),Ni.subVectors(e.b,or),Ui.subVectors(e.c,or),Qn.subVectors(Ni,Ii),jn.subVectors(Ui,Ni),di.subVectors(Ii,Ui);let t=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-di.z,di.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,di.z,0,-di.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-di.y,di.x,0];return!la(t,Ii,Ni,Ui,Xr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Ii,Ni,Ui,Xr))?!1:(qr.crossVectors(Qn,jn),t=[qr.x,qr.y,qr.z],la(t,Ii,Ni,Ui,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new A,new A,new A,new A,new A,new A,new A,new A],Mn=new A,Wr=new yi,Ii=new A,Ni=new A,Ui=new A,Qn=new A,jn=new A,di=new A,or=new A,Xr=new A,qr=new A,fi=new A;function la(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){fi.fromArray(i,s);const o=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Dt=new A,Yr=new ye;let Mh=0;class qn extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hu,this.updateRanges=[],this.gpuType=yn,this.version=0,this._normalizationScale=e!==void 0?Lo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Sc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):yc(e,this.array)}}class Ac extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rc extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Sh=new yi,lr=new A,ca=new A;class ai{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(lr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(ca)),this.expandByPoint(lr.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yh=0;const fn=new xt,ua=new Et,Fi=new A,cn=new yi,cr=new yi,Ot=new A;class Gt extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?Rc:Ac)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(cn.min,cr.min),cn.expandByPoint(Ot),Ot.addVectors(cn.max,cr.max),cn.expandByPoint(Ot)):(cn.expandByPoint(cr.min),cn.expandByPoint(cr.max))}cn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ot.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Ot.add(Fi)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new A,l[L]=new A;const u=new A,d=new A,f=new A,h=new ye,_=new ye,M=new ye,m=new A,p=new A;function S(L,E,N){c[L]=c[E]=c[N]=1,u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,E),f.fromBufferAttribute(n,N),h.fromBufferAttribute(s,L),_.fromBufferAttribute(s,E),M.fromBufferAttribute(s,N),d.sub(u),f.sub(u),_.sub(h),M.sub(h);const U=1/(_.x*M.y-M.x*_.y);isFinite(U)&&(m.copy(d).multiplyScalar(M.y).addScaledVector(f,-_.y).multiplyScalar(U),p.copy(f).multiplyScalar(_.x).addScaledVector(d,-M.x).multiplyScalar(U),o[L].add(m),o[E].add(m),o[N].add(m),l[L].add(p),l[E].add(p),l[N].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,E=T.length;L<E;++L){const N=T[L],U=N.start,O=N.count;for(let I=U,k=U+O;I<k;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const y=new A,C=new A,w=new A,x=new A;function g(L){w.fromBufferAttribute(r,L),x.copy(w);const E=o[L];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),C.crossVectors(x,E);const U=C.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,U)}for(let L=0,E=n.count;L<E;++L)c[L]&&g(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new A,s=new A,a=new A,o=new A,l=new A,c=new A,u=new A,d=new A;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?h=l[M]*o.data.stride+o.offset:h=l[M]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new qn(f,u,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new A,Eh=new A,bh=new et;class kn{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ha.subVectors(n,t).cross(Eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(ha),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bh.getNormalMatrix(e),r=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Th=0;class Ei extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=xr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hn=new A,da=new A,$r=new A,Zr=new A;class Cc{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){da.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(da);const s=e.distanceTo(t)*.5,a=-this.direction.dot($r),o=Zr.dot(this.direction),l=-Zr.dot($r),c=Zr.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const M=1/u;d*=M,f*=M,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(da).addScaledVector($r,f),h}intersectSphere(e,t){if(e.radius<0)return null;Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,T=n.z-a.z,y=Math.abs(l),C=Math.abs(c),w=Math.abs(u);let x,g,L,E,N,U,O,I,k,q,D,V;if(y>=C&&y>=w?(L=l,U=d,k=_,V=p,l>=0?(x=c,g=u,E=f,N=h,O=M,I=m,q=S,D=T):(x=u,g=c,E=h,N=f,O=m,I=M,q=T,D=S)):C>=w?(L=c,U=f,k=M,V=S,c>=0?(x=u,g=l,E=h,N=d,O=m,I=_,q=T,D=p):(x=l,g=u,E=d,N=h,O=_,I=m,q=p,D=T)):(L=u,U=h,k=m,V=T,u>=0?(x=l,g=c,E=d,N=f,O=_,I=M,q=p,D=S):(x=c,g=l,E=f,N=d,O=M,I=_,q=S,D=p)),L===0)return null;const G=x/L,B=g/L,Y=1/L,ae=E-G*U,be=N-B*U,K=O-G*k,_e=I-B*k,ie=q-G*V,Ie=D-B*V,Me=ie*_e-Ie*K,ze=ae*Ie-be*ie,at=K*be-_e*ae;if(r){if(Me<0||ze<0||at<0)return null}else if((Me<0||ze<0||at<0)&&(Me>0||ze>0||at>0))return null;const Pe=Me+ze+at;if(Pe===0)return null;const se=Y*(Me*U+ze*k+at*V);return(Pe>0?se<0:se>0)?null:this.at(se/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pl=new xt,pi=new Cc,Kr=new ai,ml=new A,Jr=new A,Qr=new A,jr=new A,fa=new A,es=new A,gl=new A,ts=new A;class Be extends Et{constructor(e=new Gt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(fa.fromBufferAttribute(d,e),a?es.addScaledVector(fa,u):es.addScaledVector(fa.sub(t),u))}t.add(es)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(Kr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Kr,ml)===null||pi.origin.distanceToSquared(ml)>(e.far-e.near)**2))&&(pl.copy(s).invert(),pi.copy(e.ray).applyMatrix4(pl),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,C=T;y<C;y+=3){const w=o.getX(y),x=o.getX(y+1),g=o.getX(y+2);r=ns(this,p,e,n,c,u,d,w,x,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let m=_,p=M;m<p;m+=3){const S=o.getX(m),T=o.getX(m+1),y=o.getX(m+2);r=ns(this,a,e,n,c,u,d,S,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,C=T;y<C;y+=3){const w=y,x=y+1,g=y+2;r=ns(this,p,e,n,c,u,d,w,x,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let m=_,p=M;m<p;m+=3){const S=m,T=m+1,y=m+2;r=ns(this,a,e,n,c,u,d,S,T,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wh(i,e,t,n,r,s,a,o){let l;if(e.side===Qt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===_i,o),l===null)return null;ts.copy(o),ts.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:i}}function ns(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Jr),i.getVertexPosition(l,Qr),i.getVertexPosition(c,jr);const u=wh(i,e,t,n,Jr,Qr,jr,gl);if(u){const d=new A;Sn.getBarycoord(gl,Jr,Qr,jr,d),r&&(u.uv=Sn.getInterpolatedAttribute(r,o,l,c,d,new ye)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,o,l,c,d,new ye)),a&&(u.normal=Sn.getInterpolatedAttribute(a,o,l,c,d,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new A,materialIndex:0};Sn.getNormal(Jr,Qr,jr,f.normal),u.face=f,u.barycoord=d}return u}class Pc extends Yt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=zt,u=zt,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao extends qn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Oi=new xt,_l=new xt,is=[],xl=new yi,Ah=new xt,ur=new Be,hr=new ai;class dn extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Ah)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),xl.copy(e.boundingBox).applyMatrix4(Oi),this.boundingBox.union(xl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Oi),hr.copy(e.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Oi),_l.multiplyMatrices(n,Oi),ur.matrixWorld=_l,ur.raycast(e,is);for(let a=0,o=is.length;a<o;a++){const l=is[a];l.instanceId=s,l.object=this,t.push(l)}is.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pc(new Float32Array(r*this.count),r,this.count,To,yn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mi=new ai,Rh=new ye(.5,.5),rs=new A;class Cr{constructor(e=new kn,t=new kn,n=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],M=s[9],m=s[10],p=s[11],S=s[12],T=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-a,h-u,p-_,C-S).normalize(),r[1].setComponents(c+a,h+u,p+_,C+S).normalize(),r[2].setComponents(c+o,h+d,p+M,C+T).normalize(),r[3].setComponents(c-o,h-d,p-M,C-T).normalize(),n)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,h-f,p-m,C-y).normalize();else if(r[4].setComponents(c-l,h-f,p-m,C-y).normalize(),t===En)r[5].setComponents(c+l,h+f,p+m,C+y).normalize();else if(t===Ar)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Rh.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(rs.x=r.normal.x>0?e.max.x:e.min.x,rs.y=r.normal.y>0?e.max.y:e.min.y,rs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vl=new xt;class Io{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];vl.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Cr),n[r].setFromProjectionMatrix(vl,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Cr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Io().copy(this)}}class Lc extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ds=new A,Is=new A,Ml=new xt,dr=new Cc,ss=new ai,pa=new A,Sl=new A;class Ch extends Et{constructor(e=new Gt,t=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ds.fromBufferAttribute(t,r-1),Is.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ds.distanceTo(Is);e.setAttribute("lineDistance",new pt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),ss.radius+=s,e.ray.intersectsSphere(ss)===!1)return;Ml.copy(r).invert(),dr.copy(e.ray).applyMatrix4(Ml);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=h,m=_-1;M<m;M+=c){const p=u.getX(M),S=u.getX(M+1),T=as(this,e,dr,l,p,S,M);T&&t.push(T)}if(this.isLineLoop){const M=u.getX(_-1),m=u.getX(h),p=as(this,e,dr,l,M,m,_-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let M=h,m=_-1;M<m;M+=c){const p=as(this,e,dr,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=as(this,e,dr,l,_-1,h,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function as(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ds.fromBufferAttribute(o,r),Is.fromBufferAttribute(o,s),t.distanceSqToSegment(Ds,Is,pa,Sl)>n)return;pa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(pa);if(!(c<e.near||c>e.far))return{distance:c,point:Sl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const yl=new A,El=new A;class Ph extends Ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)yl.fromBufferAttribute(t,r),El.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+yl.distanceTo(El);e.setAttribute("lineDistance",new pt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dc extends Yt{constructor(e=[],t=Yi,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pr extends Yt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi extends Yt{constructor(e,t,n=In,r,s,a,o=zt,l=zt,c,u=si,d=1){if(u!==si&&u!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Do(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ic extends Zi{constructor(e,t=In,n=Yi,r,s,a=zt,o=zt,l,c=si){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nc extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bt extends Gt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2));function _(M,m,p,S,T,y,C,w,x,g,L){const E=y/x,N=C/g,U=y/2,O=C/2,I=w/2,k=x+1,q=g+1;let D=0,V=0;const G=new A;for(let B=0;B<q;B++){const Y=B*N-O;for(let ae=0;ae<k;ae++){const be=ae*E-U;G[M]=be*S,G[m]=Y*T,G[p]=I,c.push(G.x,G.y,G.z),G[M]=0,G[m]=0,G[p]=w>0?1:-1,u.push(G.x,G.y,G.z),d.push(ae/x),d.push(1-B/g),D+=1}}for(let B=0;B<g;B++)for(let Y=0;Y<x;Y++){const ae=f+Y+k*B,be=f+Y+k*(B+1),K=f+(Y+1)+k*(B+1),_e=f+(Y+1)+k*B;l.push(ae,be,_e),l.push(be,K,_e),V+=6}o.addGroup(h,V,L),h+=V,f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qt extends Gt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let _=0;const M=[],m=n/2;let p=0;S(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(h,2));function S(){const y=new A,C=new A;let w=0;const x=(t-e)/n;for(let g=0;g<=s;g++){const L=[],E=g/s,N=E*(t-e)+e;for(let U=0;U<=r;U++){const O=U/r,I=O*l+o,k=Math.sin(I),q=Math.cos(I);C.x=N*k,C.y=-E*n+m,C.z=N*q,d.push(C.x,C.y,C.z),y.set(k,x,q).normalize(),f.push(y.x,y.y,y.z),h.push(O,1-E),L.push(_++)}M.push(L)}for(let g=0;g<r;g++)for(let L=0;L<s;L++){const E=M[L][g],N=M[L+1][g],U=M[L+1][g+1],O=M[L][g+1];(e>0||L!==0)&&(u.push(E,N,O),w+=3),(t>0||L!==s-1)&&(u.push(N,U,O),w+=3)}c.addGroup(p,w,0),p+=w}function T(y){const C=_,w=new ye,x=new A;let g=0;const L=y===!0?e:t,E=y===!0?1:-1;for(let U=1;U<=r;U++)d.push(0,m*E,0),f.push(0,E,0),h.push(.5,.5),_++;const N=_;for(let U=0;U<=r;U++){const I=U/r*l+o,k=Math.cos(I),q=Math.sin(I);x.x=L*q,x.y=m*E,x.z=L*k,d.push(x.x,x.y,x.z),f.push(0,E,0),w.x=k*.5+.5,w.y=q*.5*E+.5,h.push(w.x,w.y),_++}for(let U=0;U<r;U++){const O=C+U,I=N+U;y===!0?u.push(I,I+1,O):u.push(I+1,I,O),g+=3}c.addGroup(p,g,y===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,h=(a-u)/f;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ye:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new A,r=[],s=[],a=[],o=new A,l=new xt;for(let h=0;h<=e;h++){const _=h/e;r[h]=this.getTangentAt(_,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ot(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,_))}a[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(ot(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],h*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class No extends Un{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lh extends No{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uo(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,h*=u,r(a,o,f,h)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const bl=new A,Tl=new A,ma=new Uo,ga=new Uo,_a=new Uo;class Vi extends Un{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new A){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Tl.subVectors(r[0],r[1]).add(r[0]),c=Tl);const d=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=bl),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),h),M=Math.pow(d.distanceToSquared(f),h),m=Math.pow(f.distanceToSquared(u),h);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),ma.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,_,M,m),ga.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,_,M,m),_a.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,_,M,m)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),ga.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),_a.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(ma.calc(l),ga.calc(l),_a.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new A().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wl(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function Dh(i,e){const t=1-i;return t*t*e}function Ih(i,e){return 2*(1-i)*i*e}function Nh(i,e){return i*i*e}function Sr(i,e,t,n){return Dh(i,e)+Ih(i,t)+Nh(i,n)}function Uh(i,e){const t=1-i;return t*t*t*e}function Fh(i,e){const t=1-i;return 3*t*t*i*e}function Oh(i,e){return 3*(1-i)*i*i*e}function Bh(i,e){return i*i*i*e}function yr(i,e,t,n,r){return Uh(i,e)+Fh(i,t)+Oh(i,n)+Bh(i,r)}class Uc extends Un{constructor(e=new ye,t=new ye,n=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,r.x,s.x,a.x,o.x),yr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zh extends Un{constructor(e=new A,t=new A,n=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,r.x,s.x,a.x,o.x),yr(e,r.y,s.y,a.y,o.y),yr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fc extends Un{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gh extends Un{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oc extends Un{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Sr(e,r.x,s.x,a.x),Sr(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bc extends Un{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Sr(e,r.x,s.x,a.x),Sr(e,r.y,s.y,a.y),Sr(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zc extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(wl(o,l.x,c.x,u.x,d.x),wl(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ye().fromArray(r))}return this}}var Ns=Object.freeze({__proto__:null,ArcCurve:Lh,CatmullRomCurve3:Vi,CubicBezierCurve:Uc,CubicBezierCurve3:zh,EllipseCurve:No,LineCurve:Fc,LineCurve3:Gh,QuadraticBezierCurve:Oc,QuadraticBezierCurve3:Bc,SplineCurve:zc});class Hh extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ns[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Ns[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class Al extends Hh{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fc(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Oc(this.currentPoint.clone(),new ye(e,t),new ye(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new Uc(this.currentPoint.clone(),new ye(e,t),new ye(n,r),new ye(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new zc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new No(e,t,n,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gc extends Al{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Al().fromJSON(r))}return this}}function kh(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Hc(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Yh(i,e,s,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let f=t;f<r;f+=t){const h=i[f],_=i[f+1];h<o&&(o=h),_<l&&(l=_),h>u&&(u=h),_>d&&(d=_)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Lr(s,a,t,o,l,c,0),a}function Hc(i,e,t,n,r){let s;if(r===rd(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Rl(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Rl(a/n|0,i[a],i[a+1],s);return s&&Ki(s,s.next)&&(Ir(s),s=s.next),s}function vi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ki(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Ir(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Qh(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Wh(i,n,r,s):Vh(i)){e.push(l.i,i.i,c.i),Ir(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xh(vi(i),e),Lr(i,e,t,n,r,s,2)):a===2&&qh(i,e,t,n,r,s):Lr(vi(i),e,t,n,r,s,1);break}}}function Vh(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(r,s,a),d=Math.min(o,l,c),f=Math.max(r,s,a),h=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=d&&_.y<=h&&gr(r,o,s,l,a,c,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Wh(i,e,t,n){const r=i.prev,s=i,a=i.next;if(Rt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,d=s.y,f=a.y,h=Math.min(o,l,c),_=Math.min(u,d,f),M=Math.max(o,l,c),m=Math.max(u,d,f),p=oo(h,_,e,t,n),S=oo(M,m,e,t,n);let T=i.prevZ,y=i.nextZ;for(;T&&T.z>=p&&y&&y.z<=S;){if(T.x>=h&&T.x<=M&&T.y>=_&&T.y<=m&&T!==r&&T!==a&&gr(o,u,l,d,c,f,T.x,T.y)&&Rt(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=h&&y.x<=M&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&gr(o,u,l,d,c,f,y.x,y.y)&&Rt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=p;){if(T.x>=h&&T.x<=M&&T.y>=_&&T.y<=m&&T!==r&&T!==a&&gr(o,u,l,d,c,f,T.x,T.y)&&Rt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=S;){if(y.x>=h&&y.x<=M&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&gr(o,u,l,d,c,f,y.x,y.y)&&Rt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xh(i,e){let t=i;do{const n=t.prev,r=t.next.next;!Ki(n,r)&&Vc(n,t,t.next,r)&&Dr(n,r)&&Dr(r,n)&&(e.push(n.i,t.i,r.i),Ir(t),Ir(t.next),t=i=r),t=t.next}while(t!==i);return vi(t)}function qh(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&td(a,o)){let l=Wc(a,o);a=vi(a,a.next),l=vi(l,l.next),Lr(a,e,t,n,r,s,0),Lr(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Yh(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Hc(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(ed(c))}r.sort($h);for(let s=0;s<r.length;s++)t=Zh(r[s],t);return t}function $h(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function Zh(i,e){const t=Kh(i,e);if(!t)return e;const n=Wc(t,i);return vi(n,n.next),vi(t,t.next)}function Kh(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(Ki(i,t))return t;do{if(Ki(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&kc(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const d=Math.abs(r-t.y)/(n-t.x);Dr(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Jh(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Jh(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function Qh(i,e,t,n){let r=i;do r.z===0&&(r.z=oo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,jh(r)}function jh(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function oo(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ed(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function kc(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function gr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&kc(i,e,t,n,r,s,a,o)}function td(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!nd(i,e)&&(Dr(i,e)&&Dr(e,i)&&id(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||Ki(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ki(i,e){return i.x===e.x&&i.y===e.y}function Vc(i,e,t,n){const r=ls(Rt(i,e,t)),s=ls(Rt(i,e,n)),a=ls(Rt(t,n,i)),o=ls(Rt(t,n,e));return!!(r!==s&&a!==o||r===0&&os(i,t,e)||s===0&&os(i,n,e)||a===0&&os(t,i,n)||o===0&&os(t,e,n))}function os(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ls(i){return i>0?1:i<0?-1:0}function nd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Dr(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function id(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Wc(i,e){const t=lo(i.i,i.x,i.y),n=lo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Rl(i,e,t,n){const r=lo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ir(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rd(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class sd{static triangulate(e,t,n=2){return kh(e,t,n)}}class Wi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Wi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Cl(e),Pl(n,e);let a=e.length;t.forEach(Cl);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Pl(n,t[l]);const o=sd.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Cl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Pl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Fo extends Gt{constructor(e=new Gc([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new pt(r,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:h-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:ad;let T,y=!1,C,w,x,g;if(p){T=p.getSpacedPoints(u),y=!0,f=!1;const W=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(u,W),w=new A,x=new A,g=new A}f||(m=0,h=0,_=0,M=0);const L=o.extractPoints(c);let E=L.shape;const N=L.holes;if(!Wi.isClockWise(E)){E=E.reverse();for(let W=0,le=N.length;W<le;W++){const ue=N[W];Wi.isClockWise(ue)&&(N[W]=ue.reverse())}}function O(W){const ue=10000000000000001e-36;let pe=W[0];for(let ce=1;ce<=W.length;ce++){const Ae=ce%W.length,de=W[Ae],Fe=de.x-pe.x,Le=de.y-pe.y,ke=Fe*Fe+Le*Le,P=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(pe.x),Math.abs(pe.y)),Ge=ue*P*P;if(ke<=Ge){W.splice(Ae,1),ce--;continue}pe=de}}O(E),N.forEach(O);const I=N.length,k=E;for(let W=0;W<I;W++){const le=N[W];E=E.concat(le)}function q(W,le,ue){return le||mt("ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(le,ue)}const D=E.length;function V(W,le,ue){let pe,ce,Ae;const de=W.x-le.x,Fe=W.y-le.y,Le=ue.x-W.x,ke=ue.y-W.y,P=de*de+Fe*Fe,Ge=de*ke-Fe*Le;if(Math.abs(Ge)>Number.EPSILON){const Ee=Math.sqrt(P),Ze=Math.sqrt(Le*Le+ke*ke),me=le.x-Fe/Ee,st=le.y+de/Ee,Oe=ue.x-ke/Ze,Ke=ue.y+Le/Ze,R=((Oe-me)*ke-(Ke-st)*Le)/(de*ke-Fe*Le);pe=me+de*R-W.x,ce=st+Fe*R-W.y;const v=pe*pe+ce*ce;if(v<=2)return new ye(pe,ce);Ae=Math.sqrt(v/2)}else{let Ee=!1;de>Number.EPSILON?Le>Number.EPSILON&&(Ee=!0):de<-Number.EPSILON?Le<-Number.EPSILON&&(Ee=!0):Math.sign(Fe)===Math.sign(ke)&&(Ee=!0),Ee?(pe=-Fe,ce=de,Ae=Math.sqrt(P)):(pe=de,ce=Fe,Ae=Math.sqrt(P/2))}return new ye(pe/Ae,ce/Ae)}const G=[];for(let W=0,le=k.length,ue=le-1,pe=W+1;W<le;W++,ue++,pe++)ue===le&&(ue=0),pe===le&&(pe=0),G[W]=V(k[W],k[ue],k[pe]);const B=[];let Y,ae=G.concat();for(let W=0,le=I;W<le;W++){const ue=N[W];Y=[];for(let pe=0,ce=ue.length,Ae=ce-1,de=pe+1;pe<ce;pe++,Ae++,de++)Ae===ce&&(Ae=0),de===ce&&(de=0),Y[pe]=V(ue[pe],ue[Ae],ue[de]);B.push(Y),ae=ae.concat(Y)}let be;if(m===0)be=Wi.triangulateShape(k,N);else{const W=[],le=[];for(let ue=0;ue<m;ue++){const pe=ue/m,ce=h*Math.cos(pe*Math.PI/2),Ae=_*Math.sin(pe*Math.PI/2)+M;for(let de=0,Fe=k.length;de<Fe;de++){const Le=q(k[de],G[de],Ae);ze(Le.x,Le.y,-ce),pe===0&&W.push(Le)}for(let de=0,Fe=I;de<Fe;de++){const Le=N[de];Y=B[de];const ke=[];for(let P=0,Ge=Le.length;P<Ge;P++){const Ee=q(Le[P],Y[P],Ae);ze(Ee.x,Ee.y,-ce),pe===0&&ke.push(Ee)}pe===0&&le.push(ke)}}be=Wi.triangulateShape(W,le)}const K=be.length,_e=_+M;for(let W=0;W<D;W++){const le=f?q(E[W],ae[W],_e):E[W];y?(x.copy(C.normals[0]).multiplyScalar(le.x),w.copy(C.binormals[0]).multiplyScalar(le.y),g.copy(T[0]).add(x).add(w),ze(g.x,g.y,g.z)):ze(le.x,le.y,0)}for(let W=1;W<=u;W++)for(let le=0;le<D;le++){const ue=f?q(E[le],ae[le],_e):E[le];y?(x.copy(C.normals[W]).multiplyScalar(ue.x),w.copy(C.binormals[W]).multiplyScalar(ue.y),g.copy(T[W]).add(x).add(w),ze(g.x,g.y,g.z)):ze(ue.x,ue.y,d/u*W)}for(let W=m-1;W>=0;W--){const le=W/m,ue=h*Math.cos(le*Math.PI/2),pe=_*Math.sin(le*Math.PI/2)+M;for(let ce=0,Ae=k.length;ce<Ae;ce++){const de=q(k[ce],G[ce],pe);ze(de.x,de.y,d+ue)}for(let ce=0,Ae=N.length;ce<Ae;ce++){const de=N[ce];Y=B[ce];for(let Fe=0,Le=de.length;Fe<Le;Fe++){const ke=q(de[Fe],Y[Fe],pe);y?ze(ke.x,ke.y+T[u-1].y,T[u-1].x+ue):ze(ke.x,ke.y,d+ue)}}}ie(),Ie();function ie(){const W=r.length/3;if(f){let le=0,ue=D*le;for(let pe=0;pe<K;pe++){const ce=be[pe];at(ce[2]+ue,ce[1]+ue,ce[0]+ue)}le=u+m*2,ue=D*le;for(let pe=0;pe<K;pe++){const ce=be[pe];at(ce[0]+ue,ce[1]+ue,ce[2]+ue)}}else{for(let le=0;le<K;le++){const ue=be[le];at(ue[2],ue[1],ue[0])}for(let le=0;le<K;le++){const ue=be[le];at(ue[0]+D*u,ue[1]+D*u,ue[2]+D*u)}}n.addGroup(W,r.length/3-W,0)}function Ie(){const W=r.length/3;let le=0;Me(k,le),le+=k.length;for(let ue=0,pe=N.length;ue<pe;ue++){const ce=N[ue];Me(ce,le),le+=ce.length}n.addGroup(W,r.length/3-W,1)}function Me(W,le){let ue=W.length;for(;--ue>=0;){const pe=ue;let ce=ue-1;ce<0&&(ce=W.length-1);for(let Ae=0,de=u+m*2;Ae<de;Ae++){const Fe=D*Ae,Le=D*(Ae+1),ke=le+pe+Fe,P=le+ce+Fe,Ge=le+ce+Le,Ee=le+pe+Le;Pe(ke,P,Ge,Ee)}}}function ze(W,le,ue){l.push(W),l.push(le),l.push(ue)}function at(W,le,ue){se(W),se(le),se(ue);const pe=r.length/3,ce=S.generateTopUV(n,r,pe-3,pe-2,pe-1);ve(ce[0]),ve(ce[1]),ve(ce[2])}function Pe(W,le,ue,pe){se(W),se(le),se(pe),se(le),se(ue),se(pe);const ce=r.length/3,Ae=S.generateSideWallUV(n,r,ce-6,ce-3,ce-2,ce-1);ve(Ae[0]),ve(Ae[1]),ve(Ae[3]),ve(Ae[1]),ve(Ae[2]),ve(Ae[3])}function se(W){r.push(l[W*3+0]),r.push(l[W*3+1]),r.push(l[W*3+2])}function ve(W){s.push(W.x),s.push(W.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return od(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ns[r.type]().fromJSON(r)),new Fo(n,e.options)}}const ad={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new ye(s,a),new ye(o,l),new ye(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[r*3],h=e[r*3+1],_=e[r*3+2],M=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-d),new ye(f,1-_),new ye(M,1-p)]:[new ye(o,1-l),new ye(u,1-d),new ye(h,1-_),new ye(m,1-p)]}};function od(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Tn extends Gt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],M=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let T=0;T<c;T++){const y=T*d-s;_.push(y,-S,0),M.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const T=S+c*p,y=S+c*(p+1),C=S+1+c*(p+1),w=S+1+c*p;h.push(T,y,w),h.push(y,C,w)}this.setIndex(h),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(M,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oo extends Gt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let d=e;const f=(t-e)/r,h=new A,_=new ye;for(let M=0;M<=r;M++){for(let m=0;m<=n;m++){const p=s+m/n*a;h.x=d*Math.cos(p),h.y=d*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let M=0;M<r;M++){const m=M*(n+1);for(let p=0;p<n;p++){const S=p+m,T=S,y=S+n+1,C=S+n+2,w=S+1;o.push(T,y,w),o.push(y,C,w)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bo extends Gt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new A,f=new A,h=[],_=[],M=[],m=[];for(let p=0;p<=n;p++){const S=[],T=p/n,y=a+T*o,C=e*Math.cos(y),w=Math.sqrt(e*e-C*C);let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let g=0;g<=t;g++){const L=g/t,E=r+L*s;d.x=-w*Math.cos(E),d.y=C,d.z=w*Math.sin(E),_.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(L+x,1-T),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const T=u[p][S+1],y=u[p][S],C=u[p+1][S],w=u[p+1][S+1];(p!==0||a>0)&&h.push(T,y,w),(p!==n-1||l<Math.PI)&&h.push(y,C,w)}this.setIndex(h),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(M,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pn extends Gt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],d=[],f=new A,h=new A,_=new A;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let p=0;p<=r;p++){const S=p/r*s;h.x=(e+t*Math.cos(m))*Math.cos(S),h.y=(e+t*Math.cos(m))*Math.sin(S),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),_.subVectors(h,f).normalize(),u.push(_.x,_.y,_.z),d.push(p/r),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=r;m++){const p=(r+1)*M+m-1,S=(r+1)*(M-1)+m-1,T=(r+1)*(M-1)+m,y=(r+1)*M+m;l.push(p,S,y),l.push(S,T,y)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class qi extends Gt{constructor(e=new Bc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,l=new A,c=new ye;let u=new A;const d=[],f=[],h=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(f,3)),this.setAttribute("uv",new pt(h,2));function M(){for(let T=0;T<t;T++)m(T);m(s===!1?t:0),S(),p()}function m(T){u=e.getPointAt(T/t,u);const y=a.normals[T],C=a.binormals[T];for(let w=0;w<=r;w++){const x=w/r*Math.PI*2,g=Math.sin(x),L=-Math.cos(x);l.x=L*y.x+g*C.x,l.y=L*y.y+g*C.y,l.z=L*y.z+g*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=t;T++)for(let y=1;y<=r;y++){const C=(r+1)*(T-1)+(y-1),w=(r+1)*T+(y-1),x=(r+1)*T+y,g=(r+1)*(T-1)+y;_.push(C,w,g),_.push(w,x,g)}}function S(){for(let T=0;T<=t;T++)for(let y=0;y<=r;y++)c.x=T/t,c.y=y/r,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qi(new Ns[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ll(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ll(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Zt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const r in n)e[r]=n[r]}return e}function Ll(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ld(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Qi={clone:Ji,merge:Zt};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(r.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(r.value);break;case"v3":this.uniforms[n].value=new A().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new et().fromArray(r.value);break;case"m4":this.uniforms[n].value=new xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qc extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lt extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hd extends Ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=mo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dd extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fd extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zs extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pd extends zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xa=new xt,Dl=new A,Il=new A;class Yc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dl),Il.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Il),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xa,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ar||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cs=new A,us=new en,An=new A;class $c extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cs,us,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,us,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cs,us,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cs,us,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ei=new A,Nl=new ye,Ul=new ye;class un extends $c{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Ul),t.subVectors(Ul,Nl)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class md extends Yc{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class Gs extends zs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class zo extends $c{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gd extends Yc{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _d extends zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new gd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Bi=-90,zi=1;class co extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Bi,zi,e,t);r.layers=this.layers,this.add(r);const s=new un(Bi,zi,e,t);s.layers=this.layers,this.add(s);const a=new un(Bi,zi,e,t);a.layers=this.layers,this.add(a);const o=new un(Bi,zi,e,t);o.layers=this.layers,this.add(o);const l=new un(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new un(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class xd extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class vd{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Md.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Md(){this._document.hidden===!1&&this.reset()}class Sd extends Ph{constructor(e=10,t=10,n=4473924,r=8947848){n=new $e(n),r=new $e(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,h=0,_=-o;f<=t;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const M=f===s?n:r;M.toArray(c,h),h+=3,M.toArray(c,h),h+=3,M.toArray(c,h),h+=3,M.toArray(c,h),h+=3}const u=new Gt;u.setAttribute("position",new pt(l,3)),u.setAttribute("color",new pt(c,3));const d=new Lc({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Fl(i,e,t,n){const r=yd(n);switch(t){case pc:return i*e;case To:return i*e/r.components*r.byteLength;case wo:return i*e/r.components*r.byteLength;case xi:return i*e*2/r.components*r.byteLength;case Ao:return i*e*2/r.components*r.byteLength;case mc:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case Ro:return i*e*4/r.components*r.byteLength;case _s:case xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vs:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:case Ia:return Math.max(i,16)*Math.max(e,8)/4;case Pa:case Da:return Math.max(i,8)*Math.max(e,8)/2;case Na:case Ua:case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fa:case ws:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case to:case no:return Math.ceil(i/4)*Math.ceil(e/4)*16;case io:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case As:case so:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yd(i){switch(i){case hn:case uc:return{byteLength:1,components:1};case wr:case hc:case jt:return{byteLength:2,components:1};case Eo:case bo:return{byteLength:2,components:4};case In:case yo:case yn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);function Zc(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ed(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],M=d[h];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,d[f]=M)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const M=d[h];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Yd=`#define PI 3.141592653589793
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
} // validated`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uf=`#ifdef USE_FOG
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
}`,df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,yf=`uniform sampler2D dfgLUT;
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
}`,Ef=`
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
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
#endif`,wf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
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
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
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
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cp=`float getShadowMask() {
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
}`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
#endif`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`uniform float backgroundBlurriness;
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Hp=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,Yp=`#define PHONG
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
}`,$p=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Kp=`#define TOON
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
}`,Jp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 color;
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
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:bd,alphahash_pars_fragment:Td,alphamap_fragment:wd,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Id,begin_vertex:Nd,beginnormal_vertex:Ud,bsdfs:Fd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:kd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:qd,common:Yd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Zd,displacementmap_vertex:Kd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:jd,colorspace_pars_fragment:ef,envmap_fragment:tf,envmap_common_pars_fragment:nf,envmap_pars_fragment:rf,envmap_pars_vertex:sf,envmap_physical_pars_fragment:gf,envmap_vertex:af,fog_vertex:of,fog_pars_vertex:lf,fog_fragment:cf,fog_pars_fragment:uf,gradientmap_pars_fragment:hf,lightmap_pars_fragment:df,lights_lambert_fragment:ff,lights_lambert_pars_fragment:pf,lights_pars_begin:mf,lights_toon_fragment:_f,lights_toon_pars_fragment:xf,lights_phong_fragment:vf,lights_phong_pars_fragment:Mf,lights_physical_fragment:Sf,lights_physical_pars_fragment:yf,lights_fragment_begin:Ef,lights_fragment_maps:bf,lights_fragment_end:Tf,lightprobes_pars_fragment:wf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:If,map_particle_pars_fragment:Nf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Ff,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Hf,normal_fragment_begin:kf,normal_fragment_maps:Vf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:Jf,opaque_fragment:Qf,packing:jf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:rp,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:up,skinning_pars_vertex:hp,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:xp,transmission_pars_fragment:vp,uv_pars_fragment:Mp,uv_pars_vertex:Sp,uv_vertex:yp,worldpos_vertex:Ep,background_vert:bp,background_frag:Tp,backgroundCube_vert:wp,backgroundCube_frag:Ap,cube_vert:Rp,cube_frag:Cp,depth_vert:Pp,depth_frag:Lp,distance_vert:Dp,distance_frag:Ip,equirect_vert:Np,equirect_frag:Up,linedashed_vert:Fp,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:Gp,meshlambert_frag:Hp,meshmatcap_vert:kp,meshmatcap_frag:Vp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:$p,meshphysical_frag:Zp,meshtoon_vert:Kp,meshtoon_frag:Jp,points_vert:Qp,points_frag:jp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},Ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Cn={basic:{uniforms:Zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Zt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Zt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Zt([Ue.points,Ue.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Zt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Zt([Ue.common,Ue.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Zt([Ue.sprite,Ue.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:Zt([Ue.common,Ue.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:Zt([Ue.lights,Ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Cn.physical={uniforms:Zt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const hs={r:0,b:0,g:0},rm=new xt,Kc=new et;Kc.set(-1,0,0,0,1,0,0,0,1);function sm(i,e,t,n,r,s){const a=new $e(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function h(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const y=S.backgroundBlurriness>0;T=e.get(T,y)}return T}function _(S){let T=!1;const y=h(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),T=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,T){const y=h(T);y&&y.isCubeTexture?(c===void 0&&(c=new Be(new bt(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Ji(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kc),c.material.toneMapped=dt.getTransfer(y.colorSpace)!==Mt,(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Be(new Tn(2,2),new Jt({name:"BackgroundMaterial",uniforms:Ji(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=dt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,T){S.getRGB(hs,Xc(i)),t.buffers.color.setClear(hs.r,hs.g,hs.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:M,dispose:p}}function am(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(N,U,O,I,k){let q=!1;const D=d(N,I,O,U);s!==D&&(s=D,c(s.object)),q=h(N,I,O,k),q&&_(N,I,O,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,U,O,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function d(N,U,O,I){const k=I.wireframe===!0;let q=n[U.id];q===void 0&&(q={},n[U.id]=q);const D=N.isInstancedMesh===!0?N.id:0;let V=q[D];V===void 0&&(V={},q[D]=V);let G=V[O.id];G===void 0&&(G={},V[O.id]=G);let B=G[k];return B===void 0&&(B=f(l()),G[k]=B),B}function f(N){const U=[],O=[],I=[];for(let k=0;k<t;k++)U[k]=0,O[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:I,object:N,attributes:{},index:null}}function h(N,U,O,I){const k=s.attributes,q=U.attributes;let D=0;const V=O.getAttributes();for(const G in V)if(V[G].location>=0){const Y=k[G];let ae=q[G];if(ae===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;D++}return s.attributesNum!==D||s.index!==I}function _(N,U,O,I){const k={},q=U.attributes;let D=0;const V=O.getAttributes();for(const G in V)if(V[G].location>=0){let Y=q[G];Y===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));const ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),k[G]=ae,D++}s.attributes=k,s.attributesNum=D,s.index=I}function M(){const N=s.newAttributes;for(let U=0,O=N.length;U<O;U++)N[U]=0}function m(N){p(N,0)}function p(N,U){const O=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;O[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),k[N]!==U&&(i.vertexAttribDivisor(N,U),k[N]=U)}function S(){const N=s.newAttributes,U=s.enabledAttributes;for(let O=0,I=U.length;O<I;O++)U[O]!==N[O]&&(i.disableVertexAttribArray(O),U[O]=0)}function T(N,U,O,I,k,q,D){D===!0?i.vertexAttribIPointer(N,U,O,k,q):i.vertexAttribPointer(N,U,O,I,k,q)}function y(N,U,O,I){M();const k=I.attributes,q=O.getAttributes(),D=U.defaultAttributeValues;for(const V in q){const G=q[V];if(G.location>=0){let B=k[V];if(B===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(B=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(B=N.instanceColor)),B!==void 0){const Y=B.normalized,ae=B.itemSize,be=e.get(B);if(be===void 0)continue;const K=be.buffer,_e=be.type,ie=be.bytesPerElement,Ie=_e===i.INT||_e===i.UNSIGNED_INT||B.gpuType===yo;if(B.isInterleavedBufferAttribute){const Me=B.data,ze=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,at=B.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Pe=0;Pe<G.locationSize;Pe++)p(G.location+Pe,Me.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)m(G.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Pe=0;Pe<G.locationSize;Pe++)T(G.location+Pe,ae/G.locationSize,_e,Y,ze*ie,(at+ae/G.locationSize*Pe)*ie,Ie)}else{if(B.isInstancedBufferAttribute){for(let Me=0;Me<G.locationSize;Me++)p(G.location+Me,B.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Me=0;Me<G.locationSize;Me++)m(G.location+Me);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Me=0;Me<G.locationSize;Me++)T(G.location+Me,ae/G.locationSize,_e,Y,ae*ie,ae/G.locationSize*Me*ie,Ie)}}else if(D!==void 0){const Y=D[V];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(G.location,Y);break;case 3:i.vertexAttrib3fv(G.location,Y);break;case 4:i.vertexAttrib4fv(G.location,Y);break;default:i.vertexAttrib1fv(G.location,Y)}}}}S()}function C(){L();for(const N in n){const U=n[N];for(const O in U){const I=U[O];for(const k in I){const q=I[k];for(const D in q)u(q[D].object),delete q[D];delete I[k]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;const U=n[N.id];for(const O in U){const I=U[O];for(const k in I){const q=I[k];for(const D in q)u(q[D].object),delete q[D];delete I[k]}}delete n[N.id]}function x(N){for(const U in n){const O=n[U];for(const I in O){const k=O[I];if(k[N.id]===void 0)continue;const q=k[N.id];for(const D in q)u(q[D].object),delete q[D];delete k[N.id]}}}function g(N){for(const U in n){const O=n[U],I=N.isInstancedMesh===!0?N.id:0,k=O[I];if(k!==void 0){for(const q in k){const D=k[q];for(const V in D)u(D[V].object),delete D[V];delete k[q]}delete O[I],Object.keys(O).length===0&&delete n[U]}}}function L(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:g,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function om(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function lm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==Ln&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const g=x===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==hn&&x!==yn&&!g&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,maxSamples:C,samples:w}}function cm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new kn,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||r;return r=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,T=S*4;let y=p.clippingState||null;l.value=y,y=u(_,f,T,h);for(let C=0;C!==T;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=h+M*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=h;T!==M;++T,y+=4)a.copy(d[T]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class Go extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Dc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bt(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:gi});s.uniforms.tEquirect.value=t;const a=new Be(r,s),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=rn),new co(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ol=256,um=3,hm=20,Jc=256,Qc=16,dm=3,fm=new A,pm=new $e;class Nr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new co(1,10,null),this._boxMesh=new Be(new bt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=fm}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(pm));const m=new co(n,r,u);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=_,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ol,Mc(e))}_fromTexture(e,t){e.mapping===Yi||e.mapping===Tr?this._setSize(e.image.length===0?Ol:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Bl(e,!1,!1),n=Math.log2(e)-um;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Yi||e.mapping===Tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mm(),this._integrationMaterial=gm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Qc);for(let a=0;a<=n;a++){const o=Nr.lodToRoughness(a,n);if(a>n-dm)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(Jc*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=_m());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function Bl(i,e,t){return new Go(i,{minFilter:ni,generateMipmaps:e,type:jt,colorSpace:Cs,depthBuffer:t})}function Ur(i,e,t){return new Jt({name:i,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:t,side:Qt,blending:gi,depthTest:!1,depthWrite:!1})}function mm(){return Ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jc}u

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
	`)}function gm(){return Ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qc}},`

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
	`)}function _m(){return Ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function zl(){return Ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gl(){return Ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Ws||h===Xs)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new Go(_.height);return M.fromEquirectangularTexture(i,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,_=h===Ws||h===Xs,M=h===Yi||h===Tr;if(_||M){let m=t.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Nr(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return _&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new Nr(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===Ws?f.mapping=Yi:h===Xs&&(f.mapping=Tr),f}function l(f){let h=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function vm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ss("WebGLRenderer: "+n+" extension not supported."),r}}}function Mm(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);const M=s.get(_);M&&(e.remove(M),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,M){return r[M.id]!==void 0||(M.addEventListener("dispose",o),r[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(_){const M=_.attributes;for(const m in M)e.update(M[m],i.ARRAY_BUFFER)}function d(_){const M=_.index,m=_.attributes.position;let p=0;if(m===void 0)return;const S=M!==null?M.array.length:m.array.length/3-1,T=m.count>=65535?Rc:Ac,y=new T(Math.ceil(S/3)*6,1),C=y.array;if(M!==null){const x=M.array;p=M.version;for(let g=0,L=0;g<S;g+=3){const E=x[g+0],N=x[g+1],U=x[g+2];C[L++]=E,C[L++]=N,C[L++]=N,C[L++]=U,C[L++]=U,C[L++]=E}}else{p=m.version;for(let x=0,g=0;x<S;x+=3){const L=x+0,E=x+1,N=x+2;C[g++]=L,C[g++]=E,C[g++]=E,C[g++]=N,C[g++]=N,C[g++]=L}}y.version=p;const w=s.get(_);w&&e.remove(w),s.set(_,y)}function f(_){const M=s.get(_);if(M){const m=_.index;m!==null&&M.version<m.version&&d(_)}else d(_);return s.get(_)}function h(){for(const _ in r){const M=r[_].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function Sm(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,h){h!==0&&(i.drawElementsInstanced(n,f,s,d*a,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,h);let M=0;for(let m=0;m<h;m++)M+=f[m];t.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Em(i,e,t){const n=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let L=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),_===!0&&(T=2),M===!0&&(T=3);let y=o.attributes.position.count*T,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*C*4*d),x=new Ec(w,y,C,d);x.type=yn,x.needsUpdate=!0;const g=T*4;for(let E=0;E<d;E++){const N=m[E],U=p[E],O=S[E],I=y*C*4*E;for(let k=0;k<N.count;k++){const q=k*g;h===!0&&(r.fromBufferAttribute(N,k),w[I+q+0]=r.x,w[I+q+1]=r.y,w[I+q+2]=r.z,w[I+q+3]=0),_===!0&&(r.fromBufferAttribute(U,k),w[I+q+4]=r.x,w[I+q+5]=r.y,w[I+q+6]=r.z,w[I+q+7]=0),M===!0&&(r.fromBufferAttribute(O,k),w[I+q+8]=r.x,w[I+q+9]=r.y,w[I+q+10]=r.z,w[I+q+11]=O.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new ye(y,C)},n.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let M=0;M<c.length;M++)h+=c[M];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function bm(i,e,t,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Tm={[go]:"LINEAR_TONE_MAPPING",[_o]:"REINHARD_TONE_MAPPING",[xo]:"CINEON_TONE_MAPPING",[Os]:"ACES_FILMIC_TONE_MAPPING",[Mo]:"AGX_TONE_MAPPING",[So]:"NEUTRAL_TONE_MAPPING",[vo]:"CUSTOM_TONE_MAPPING"};function wm(i,e,t,n,r,s){const a=new tn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Gt;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));const d=new qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Be(u,d),h=new zo(-1,1,1,-1,0,1);let _=null,M=null,m=!1,p,S=null,T=[],y=!1;this.setSize=function(C,w){a.setSize(C,w),o!==null&&o.setSize(C,w),l!==null&&l.setSize(C,w);for(let x=0;x<T.length;x++){const g=T[x];g.setSize&&g.setSize(C,w)}},this.setEffects=function(C){T=C,y=T.length>0&&T[0].isRenderPass===!0;const w=a.width,x=a.height;T.length>0&&o===null&&(o=new tn(w,x,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new tn(w,x,{type:jt,depthBuffer:!1,stencilBuffer:!1}));const g=r===!0&&T.some(L=>L.needsDepthTexture===!0);g!==(a.depthTexture!==null)&&(g===!0&&c===null&&(c=new Zi(w,x),s===!0&&(c.format=ii,c.type=$i)),a.dispose(),a.depthTexture=g?c:null,a.resolveDepthBuffer=g,a.storeMultisampledDepthBuffer=g);for(let L=0;L<T.length;L++){const E=T[L];E.setSize&&E.setSize(w,x),g&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(C,w){if(m||C.toneMapping===Wn&&T.length===0)return!1;if(S=w,w!==null){const x=w.width,g=w.height;(a.width!==x||a.height!==g)&&this.setSize(x,g)}return y===!1&&C.setRenderTarget(a),p=C.toneMapping,C.toneMapping=Wn,!0},this.hasRenderPass=function(){return y},this.end=function(C,w){C.toneMapping=p,m=!0;let x=a,g=o;for(let L=0;L<T.length;L++){const E=T[L];E.enabled!==!1&&(E.render(C,g,x,w),E.needsSwap!==!1&&(x=g,g=g===o?l:o))}if(_!==C.outputColorSpace||M!==C.toneMapping){_=C.outputColorSpace,M=C.toneMapping,d.defines={},dt.getTransfer(_)===Mt&&(d.defines.SRGB_TRANSFER="");const L=Tm[M];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(S),C.render(f,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const jc=new Yt,eu=new Zi(1,1),tu=new Ic(1),nu=new Ec,iu=new dh,ru=new Dc,Hl=[],kl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),Xl=new Float32Array(4);function tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Hl[r];if(s===void 0&&(s=new Float32Array(r),Hl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hs(i,e){let t=kl[e];t===void 0&&(t=new Int32Array(e),kl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Xl.set(n),i.uniformMatrix2fv(this.addr,!1,Xl),Nt(t,n)}}function Dm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Wl.set(n),i.uniformMatrix3fv(this.addr,!1,Wl),Nt(t,n)}}function Im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Vl.set(n),i.uniformMatrix4fv(this.addr,!1,Vl),Nt(t,n)}}function Nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function ks(i){return i.version===0&&(i.compareFunction=xc,i.needsUpdate=!0),i}function km(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=ks(eu):s=jc,t.setTexture2D(e||s,r)}function Vm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||iu,r)}function Wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=ks(tu):s=ru,t.setTextureCube(e||s,r)}function Xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nu,r)}function qm(i){switch(i){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Nm;case 35667:case 35671:return Um;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return Gm;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(i,e){i.uniform1fv(this.addr,e)}function $m(i,e){const t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Zm(i,e){const t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Km(i,e){const t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Jm(i,e){const t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qm(i,e){const t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jm(i,e){const t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e0(i,e){i.uniform1iv(this.addr,e)}function t0(i,e){i.uniform2iv(this.addr,e)}function n0(i,e){i.uniform3iv(this.addr,e)}function i0(i,e){i.uniform4iv(this.addr,e)}function r0(i,e){i.uniform1uiv(this.addr,e)}function s0(i,e){i.uniform2uiv(this.addr,e)}function a0(i,e){i.uniform3uiv(this.addr,e)}function o0(i,e){i.uniform4uiv(this.addr,e)}function l0(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ks(eu):a=jc;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function c0(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||iu,s[a])}function u0(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ks(tu):a=ru;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function h0(i,e,t){const n=this.cache,r=e.length,s=Hs(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nu,s[a])}function d0(i){switch(i){case 5126:return Ym;case 35664:return $m;case 35665:return Zm;case 35666:return Km;case 35674:return Jm;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return h0}}class f0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qm(t.type)}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d0(t.type)}}class m0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function ql(i,e){i.seq.push(e),i.map[e.id]=e}function g0(i,e,t){const n=i.name,r=n.length;for(va.lastIndex=0;;){const s=va.exec(n),a=va.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ql(t,c===void 0?new f0(o,i,e):new p0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new m0(o),ql(t,d)),t=d}}}class ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);g0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Yl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _0=37297;let x0=0;function v0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $l=new et;function M0(i){dt._getMatrix($l,dt.workingColorSpace,i);const e=`mat3( ${$l.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+v0(i.getShaderSource(e),o)}else return s}function S0(i,e){const t=M0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const y0={[go]:"Linear",[_o]:"Reinhard",[xo]:"Cineon",[Os]:"ACESFilmic",[Mo]:"AgX",[So]:"Neutral",[vo]:"Custom"};function E0(i,e){const t=y0[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ds=new A;function b0(){dt.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),e=ds.y.toFixed(4),t=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function w0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _r(i){return i!==""}function Kl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(i){return i.replace(R0,C0)}function C0(i,e){const t=rt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return uo(t)}const P0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(P0,L0)}function L0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const D0={[gs]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function I0(i){return D0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const N0={[Tr]:"ENVMAP_MODE_REFRACTION"};function U0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":N0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const F0={[mo]:"ENVMAP_BLENDING_MULTIPLY",[Pu]:"ENVMAP_BLENDING_MIX",[Lu]:"ENVMAP_BLENDING_ADD"};function O0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":F0[i.combine]||"ENVMAP_BLENDING_NONE"}function B0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=I0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=U0(t),d=O0(t),f=T0(t),h=w0(s),_=r.createProgram();let M,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(_r).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(_r).join(`
`),m.length>0&&(m+=`
`)):(M=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),m=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?rt.tonemapping_pars_fragment:"",t.toneMapping!==Wn?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),b0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=uo(a),a=Kl(a,t),a=Jl(a,t),o=uo(o),o=Kl(o,t),o=Jl(o,t),a=Ql(a),o=Ql(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=p+M+a,T=p+m+o,y=Yl(r,r.VERTEX_SHADER,S),C=Yl(r,r.FRAGMENT_SHADER,T);r.attachShader(_,y),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(E){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",U=r.getShaderInfoLog(y)||"",O=r.getShaderInfoLog(C)||"",I=N.trim(),k=U.trim(),q=O.trim();let D=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,y,C);else{const G=Zl(r,y,"vertex"),B=Zl(r,C,"fragment");mt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+G+`
`+B)}else I!==""?Qe("WebGLProgram: Program Info Log:",I):(k===""||q==="")&&(V=!1);V&&(E.diagnostics={runnable:D,programLog:I,vertexShader:{log:k,prefix:M},fragmentShader:{log:q,prefix:m}})}r.deleteShader(y),r.deleteShader(C),x=new ys(r,_),g=A0(r,_)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(_,_0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=C,this}let z0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new H0(e),t.set(e,n)),n}}class H0{constructor(e){this.id=z0++,this.code=e,this.usedTimes=0}}function k0(i){return i===xi||i===ws||i===As}function V0(i,e,t,n,r,s){const a=new bc,o=new G0,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,g,L,E,N,U){const O=E.fog,I=N.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||k,q),V=f[x.type];let G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&Qe("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));const B=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=B!==void 0?B.length:0;let ae=0;I.morphAttributes.position!==void 0&&(ae=1),I.morphAttributes.normal!==void 0&&(ae=2),I.morphAttributes.color!==void 0&&(ae=3);let be,K,_e,ie;if(V){const De=Cn[V];be=De.vertexShader,K=De.fragmentShader}else{be=x.vertexShader,K=x.fragmentShader;const De=o.getVertexShaderStage(x),gt=o.getFragmentShaderStage(x);o.update(x,De,gt),_e=De.id,ie=gt.id}const Ie=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),ze=N.isInstancedMesh===!0,at=N.isBatchedMesh===!0,Pe=!!x.map,se=!!x.matcap,ve=!!D,W=ve&&D.isPMREMTexture===!0,le=!!x.aoMap,ue=!!x.lightMap,pe=!!x.bumpMap&&x.wireframe===!1,ce=!!x.normalMap,Ae=!!x.displacementMap,de=!!x.emissiveMap,Fe=!!x.metalnessMap,Le=!!x.roughnessMap,ke=x.anisotropy>0,P=x.clearcoat>0,Ge=x.diffuseRoughness>0,Ee=x.dispersion>0,Ze=x.retroreflectivity>0,me=x.iridescence>0,st=x.sheen>0,Oe=x.transmission>0,Ke=ke&&!!x.anisotropyMap,R=P&&!!x.clearcoatMap,v=P&&!!x.clearcoatNormalMap,z=P&&!!x.clearcoatRoughnessMap,X=Ge&&!!x.diffuseRoughnessMap,ne=me&&!!x.iridescenceMap,he=me&&!!x.iridescenceThicknessMap,fe=st&&!!x.sheenColorMap,te=st&&!!x.sheenRoughnessMap,J=!!x.specularMap,ge=!!x.specularColorMap,F=!!x.specularIntensityMap,oe=Oe&&!!x.transmissionMap,re=Oe&&!!x.thicknessMap,we=!!x.gradientMap,Se=!!x.alphaMap,Te=x.alphaTest>0,Ve=!!x.alphaHash,je=!!x.extensions;let xe=Wn;x.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Je=W?D.isCompressedCubeTexture?D.image[0].mipmaps:D.mipmaps:null,nt={shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:be,fragmentShader:K,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:at,batchingColor:at&&N._colorsTexture!==null,instancing:ze,instancingColor:ze&&N.instanceColor!==null,instancingMorph:ze&&N.morphTexture!==null,outputColorSpace:Ie===null?i.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:se,envMap:ve,envMapMode:ve&&D.mapping,envMapPMREM:W,envMapMaxLod:W?Je.length-1:null,envMapSize:W?Je[0].width:null,aoMap:le,lightMap:ue,bumpMap:pe,normalMap:ce,displacementMap:Ae,emissiveMap:de,normalMapObjectSpace:ce&&x.normalMapType===Nu,normalMapTangentSpace:ce&&x.normalMapType===Rs,packedNormalMap:ce&&x.normalMapType===Rs&&k0(x.normalMap.format),metalnessMap:Fe,roughnessMap:Le,anisotropy:ke,anisotropyMap:Ke,clearcoat:P,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:Ge,diffuseRoughnessMap:X,dispersion:Ee,retroreflection:Ze,iridescence:me,iridescenceMap:ne,iridescenceThicknessMap:he,sheen:st,sheenColorMap:fe,sheenRoughnessMap:te,specularMap:J,specularColorMap:ge,specularIntensityMap:F,transmission:Oe,transmissionMap:oe,thicknessMap:re,gradientMap:we,opaque:x.transparent===!1&&x.blending===xr&&x.alphaToCoverage===!1,alphaMap:Se,alphaTest:Te,alphaHash:Ve,combine:x.combine,mapUv:Pe&&h(x.map.channel),aoMapUv:le&&h(x.aoMap.channel),lightMapUv:ue&&h(x.lightMap.channel),bumpMapUv:pe&&h(x.bumpMap.channel),normalMapUv:ce&&h(x.normalMap.channel),displacementMapUv:Ae&&h(x.displacementMap.channel),emissiveMapUv:de&&h(x.emissiveMap.channel),metalnessMapUv:Fe&&h(x.metalnessMap.channel),roughnessMapUv:Le&&h(x.roughnessMap.channel),anisotropyMapUv:Ke&&h(x.anisotropyMap.channel),clearcoatMapUv:R&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:X&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:he&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&h(x.sheenRoughnessMap.channel),specularMapUv:J&&h(x.specularMap.channel),specularColorMapUv:ge&&h(x.specularColorMap.channel),specularIntensityMapUv:F&&h(x.specularIntensityMap.channel),transmissionMapUv:oe&&h(x.transmissionMap.channel),thicknessMapUv:re&&h(x.thicknessMap.channel),alphaMapUv:Se&&h(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ce||ke),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Pe||Se),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ae,numSunLights:g.sun.length,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numSunLightShadows:g.sunShadowMap.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:U.filter(De=>De.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===Qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:je&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&x.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function M(x){const g=[];if(x.shaderID?g.push(x.shaderID):(g.push(x.customVertexShaderID),g.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)g.push(L),g.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(g,x),p(g,x),g.push(i.outputColorSpace)),g.push(x.customProgramCacheKey),g.join()}function m(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapPMREM),x.push(g.envMapMaxLod),x.push(g.envMapSize),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.diffuseRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.numSunLights),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numSunLightShadows),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.numLightProbeGrids),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)}function p(x,g){a.disableAll(),g.instancing&&a.enable(0),g.instancingColor&&a.enable(1),g.instancingMorph&&a.enable(2),g.matcap&&a.enable(3),g.envMap&&a.enable(4),g.normalMapObjectSpace&&a.enable(5),g.normalMapTangentSpace&&a.enable(6),g.clearcoat&&a.enable(7),g.iridescence&&a.enable(8),g.alphaTest&&a.enable(9),g.vertexColors&&a.enable(10),g.vertexAlphas&&a.enable(11),g.vertexUv1s&&a.enable(12),g.vertexUv2s&&a.enable(13),g.vertexUv3s&&a.enable(14),g.vertexTangents&&a.enable(15),g.anisotropy&&a.enable(16),g.alphaHash&&a.enable(17),g.batching&&a.enable(18),g.dispersion&&a.enable(19),g.retroreflection&&a.enable(24),g.diffuseRoughness&&a.enable(25),g.batchingColor&&a.enable(20),g.gradientMap&&a.enable(21),g.packedNormalMap&&a.enable(22),g.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),g.numLightProbeGrids>0&&a.enable(22),g.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const g=f[x.type];let L;if(g){const E=Cn[g];L=Qi.clone(E.uniforms)}else L=x.uniforms;return L}function T(x,g){let L=u.get(g);return L!==void 0?++L.usedTimes:(L=new B0(i,g,x,r),c.push(L),u.set(g,L)),L}function y(x){if(--x.usedTimes===0){const g=c.indexOf(x);c[g]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:S,acquireProgram:T,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:w}}function W0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function X0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ec(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,M,m,p){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:p},i[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=_,S.materialVariant=a(f),S.groupOrder=M,S.renderOrder=f.renderOrder,S.z=m,S.group=p),e++,S}function l(f,h,_,M,m,p,S){S.reversedDepth===!0&&(m=-m);const T=o(f,h,_,M,m,p);_.transmission>0?n.push(T):_.transparent===!0?r.push(T):t.push(T)}function c(f,h,_,M,m,p){const S=o(f,h,_,M,m,p);_.transmission>0?n.unshift(S):_.transparent===!0?r.unshift(S):t.unshift(S)}function u(f,h){t.length>1&&t.sort(f||X0),n.length>1&&n.sort(h||ec),r.length>1&&r.sort(h||ec)}function d(){for(let f=e,h=i.length;f<h;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function q0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new tc,i.set(n,[a])):r>=s.length?(a=new tc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Y0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new $e};break;case"SpotLight":t={position:new A,direction:new A,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function $0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Z0=0;function K0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J0(i){const e=new Y0,t=$0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const r=new A,s=new xt,a=new xt;function o(c){let u=0,d=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let h=0,_=0,M=0,m=0,p=0,S=0,T=0,y=0,C=0,w=0,x=0,g=0,L=0,E=0;c.sort(K0);for(let U=0,O=c.length;U<O;U++){const I=c[U],k=I.color,q=I.intensity,D=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===xi?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=k.r*q,d+=k.g*q,f+=k.b*q;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],q);E++}else if(I.isSunLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,Y=t.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[_]=Y,n.sunShadowMap[_]=V;const ae=B.getViewportCount();for(let be=0;be<ae;be++)n.sunShadowMatrix[M+be]=B.getMatrix(be),n.sunShadowCascade[M+be]=B._cascadeData[be];M+=ae,_++}n.sun[h]=G,h++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,Y=t.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=I.shadow.matrix,C++}n.directional[m]=G,m++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(k).multiplyScalar(q),G.distance=D,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[S]=G;const B=I.shadow;if(I.map&&(n.spotLightMap[g]=I.map,g++,B.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[S]=B.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=V,x++}S++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(k).multiplyScalar(q),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=G,T++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const B=I.shadow,Y=t.get(I);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=I.shadow.matrix,w++}n.point[p]=G,p++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(q),G.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=G,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const N=n.hash;(N.sunLength!==h||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==T||N.hemiLength!==y||N.numSunShadows!==_||N.numDirectionalShadows!==C||N.numPointShadows!==w||N.numSpotShadows!==x||N.numSpotMaps!==g||N.numLightProbes!==E)&&(n.sun.length=h,n.directional.length=m,n.spot.length=S,n.rectArea.length=T,n.point.length=p,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+g-L,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=E,N.sunLength=h,N.directionalLength=m,N.pointLength=p,N.spotLength=S,N.rectAreaLength=T,N.hemiLength=y,N.numSunShadows=_,N.numDirectionalShadows=C,N.numPointShadows=w,N.numSpotShadows=x,N.numSpotMaps=g,N.numLightProbes=E,n.version=Z0++)}function l(c,u){let d=0,f=0,h=0,_=0,M=0,m=0;const p=u.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){const y=c[S];if(y.isSunLight){const C=n.sun[d];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),d++}else if(y.isDirectionalLight){const C=n.directional[f];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),f++}else if(y.isSpotLight){const C=n.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const C=n.rectArea[M];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const C=n.point[h];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const C=n.hemi[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function nc(i){const e=new J0(i),t=[],n=[],r=[];function s(d){u.camera=d,t.length=0,n.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),r.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Q0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new nc(i),e.set(r,[o])):s>=a.length?(o=new nc(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
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
}`,tg=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],ng=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],ic=new xt,fr=new A,Ma=new A;function ig(i,e,t){let n=new Cr;const r=new ye,s=new ye,a=new Tt,o=new dd,l=new fd,c={},u=t.maxTextureSize,d={[_i]:Qt,[Qt]:_i,[mn]:mn},f=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:j0,fragmentShader:eg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Gt;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Be(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(w,x,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===hu&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);const L=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(gi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==this.type;O&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=w.length;I<k;I++){const q=w[I],D=q.shadow;if(D===void 0){Qe("WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const V=D.getFrameExtents();r.multiply(V),s.copy(D.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,D.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,D.mapSize.y=s.y));const G=i.state.buffers.depth.getReversed();if(D.camera._reversedDepth=G,D.map===null||O===!0){if(D.map!==null&&(D.map.depthTexture!==null&&(D.map.depthTexture.dispose(),D.map.depthTexture=null),D.map.dispose()),this.type===mr){if(q.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}D.map=new tn(r.x,r.y,{format:xi,type:jt,minFilter:rn,magFilter:rn,generateMipmaps:!1}),D.map.texture.name=q.name+".shadowMap",D.map.depthTexture=new Zi(r.x,r.y,yn),D.map.depthTexture.name=q.name+".shadowMapDepth",D.map.depthTexture.format=si,D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=zt,D.map.depthTexture.magFilter=zt}else q.isPointLight?(D.map=new Go(r.x),D.map.depthTexture=new Ic(r.x,In)):(D.map=new tn(r.x,r.y),D.map.depthTexture=new Zi(r.x,r.y,In)),D.map.depthTexture.name=q.name+".shadowMap",D.map.depthTexture.format=si,this.type===gs?(D.map.depthTexture.compareFunction=G?_c:gc,D.map.depthTexture.minFilter=rn,D.map.depthTexture.magFilter=rn):(D.map.depthTexture.compareFunction=null,D.map.depthTexture.minFilter=zt,D.map.depthTexture.magFilter=zt);D.camera.updateProjectionMatrix()}D.map.isWebGLCubeRenderTarget!==!0&&(D.map.width!==r.x||D.map.height!==r.y)&&D.map.setSize(r.x,r.y);const B=D.map.isWebGLCubeRenderTarget?6:D.getViewportCount();q.isPointLight!==!0&&D.updateMatrices(q,g);const Y=(D.camera.layers.mask&4294967294)!==0?D.camera.layers:g.layers;for(let ae=0;ae<B;ae++){const be=D.getCamera(ae);if(q.isPointLight){const K=D.camera,_e=D.matrix,ie=q.distance||K.far;ie!==K.far&&(K.far=ie,K.updateProjectionMatrix()),fr.setFromMatrixPosition(q.matrixWorld),K.position.copy(fr),Ma.copy(K.position),Ma.add(tg[ae]),K.up.copy(ng[ae]),K.lookAt(Ma),K.updateMatrixWorld(),_e.makeTranslation(-fr.x,-fr.y,-fr.z),ic.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),D._frustum.setFromProjectionMatrix(ic,K.coordinateSystem,K.reversedDepth)}if(D.map.isWebGLCubeRenderTarget)i.setRenderTarget(D.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(D.map),i.clear());const K=D.getViewport(ae);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),U.viewport(a)}n=D.getFrustum(ae),y(x,g,be,q,Y,this.type)}D.isPointLightShadow!==!0&&this.type===mr&&S(D,g),D.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,E,N)};function S(w,x){const g=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new tn(r.x,r.y,{format:xi,type:jt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,g,f,M,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,g,h,M,null)}function T(w,x,g,L){let E=null;const N=g.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)E=N;else if(E=g.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const U=E.uuid,O=x.uuid;let I=c[U];I===void 0&&(I={},c[U]=I);let k=I[O];k===void 0&&(k=E.clone(),I[O]=k,x.addEventListener("dispose",C)),E=k}if(E.visible=x.visible,E.wireframe=x.wireframe,L===mr?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:d[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,g.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=i.properties.get(E);U.light=g}return E}function y(w,x,g,L,E,N){if(w.visible===!1)return;if(w.layers.test(E)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===mr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,w.matrixWorld);const I=e.update(w),k=w.material;if(Array.isArray(k)){const q=I.groups;for(let D=0,V=q.length;D<V;D++){const G=q[D],B=k[G.materialIndex];if(B&&B.visible){const Y=T(w,B,L,N);w.onBeforeShadow(i,w,x,g,I,Y,G),i.renderBufferDirect(g,null,I,Y,w,G),w.onAfterShadow(i,w,x,g,I,Y,G)}}}else if(k.visible){const q=T(w,k,L,N);w.onBeforeShadow(i,w,x,g,I,q,null),i.renderBufferDirect(g,null,I,q,w,null),w.onAfterShadow(i,w,x,g,I,q,null)}}const O=w.children;for(let I=0,k=O.length;I<k;I++)y(O[I],x,g,L,E,N)}function C(w){w.target.removeEventListener("dispose",C);for(const g in c){const L=c[g],E=w.target.uuid;E in L&&(L[E].dispose(),delete L[E])}}}function rg(i,e){function t(){let F=!1;const oe=new Tt;let re=null;const we=new Tt(0,0,0,0);return{setMask:function(Se){re!==Se&&!F&&(i.colorMask(Se,Se,Se,Se),re=Se)},setLocked:function(Se){F=Se},setClear:function(Se,Te,Ve,je,xe){xe===!0&&(Se*=je,Te*=je,Ve*=je),oe.set(Se,Te,Ve,je),we.equals(oe)===!1&&(i.clearColor(Se,Te,Ve,je),we.copy(oe))},reset:function(){F=!1,re=null,we.set(-1,0,0,0)}}}function n(){let F=!1,oe=!1,re=null,we=null,Se=null;return{setReversed:function(Te){if(oe!==Te){const Ve=e.get("EXT_clip_control");Te?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),oe=Te;const je=Se;Se=null,this.setClear(je)}},getReversed:function(){return oe},setTest:function(Te){Te?Me(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Te){re!==Te&&!F&&(i.depthMask(Te),re=Te)},setFunc:function(Te){if(oe&&(Te=Xu[Te]),we!==Te){switch(Te){case ya:i.depthFunc(i.NEVER);break;case Ea:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case br:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Se!==Te&&(Se=Te,oe&&(Te=1-Te),i.clearDepth(Te))},reset:function(){F=!1,re=null,we=null,Se=null,oe=!1}}}function r(){let F=!1,oe=null,re=null,we=null,Se=null,Te=null,Ve=null,je=null,xe=null;return{setTest:function(Je){F||(Je?Me(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!F&&(i.stencilMask(Je),oe=Je)},setFunc:function(Je,nt,De){(re!==Je||we!==nt||Se!==De)&&(i.stencilFunc(Je,nt,De),re=Je,we=nt,Se=De)},setOp:function(Je,nt,De){(Te!==Je||Ve!==nt||je!==De)&&(i.stencilOp(Je,nt,De),Te=Je,Ve=nt,je=De)},setLocked:function(Je){F=Je},setClear:function(Je){xe!==Je&&(i.clearStencil(Je),xe=Je)},reset:function(){F=!1,oe=null,re=null,we=null,Se=null,Te=null,Ve=null,je=null,xe=null}}}const s=new t,a=new n,o=new r;let l={};const c=new WeakMap;let u={},d={},f={},h=new WeakMap,_=[],M=null,m=!1,p=null,S=null,T=null,y=null,C=null,w=null,x=null,g=new $e(0,0,0),L=0,E=!1,N=null,U=null,O=null,I=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,V=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=V>=2);let B=null,Y={};const ae=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),K=new Tt().fromArray(ae),_e=new Tt().fromArray(be);function ie(F,oe,re,we){const Se=new Uint8Array(4),Te=i.createTexture();i.bindTexture(F,Te),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<re;Ve++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(oe+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Te}const Ie={};Ie[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ie[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),a.setFunc(br),pe(!1),ce(Ko),Me(i.CULL_FACE),le(gi);function Me(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ze(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function at(F,oe){return f[F]!==oe?(i.bindFramebuffer(F,oe),f[F]=oe,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Pe(F,oe){let re=_,we=!1;if(F){re=h.get(oe),re===void 0&&(re=[],h.set(oe,re));const Se=F.textures;if(re.length!==Se.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Ve=Se.length;Te<Ve;Te++)re[Te]=i.COLOR_ATTACHMENT0+Te;re.length=Se.length,we=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,we=!0);we&&i.drawBuffers(re)}function se(F){return M!==F?(i.useProgram(F),M=F,!0):!1}const ve={[ki]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};ve[mu]=i.MIN,ve[gu]=i.MAX;const W={[_u]:i.ZERO,[xu]:i.ONE,[vu]:i.SRC_COLOR,[oc]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[Su]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function le(F,oe,re,we,Se,Te,Ve,je,xe,Je){if(F===gi){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(Me(i.BLEND),m=!0),F!==du){if(F!==p||Je!==E){if((S!==ki||C!==ki)&&(i.blendEquation(i.FUNC_ADD),S=ki,C=ki),Je)switch(F){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFunc(i.ONE,i.ONE);break;case Jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",F);break}else switch(F){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jo:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",F);break}T=null,y=null,w=null,x=null,g.set(0,0,0),L=0,p=F,E=Je}return}Se=Se||oe,Te=Te||re,Ve=Ve||we,(oe!==S||Se!==C)&&(i.blendEquationSeparate(ve[oe],ve[Se]),S=oe,C=Se),(re!==T||we!==y||Te!==w||Ve!==x)&&(i.blendFuncSeparate(W[re],W[we],W[Te],W[Ve]),T=re,y=we,w=Te,x=Ve),(je.equals(g)===!1||xe!==L)&&(i.blendColor(je.r,je.g,je.b,xe),g.copy(je),L=xe),p=F,E=!1}function ue(F,oe){F.side===mn?ze(i.CULL_FACE):Me(i.CULL_FACE);let re=F.side===Qt;oe&&(re=!re),pe(re),F.blending===xr&&F.transparent===!1?le(gi):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const we=F.stencilWrite;o.setTest(we),we&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(F){N!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),N=F)}function ce(F){F!==cu?(Me(i.CULL_FACE),F!==U&&(F===Ko?i.cullFace(i.BACK):F===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),U=F}function Ae(F){F!==O&&(D&&i.lineWidth(F),O=F)}function de(F,oe,re){F?(Me(i.POLYGON_OFFSET_FILL),(I!==oe||k!==re)&&(I=oe,k=re,a.getReversed()&&(oe=-oe,re=-re),i.polygonOffset(oe,re))):ze(i.POLYGON_OFFSET_FILL)}function Fe(F){F?Me(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function Le(F){F===void 0&&(F=i.TEXTURE0+q-1),B!==F&&(i.activeTexture(F),B=F)}function ke(F,oe,re){re===void 0&&(B===null?re=i.TEXTURE0+q-1:re=B);let we=Y[re];we===void 0&&(we={type:void 0,texture:void 0},Y[re]=we),(we.type!==F||we.texture!==oe)&&(B!==re&&(i.activeTexture(re),B=re),i.bindTexture(F,oe||Ie[F]),we.type=F,we.texture=oe)}function P(){const F=Y[B];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function Ee(){try{i.compressedTexImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function Ze(){try{i.texSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function me(){try{i.texSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function Ke(){try{i.texStorage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function R(){try{i.texStorage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function v(){try{i.texImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function z(){try{i.texImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function X(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function ne(F,oe){d[F]!==oe&&(i.pixelStorei(F,oe),d[F]=oe)}function he(F){K.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function fe(F){_e.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),_e.copy(F))}function te(F,oe){let re=c.get(oe);re===void 0&&(re=new WeakMap,c.set(oe,re));let we=re.get(F);we===void 0&&(we=i.getUniformBlockIndex(oe,F.name),i.uniformBlockBinding(oe,we,we),re.set(F,we))}function J(F,oe,re){const Se=c.get(oe).get(F);l[Se]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,Se,re),l[Se]=re)}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},B=null,Y={},f={},l={},h=new WeakMap,_=[],M=null,m=!1,p=null,S=null,T=null,y=null,C=null,w=null,x=null,g=new $e(0,0,0),L=0,E=!1,N=null,U=null,O=null,I=null,k=null,K.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Me,disable:ze,bindFramebuffer:at,drawBuffers:Pe,useProgram:se,setBlending:le,setMaterial:ue,setFlipSided:pe,setCullFace:ce,setLineWidth:Ae,setPolygonOffset:de,setScissorTest:Fe,activeTexture:Le,bindTexture:ke,unbindTexture:P,compressedTexImage2D:Ge,compressedTexImage3D:Ee,texImage2D:v,texImage3D:z,pixelStorei:ne,getParameter:X,updateUBOMapping:te,uniformBlockBinding:J,texStorage2D:Ke,texStorage3D:R,texSubImage2D:Ze,texSubImage3D:me,compressedTexSubImage2D:st,compressedTexSubImage3D:Oe,scissor:he,viewport:fe,reset:ge}}function sg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap,d=new Set;let f;const h=new WeakMap,_=new Set,M=new FinalizationRegistry(R=>_.delete(R));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,v){return m?new OffscreenCanvas(R,v):Ls("canvas")}function S(R,v,z){let X=1;const ne=Ke(R);if((ne.width>z||ne.height>z)&&(X=z/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const he=Math.floor(X*ne.width),fe=Math.floor(X*ne.height);f===void 0&&(f=p(he,fe));const te=v?p(he,fe):f;return te.width=he,te.height=fe,te.getContext("2d").drawImage(R,0,0,he,fe),Qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+fe+")."),te}else return"data"in R&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function T(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,v,z,X,ne,he=!1){if(R!==null){if(i[R]!==void 0)return i[R];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;X&&(fe=e.get("EXT_texture_norm16"),fe||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=v;if(v===i.RED&&(z===i.FLOAT&&(te=i.R32F),z===i.HALF_FLOAT&&(te=i.R16F),z===i.UNSIGNED_BYTE&&(te=i.R8),z===i.UNSIGNED_SHORT&&fe&&(te=fe.R16_EXT),z===i.SHORT&&fe&&(te=fe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.R8UI),z===i.UNSIGNED_SHORT&&(te=i.R16UI),z===i.UNSIGNED_INT&&(te=i.R32UI),z===i.BYTE&&(te=i.R8I),z===i.SHORT&&(te=i.R16I),z===i.INT&&(te=i.R32I)),v===i.RG&&(z===i.FLOAT&&(te=i.RG32F),z===i.HALF_FLOAT&&(te=i.RG16F),z===i.UNSIGNED_BYTE&&(te=i.RG8),z===i.UNSIGNED_SHORT&&fe&&(te=fe.RG16_EXT),z===i.SHORT&&fe&&(te=fe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.RG8UI),z===i.UNSIGNED_SHORT&&(te=i.RG16UI),z===i.UNSIGNED_INT&&(te=i.RG32UI),z===i.BYTE&&(te=i.RG8I),z===i.SHORT&&(te=i.RG16I),z===i.INT&&(te=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.RGB8UI),z===i.UNSIGNED_SHORT&&(te=i.RGB16UI),z===i.UNSIGNED_INT&&(te=i.RGB32UI),z===i.BYTE&&(te=i.RGB8I),z===i.SHORT&&(te=i.RGB16I),z===i.INT&&(te=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),z===i.UNSIGNED_INT&&(te=i.RGBA32UI),z===i.BYTE&&(te=i.RGBA8I),z===i.SHORT&&(te=i.RGBA16I),z===i.INT&&(te=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&(te=fe.RGB16_EXT),z===i.SHORT&&fe&&(te=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),v===i.RGBA){const J=he?Ps:dt.getTransfer(ne);z===i.FLOAT&&(te=i.RGBA32F),z===i.HALF_FLOAT&&(te=i.RGBA16F),z===i.UNSIGNED_BYTE&&(te=J===Mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&(te=fe.RGBA16_EXT),z===i.SHORT&&fe&&(te=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(R,v){let z;return R?v===null||v===In||v===$i?z=i.DEPTH24_STENCIL8:v===yn?z=i.DEPTH32F_STENCIL8:v===wr&&(z=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===In||v===$i?z=i.DEPTH_COMPONENT24:v===yn?z=i.DEPTH_COMPONENT32F:v===wr&&(z=i.DEPTH_COMPONENT16),z}function g(R,v){return T(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function L(R){const v=new WeakRef(R);n.get(R).__ref=v,_.add(v),M.register(R,v,v)}function E(R){const v=n.get(R).__ref;v!==void 0&&(_.delete(v),M.unregister(v))}function N(R){O(R.target)}function U(R){I(R.target)}function O(R){R.removeEventListener("dispose",N),E(R),q(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",U),E(R),V(R)}function k(){for(const R of _){const v=R.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):O(v))}_.clear(),d.clear()}function q(R){const v=n.get(R);if(v.__webglInit===void 0)return;const z=R.source,X=h.get(z);if(X){const ne=X[v.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(R),Object.keys(X).length===0&&h.delete(z)}n.remove(R)}function D(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const z=R.source,X=h.get(z);delete X[v.__cacheKey],a.memory.textures--}function V(R){const v=n.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();const z=R.depthTexture;if(z&&z.renderTarget===R&&O(z),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let he=0;he<v.__webglFramebuffer[ne].length;he++)i.deleteFramebuffer(v.__webglFramebuffer[ne][he]);else i.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[ne]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const X=R.textures;for(let ne=0,he=X.length;ne<he;ne++){const fe=n.get(X[ne]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(X[ne])}n.remove(R)}let G=0;function B(){G=0}function Y(){return G}function ae(R){G=R}function be(){const R=G;return R>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),G+=1,R}function K(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function _e(R,v){const z=n.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const X=R.image;if(X===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,R,v);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function ie(R,v){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ue(z,R,v);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function Ie(R,v){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ue(z,R,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function Me(R,v){const z=n.get(R);if(R.version>0&&z.__version!==R.version){pe(z,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const ze={[Ts]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},at={[zt]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[qs]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},Pe={[Fu]:i.NEVER,[xc]:i.ALWAYS,[Ou]:i.LESS,[gc]:i.LEQUAL,[Bu]:i.EQUAL,[_c]:i.GEQUAL,[zu]:i.GREATER,[Gu]:i.NOTEQUAL};function se(R,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===qs||v.magFilter===Gr||v.magFilter===ni||v.minFilter===rn||v.minFilter===qs||v.minFilter===Gr||v.minFilter===ni)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ze[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ze[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ze[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==Gr&&v.minFilter!==ni||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ve(R,v){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",N),L(v));const X=v.source;let ne=h.get(X);ne===void 0&&(ne={},h.set(X,ne));const he=K(v);if(he!==R.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[he].usedTimes++;const fe=ne[R.__cacheKey];fe!==void 0&&(ne[R.__cacheKey].usedTimes--,fe.usedTimes===0&&D(v)),R.__cacheKey=he,R.__webglTexture=ne[he].texture}return z}function W(R,v,z){return Math.floor(Math.floor(R/z)/v)}function le(R,v,z,X){const he=R.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,X,v.data);else{he.sort((F,oe)=>F.start-oe.start);let fe=0;for(let F=1;F<he.length;F++){const oe=he[fe],re=he[F],we=oe.start+oe.count,Se=W(re.start,v.width,4),Te=W(oe.start,v.width,4);re.start<=we+1&&Se===Te&&W(re.start+re.count-1,v.width,4)===Se?oe.count=Math.max(oe.count,re.start+re.count-oe.start):(++fe,he[fe]=re)}he.length=fe+1;const te=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let F=0,oe=he.length;F<oe;F++){const re=he[F],we=Math.floor(re.start/4),Se=Math.ceil(re.count/4),Te=we%v.width,Ve=Math.floor(we/v.width),je=Se,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(i.TEXTURE_2D,0,Te,Ve,je,xe,z,X,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,te),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function ue(R,v,z){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const ne=ve(R,v),he=v.source;t.bindTexture(X,R.__webglTexture,i.TEXTURE0+z);const fe=n.get(he);if(he.version!==fe.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const xe=dt.getPrimaries(dt.workingColorSpace),Je=v.colorSpace===ti?null:dt.getPrimaries(v.colorSpace),nt=v.colorSpace===ti||xe===Je?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=S(v.image,!1,r.maxTextureSize);J=Oe(v,J);const ge=s.convert(v.format,v.colorSpace),F=s.convert(v.type);let oe=w(v.internalFormat,ge,F,v.normalized,v.colorSpace,v.isVideoTexture);se(X,v);let re;const we=v.mipmaps,Se=v.isVideoTexture!==!0,Te=fe.__version===void 0||ne===!0,Ve=he.dataReady,je=g(v,J);if(v.isDepthTexture)oe=x(v.format===ii,v.type),Te&&(Se?t.texStorage2D(i.TEXTURE_2D,1,oe,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,oe,J.width,J.height,0,ge,F,null));else if(v.isDataTexture)if(we.length>0){Se&&Te&&t.texStorage2D(i.TEXTURE_2D,je,oe,we[0].width,we[0].height);for(let xe=0,Je=we.length;xe<Je;xe++)re=we[xe],Se?Ve&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,re.width,re.height,ge,F,re.data):t.texImage2D(i.TEXTURE_2D,xe,oe,re.width,re.height,0,ge,F,re.data);v.generateMipmaps=!1}else Se?(Te&&t.texStorage2D(i.TEXTURE_2D,je,oe,J.width,J.height),Ve&&le(v,J,ge,F)):t.texImage2D(i.TEXTURE_2D,0,oe,J.width,J.height,0,ge,F,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Se&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,oe,we[0].width,we[0].height,J.depth);for(let xe=0,Je=we.length;xe<Je;xe++)if(re=we[xe],v.format!==Ln)if(ge!==null)if(Se){if(Ve)if(v.layerUpdates.size>0){const nt=Fl(re.width,re.height,v.format,v.type);for(const De of v.layerUpdates){const gt=re.data.subarray(De*nt/re.data.BYTES_PER_ELEMENT,(De+1)*nt/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,De,re.width,re.height,1,ge,gt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,re.width,re.height,J.depth,ge,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,oe,re.width,re.height,J.depth,0,re.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,re.width,re.height,J.depth,ge,F,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,oe,re.width,re.height,J.depth,0,ge,F,re.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Se&&Te&&t.texStorage2D(i.TEXTURE_2D,je,oe,we[0].width,we[0].height);for(let xe=0,Je=we.length;xe<Je;xe++)re=we[xe],v.format!==Ln?ge!==null?Se?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,re.width,re.height,ge,re.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,oe,re.width,re.height,0,re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?Ve&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,re.width,re.height,ge,F,re.data):t.texImage2D(i.TEXTURE_2D,xe,oe,re.width,re.height,0,ge,F,re.data)}else if(v.isDataArrayTexture)if(Se){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,oe,J.width,J.height,J.depth),Ve)if(v.layerUpdates.size>0){const xe=Fl(J.width,J.height,v.format,v.type);for(const Je of v.layerUpdates){const nt=J.data.subarray(Je*xe/J.data.BYTES_PER_ELEMENT,(Je+1)*xe/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Je,J.width,J.height,1,ge,F,nt)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ge,F,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,J.width,J.height,J.depth,0,ge,F,J.data);else if(v.isData3DTexture)Se?(Te&&t.texStorage3D(i.TEXTURE_3D,je,oe,J.width,J.height,J.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ge,F,J.data)):t.texImage3D(i.TEXTURE_3D,0,oe,J.width,J.height,J.depth,0,ge,F,J.data);else if(v.isFramebufferTexture){if(Te)if(Se)t.texStorage2D(i.TEXTURE_2D,je,oe,J.width,J.height);else{let xe=J.width,Je=J.height;for(let nt=0;nt<je;nt++)t.texImage2D(i.TEXTURE_2D,nt,oe,xe,Je,0,ge,F,null),xe>>=1,Je>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),J.parentNode!==xe){xe.appendChild(J),d.add(v),xe.onpaint=Je=>{const nt=Je.changedElements;for(const De of d)nt.includes(De.image)&&(De.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const nt=i.RGBA,De=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,De,gt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Se&&Te){const xe=Ke(we[0]);t.texStorage2D(i.TEXTURE_2D,je,oe,xe.width,xe.height)}for(let xe=0,Je=we.length;xe<Je;xe++)re=we[xe],Se?Ve&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ge,F,re):t.texImage2D(i.TEXTURE_2D,xe,oe,ge,F,re);v.generateMipmaps=!1}else if(Se){if(Te){const xe=Ke(J);t.texStorage2D(i.TEXTURE_2D,je,oe,xe.width,xe.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,F,J)}else t.texImage2D(i.TEXTURE_2D,0,oe,ge,F,J);T(v)&&v.mipmapsAutoUpdate===!0&&y(X),fe.__version=he.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function pe(R,v,z){if(v.image.length!==6)return;const X=ve(R,v),ne=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const he=n.get(ne);if(ne.version!==he.__version||X===!0){t.activeTexture(i.TEXTURE0+z);const fe=dt.getPrimaries(dt.workingColorSpace),te=v.colorSpace===ti?null:dt.getPrimaries(v.colorSpace),J=v.colorSpace===ti||fe===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ge=v.isCompressedTexture||v.image[0].isCompressedTexture,F=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let De=0;De<6;De++)!ge&&!F?oe[De]=S(v.image[De],!0,r.maxCubemapSize):oe[De]=F?v.image[De].image:v.image[De],oe[De]=Oe(v,oe[De]);const re=oe[0],we=s.convert(v.format,v.colorSpace),Se=s.convert(v.type);let Te=w(v.internalFormat,we,Se,v.normalized,v.colorSpace);const Ve=v.isVideoTexture!==!0,je=he.__version===void 0||X===!0,xe=ne.dataReady;let Je=g(v,re);se(i.TEXTURE_CUBE_MAP,v);let nt;if(v.isDepthTexture){if(Te=x(v.format===ii,v.type),je)if(Ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Te,re.width,re.height);else for(let De=0;De<6;De++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Te,re.width,re.height,0,we,Se,null)}else if(ge){Ve&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,Te,re.width,re.height);for(let De=0;De<6;De++){nt=oe[De].mipmaps;for(let gt=0;gt<nt.length;gt++){const Pt=nt[gt];v.format!==Ln?we!==null?Ve?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt,0,0,Pt.width,Pt.height,we,Pt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt,Te,Pt.width,Pt.height,0,Pt.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt,0,0,Pt.width,Pt.height,we,Se,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt,Te,Pt.width,Pt.height,0,we,Se,Pt.data)}}}else{if(nt=v.mipmaps,Ve&&je){nt.length>0&&Je++;const De=Ke(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,Te,De.width,De.height)}for(let De=0;De<6;De++)if(F){Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,oe[De].width,oe[De].height,we,Se,oe[De].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Te,oe[De].width,oe[De].height,0,we,Se,oe[De].data);for(let gt=0;gt<nt.length;gt++){const gn=nt[gt].image[De].image;Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt+1,0,0,gn.width,gn.height,we,Se,gn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt+1,Te,gn.width,gn.height,0,we,Se,gn.data)}}else{Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,we,Se,oe[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Te,we,Se,oe[De]);for(let gt=0;gt<nt.length;gt++){const Pt=nt[gt];Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt+1,0,0,we,Se,Pt.image[De]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,gt+1,Te,we,Se,Pt.image[De])}}}T(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),he.__version=ne.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ce(R,v,z,X,ne,he){const fe=s.convert(z.format,z.colorSpace),te=s.convert(z.type),J=w(z.internalFormat,fe,te,z.normalized,z.colorSpace),ge=n.get(v),F=n.get(z);if(F.__renderTarget=v,!ge.__hasExternalTextures){const oe=Math.max(1,v.width>>he),re=Math.max(1,v.height>>he);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,J,oe,re,v.depth,0,fe,te,null):t.texImage2D(ne,he,J,oe,re,0,fe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,ne,F.__webglTexture,0,Ze(v)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,ne,F.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(R,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const X=v.depthTexture,ne=X&&X.isDepthTexture?X.type:null,he=x(v.stencilBuffer,ne),fe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(v),he,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(v),he,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,he,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{const X=v.textures;for(let ne=0;ne<X.length;ne++){const he=X[ne],fe=s.convert(he.format,he.colorSpace),te=s.convert(he.type),J=w(he.internalFormat,fe,te,he.normalized,he.colorSpace);me(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(v),J,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(R,v,z){const X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=n.get(v.depthTexture);ne.__renderTarget=v;const he=X?v.depthTexture.image[0]:v.depthTexture.image;(!ne.__webglTexture||he.width!==v.width||he.height!==v.height)&&(he.width=v.width,he.height=v.height,v.depthTexture.needsUpdate=!0),X?Me(v.depthTexture,0):_e(v.depthTexture,0);const fe=ne.__webglTexture,te=Ze(v),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ge=v.depthTexture.format===ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===si)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,J,fe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,ge,J,fe,0);else if(v.depthTexture.format===ii)me(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,J,fe,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,ge,J,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(R){const v=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const ne=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),v.__depthDisposeCallback=ne}v.__boundDepthTexture=X}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)de(v.__webglFramebuffer[X],R,X);else R.texture.mipmaps.length>0?de(v.__webglFramebuffer[0],R,0):de(v.__webglFramebuffer,R,0);else if(z){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[X],R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(R,v,z){const X=n.get(R);v!==void 0&&ce(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Fe(R)}function ke(R){const v=R.texture,z=n.get(R),X=n.get(v);R.addEventListener("dispose",U),L(R);const ne=R.textures,he=R.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),he){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(v.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let J=0;J<v.mipmaps.length;J++)z.__webglFramebuffer[te][J]=i.createFramebuffer()}else z.__webglFramebuffer[te]=i.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<v.mipmaps.length;te++)z.__webglFramebuffer[te]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let te=0,J=ne.length;te<J;te++){const ge=n.get(ne[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let te=0;te<ne.length;te++){const J=ne[te];z.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[te]);const ge=s.convert(J.format,J.colorSpace),F=s.convert(J.type),oe=w(J.internalFormat,ge,F,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),re=Ze(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,oe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,z.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),se(i.TEXTURE_CUBE_MAP,v);for(let te=0;te<6;te++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ce(z.__webglFramebuffer[te][J],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,J);else ce(z.__webglFramebuffer[te],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);T(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let te=0,J=ne.length;te<J;te++){const ge=ne[te],F=n.get(ge);let oe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,F.__webglTexture),se(oe,ge),ce(z.__webglFramebuffer,R,ge,i.COLOR_ATTACHMENT0+te,oe,0),T(ge)&&y(oe)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,X.__webglTexture),se(te,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)ce(z.__webglFramebuffer[J],R,v,i.COLOR_ATTACHMENT0,te,J);else ce(z.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,te,0);T(v)?y(te):v.mipmaps.length>0&&i.texParameteri(te,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Fe(R)}function P(R){const v=R.textures;for(let z=0,X=v.length;z<X;z++){const ne=v[z];if(T(ne)&&ne.mipmapsAutoUpdate===!0){const he=C(R),fe=n.get(ne).__webglTexture;t.bindTexture(he,fe),y(he),t.unbindTexture()}}}const Ge=[];function Ee(R){if(R.samples>0){if(me(R)===!1){const v=R.textures,z=R.width,X=R.height;let ne=i.COLOR_BUFFER_BIT;const he=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),te=v.length>1;if(te)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const F=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,ne,i.NEAREST),l===!0&&(Ge.length=0,Ge.push(i.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ge.push(he),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const F=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function me(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function st(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Oe(R,v){const z=R.colorSpace,X=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Cs&&z!==ti&&(dt.getTransfer(z)===Mt?(X!==Ln||ne!==hn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",z)),v}function Ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=be,this.resetTextureUnits=B,this.getTextureUnits=Y,this.setTextureUnits=ae,this.setTexture2D=_e,this.setTexture2DArray=ie,this.setTexture3D=Ie,this.setTextureCube=Me,this.rebindTextures=Le,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=me,this.dispose=k}function ag(i,e){function t(n,r=ti){let s;const a=dt.getTransfer(r);if(n===hn)return i.UNSIGNED_BYTE;if(n===Eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===hc)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===jt)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===Ln)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===To)return i.RED;if(n===wo)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===Ao)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===_s||n===xs||n===vs||n===Ms)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Da||n===Ia)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===ws||n===za)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Na||n===Ua)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oa)return s.COMPRESSED_R11_EAC;if(n===Ba)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ws)return s.COMPRESSED_RG11_EAC;if(n===za)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===ka||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ka||n===Ja||n===Qa||n===ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===to||n===no)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===eo)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===io||n===ro||n===As||n===so)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===io)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===As)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const og=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lg=`
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

}`;class cg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Jt({vertexShader:og,fragmentShader:lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ug extends Mi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const M=typeof XRWebGLBinding<"u",m=new cg,p={},S=t.getContextAttributes();let T=null,y=null;const C=[],w=[],x=new ye;let g=null,L=null;const E=new un;E.viewport=new Tt;const N=new un;N.viewport=new Tt;const U=[E,N],O=new xd;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let _e=C[K];return _e===void 0&&(_e=new js,C[K]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(K){let _e=C[K];return _e===void 0&&(_e=new js,C[K]=_e),_e.getGripSpace()},this.getHand=function(K){let _e=C[K];return _e===void 0&&(_e=new js,C[K]=_e),_e.getHandSpace()};function q(K){const _e=w.indexOf(K.inputSource);if(_e===-1)return;const ie=C[_e];ie!==void 0&&(ie.update(K.inputSource,K.frame,c||a),ie.dispatchEvent({type:K.type,data:K.inputSource}))}function D(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",V);for(let K=0;K<C.length;K++){const _e=w[K];_e!==null&&(w[K]=null,C[K].disconnect(_e))}I=null,k=null,m.reset();for(const K in p)delete p[K];if(e.setRenderTarget(T),h=null,f=null,d=null,r=null,y=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(x.width,x.height,!1),L!==null){const K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",D),r.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ie=null,Me=null;S.depth&&(Me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?ii:si,Ie=S.stencil?$i:In);const ze={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ze),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new tn(f.textureWidth,f.textureHeight,{format:Ln,type:hn,depthTexture:new Zi(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new tn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(K){for(let _e=0;_e<K.removed.length;_e++){const ie=K.removed[_e],Ie=w.indexOf(ie);Ie>=0&&(w[Ie]=null,C[Ie].disconnect(ie))}for(let _e=0;_e<K.added.length;_e++){const ie=K.added[_e];let Ie=w.indexOf(ie);if(Ie===-1){for(let ze=0;ze<C.length;ze++)if(ze>=w.length){w.push(ie),Ie=ze;break}else if(w[ze]===null){w[ze]=ie,Ie=ze;break}if(Ie===-1)break}const Me=C[Ie];Me&&Me.connect(ie)}}function G(K,_e){_e===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(_e.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let _e=K.near,ie=K.far;m.texture!==null&&(m.depthNear>0&&(_e=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),O.near=N.near=E.near=_e,O.far=N.far=E.far=ie,(I!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,k=O.far),O.layers.mask=K.layers.mask|6,E.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;const Ie=K.parent,Me=O.cameras;G(O,Ie);for(let ze=0;ze<Me.length;ze++)G(Me[ze],Ie);O.projectionMatrix.copy(E.projectionMatrix),O.projectionMatrixInverse.copy(E.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),B(K,O,Ie)};function B(K,_e,ie){ie===null?K.matrix.copy(_e.matrixWorld):(K.matrix.copy(ie.matrixWorld),K.matrix.invert(),K.matrix.multiply(_e.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(_e.projectionMatrix),K.projectionMatrixInverse.copy(_e.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Rr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let Y=null;function ae(K,_e){if(u=_e.getViewerPose(c||a),_=_e,u!==null){const ie=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Ie=!1;ie.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let Pe=0;Pe<ie.length;Pe++){const se=ie[Pe];let ve=null;if(h!==null)ve=h.getViewport(se);else{const le=d.getViewSubImage(f,se);ve=le.viewport,Pe===0&&(e.setRenderTargetTextures(y,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(y))}let W=U[Pe];W===void 0&&(W=new un,W.layers.enable(Pe),W.viewport=new Tt,U[Pe]=W),W.matrix.fromArray(se.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(se.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ve.x,ve.y,ve.width,ve.height),Pe===0&&(O.matrix.copy(W.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(W)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const Pe=d.getDepthInformation(ie[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,r.renderState)}if(Me&&Me.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<ie.length;Pe++){const se=ie[Pe].camera;if(se){let ve=p[se];ve||(ve=new Nc,p[se]=ve);const W=d.getCameraImage(se);ve.sourceTexture=W}}}}for(let ie=0;ie<C.length;ie++){const Ie=w[ie],Me=C[ie];Ie!==null&&Me!==void 0&&Me.update(Ie,_e,c||a)}Y&&Y(K,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),_=null}const be=new Zc;be.setAnimationLoop(ae),this.setAnimationLoop=function(K){Y=K},this.dispose=function(){}}}const hg=new xt,su=new et;su.set(-1,0,0,0,1,0,0,0,1);function dg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,T,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),T=S.envMap,y=S.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(su),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fg(i,e,t,n){let r={},s={};function a(S,T){const y=T.program;n.uniformBlockBinding(S,y,r[S.id])}function o(S,T){let y=r[S.id];y===void 0&&(_(S),y=l(S),r[S.id]=y,S.addEventListener("dispose",m));const C=T.program;n.updateUBOMapping(S,C);const w=e.render.frame;s[S.id]!==w&&(c(S),s[S.id]=w)}function l(S){const T=i.createBuffer(),y=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(S){const T=r[S.id],y=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,x=y.length;w<x;w++){const g=y[w];if(Array.isArray(g))for(let L=0,E=g.length;L<E;L++)u(g[L],w,L,C);else u(g,w,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,T,y,C){if(f(S,T,y,C)===!0){const w=S.__offset,x=S.value;if(Array.isArray(x)){let g=0;for(let L=0;L<x.length;L++){const E=x[L],N=M(E,!0);d(E,S.__data,g),g+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,S.__data)}}function d(S,T,y){typeof S=="number"||typeof S=="boolean"?T[y]=S:S.isMatrix3?(T[y]=S.elements[0],T[y+1]=S.elements[1],T[y+2]=S.elements[2],T[y+3]=0,T[y+4]=S.elements[3],T[y+5]=S.elements[4],T[y+6]=S.elements[5],T[y+7]=0,T[y+8]=S.elements[6],T[y+9]=S.elements[7],T[y+10]=S.elements[8],T[y+11]=0):ArrayBuffer.isView(S)?T.set(S.subarray(0,T.length-y),y):S.toArray(T,y)}function f(S,T,y,C){const w=S.value,x=T+"_"+y;if(Array.isArray(w)){C[x]===void 0&&(C[x]=[]);const g=C[x];let L=!1;for(let E=0;E<w.length;E++)h(w[E],g,E)===!0&&(L=!0);return L}return h(w,C,x)}function h(S,T,y){if(T[y]===void 0)return typeof S=="number"||typeof S=="boolean"?T[y]=S:ArrayBuffer.isView(S)?T[y]=S.slice():T[y]=S.clone(),!0;{const C=T[y];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return T[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function _(S){const T=S.uniforms;let y=0;const C=16;for(let x=0,g=T.length;x<g;x++){const L=Array.isArray(T[x])?T[x]:[T[x]];for(let E=0,N=L.length;E<N;E++){const U=L[E],O=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(T[x])||Array.isArray(U.value);let k=y;for(let D=0,V=O.length;D<V;D++){const G=O[D],B=M(G,I),Y=y%C,ae=Y%B.boundary,be=Y+ae;y+=ae,be!==0&&C-be<B.storage&&(y+=C-be),D===0&&(k=y),y+=B.storage}const q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new q((y-k)/Float32Array.BYTES_PER_ELEMENT),U.__offset=k}}const w=y%C;return w>0&&(y+=C-w),S.__size=y,S.__cache={},this}function M(S,T){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",S),T===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(S){const T=S.target;T.removeEventListener("dispose",m),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);r={},s={}}return{bind:a,update:o,dispose:p}}const pg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function mg(){return Rn===null&&(Rn=new Pc(pg,16,16,xi,jt),Rn.name="DFG_LUT",Rn.minFilter=rn,Rn.magFilter=rn,Rn.wrapS=Vn,Rn.wrapT=Vn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class gg{constructor(e={}){const{canvas:t=Vu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=hn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=h,m=new Set([Ro,Ao,wo]),p=new Set([hn,In,wr,$i,Eo,bo]),S=new Uint32Array(4),T=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let C=null,w=null;const x=[],g=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let N=!1,U=null,O=null,I=null,k=null;this._outputColorSpace=Xt;let q=0,D=0,V=null,G=-1,B=null;const Y=new Tt,ae=new Tt;let be=null;const K=new $e(0);let _e=0,ie=t.width,Ie=t.height,Me=1,ze=null,at=null;const Pe=new Tt(0,0,ie,Ie),se=new Tt(0,0,ie,Ie);let ve=!1;const W=new Cr,le=new Io;let ue=!1,pe=!1;const ce=new xt,Ae=new A,de=new Tt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function ke(){return V===null?Me:1}let P=n;function Ge(b,H){return t.getContext(b,H)}let Ee,Ze,me,st,Oe,Ke,R,v,z,X,ne,he,fe,te,J,ge,F,oe,re,we,Se,Te,Ve;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",De,!1),P===null){const H="webgl2";if(P=Ge(H,b),P===null)throw Ge(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(b){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",De,!1),mt("WebGLRenderer: "+b.message),b}function je(){Ee=new vm(P),Ee.init(),Se=new ag(P,Ee),Ze=new lm(P,Ee,e,Se),me=new rg(P,Ee),Ze.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),O=P.createFramebuffer(),I=P.createFramebuffer(),k=P.createFramebuffer(),st=new ym(P),Oe=new W0,Ke=new sg(P,Ee,me,Oe,Ze,Se,st),R=new xm(E),v=new Ed(P),Te=new am(P,v),z=new Mm(P,v,st,Te),X=new bm(P,z,v,Te,st),oe=new Em(P,Ze,Ke),J=new cm(Oe),ne=new V0(E,R,Ee,Ze,Te,J),he=new dg(E,Oe),fe=new q0,te=new Q0(Ee),F=new sm(E,R,me,X,_,l),ge=new ig(E,X,Ze),Ve=new fg(P,st,Ze,me),re=new om(P,Ee,st),we=new Sm(P,Ee,st),st.programs=ne.programs,E.capabilities=Ze,E.extensions=Ee,E.properties=Oe,E.renderLists=fe,E.shadowMap=ge,E.state=me,E.info=st}M!==hn&&(L=new wm(M,t.width,t.height,o,r,s));const xe=new ug(E,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=Ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(b){b!==void 0&&(Me=b,this.setSize(ie,Ie,!1))},this.getSize=function(b){return b.set(ie,Ie)},this.setSize=function(b,H,j=!0){if(xe.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=b,Ie=H,t.width=Math.floor(b*Me),t.height=Math.floor(H*Me),j===!0&&(t.style.width=b+"px",t.style.height=H+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ie*Me,Ie*Me).floor()},this.setDrawingBufferSize=function(b,H,j){ie=b,Ie=H,Me=j,t.width=Math.floor(b*j),t.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(M===hn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Y)},this.getViewport=function(b){return b.copy(Pe)},this.setViewport=function(b,H,j,$){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,H,j,$),me.viewport(Y.copy(Pe).multiplyScalar(ke()).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,H,j,$){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,H,j,$),me.scissor(ae.copy(se).multiplyScalar(ke()).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(b){me.setScissorTest(ve=b)},this.setOpaqueSort=function(b){ze=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,j=!0){let $=0;if(b){let Z=!1;if(V!==null){const Ce=V.texture.format;Z=m.has(Ce)}if(Z){const Ce=V.texture.type,He=p.has(Ce),Re=F.getClearColor(),Ne=F.getClearAlpha(),Ye=Re.r,tt=Re.g,ut=Re.b;He?(S[0]=Ye,S[1]=tt,S[2]=ut,S[3]=Ne,P.clearBufferuiv(P.COLOR,0,S)):(T[0]=Ye,T[1]=tt,T[2]=ut,T[3]=Ne,P.clearBufferiv(P.COLOR,0,T))}else $|=P.COLOR_BUFFER_BIT}H&&($|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",De,!1),F.dispose(),fe.dispose(),te.dispose(),Ke.dispose(),Oe.dispose(),R.dispose(),X.dispose(),z.dispose(),Te.dispose(),Ve.dispose(),ne.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Q),xe.removeEventListener("sessionend",qe),vt.stop()};function Je(b){b.preventDefault(),tl("WebGLRenderer: Context Lost."),N=!0}function nt(){tl("WebGLRenderer: Context Restored."),N=!1;const b=st.autoReset,H=ge.enabled,j=ge.autoUpdate,$=ge.needsUpdate,Z=ge.type;je(),st.autoReset=b,ge.enabled=H,ge.autoUpdate=j,ge.needsUpdate=$,ge.type=Z}function De(b){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const H=b.target;H.removeEventListener("dispose",gt),Pt(H)}function Pt(b){gn(b),Oe.remove(b)}function gn(b){const H=Oe.get(b).programs;H!==void 0&&(H.forEach(function(j){ne.releaseProgram(j)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,$,Z,Ce){H===null&&(H=Fe);const He=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Re=ir(b,H,j,$,Z);me.setMaterial($,He);let Ne=j.index,Ye=1;if($.wireframe===!0){if(Ne=z.getWireframeAttribute(j),Ne===void 0)return;Ye=2}const tt=j.drawRange,ut=j.attributes.position;let We=tt.start*Ye,ht=(tt.start+tt.count)*Ye;Ce!==null&&(We=Math.max(We,Ce.start*Ye),ht=Math.min(ht,(Ce.start+Ce.count)*Ye)),Ne!==null?(We=Math.max(We,0),ht=Math.min(ht,Ne.count)):ut!=null&&(We=Math.max(We,0),ht=Math.min(ht,ut.count));const Lt=ht-We;if(Lt<0||Lt===1/0)return;Te.setup(Z,$,Re,j,Ne);let yt,St=re;if(Ne!==null&&(yt=v.get(Ne),St=we,St.setIndex(yt)),Z.isMesh)$.wireframe===!0?(me.setLineWidth($.wireframeLinewidth*ke()),St.setMode(P.LINES)):St.setMode(P.TRIANGLES);else if(Z.isLine){let Ht=$.linewidth;Ht===void 0&&(Ht=1),me.setLineWidth(Ht*ke()),Z.isLineSegments?St.setMode(P.LINES):Z.isLineLoop?St.setMode(P.LINE_LOOP):St.setMode(P.LINE_STRIP)}else Z.isPoints?St.setMode(P.POINTS):Z.isSprite&&St.setMode(P.TRIANGLES);if(Z.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))St.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ht=Z._multiDrawStarts,Xe=Z._multiDrawCounts,$t=Z._multiDrawCount,_t=Ne?v.get(Ne).bytesPerElement:1,ui=Oe.get($).currentProgram.getUniforms();for(let kt=0;kt<$t;kt++)ui.setValue(P,"_gl_DrawID",kt),St.render(Ht[kt]/_t,Xe[kt])}else if(Z.isInstancedMesh)St.renderInstances(We,Lt,Z.count);else if(j.isInstancedBufferGeometry){const Ht=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Xe=Math.min(j.instanceCount,Ht);St.renderInstances(We,Lt,Xe)}else St.render(We,Lt)};function oi(b,H,j,$){U!==null&&b.isNodeMaterial&&U.setObject($,b),ue===!0&&J.setState(b,j,!1),b.transparent===!0&&b.side===mn&&b.forceSinglePass===!1?(b.side=Qt,b.needsUpdate=!0,$n(b,H,$),b.side=_i,b.needsUpdate=!0,$n(b,H,$),b.side=mn):$n(b,H,$)}this.compile=function(b,H,j=null){j===null&&(j=b),U!==null&&U.renderStart(b,H,j),w=te.get(j),w.init(H),g.push(w),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),b!==j&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),pe=this.localClippingEnabled,ue=J.init(this.clippingPlanes,pe),ue===!0&&J.setGlobalState(this.clippingPlanes,H),U!==null&&ge.render(w.state.shadowsArray,j,H);const $=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let He=0;He<Ce.length;He++){const Re=Ce[He];oi(Re,j,H,Z),$.add(Re)}else oi(Ce,j,H,Z),$.add(Ce)}),w=g.pop(),U!==null&&U.renderEnd(),$},this.compileAsync=function(b,H,j=null){const $=this.compile(b,H,j);return new Promise(Z=>{function Ce(){if($.forEach(function(He){const Ne=Oe.get(He).currentProgram;(Ne===void 0||Ne.isReady())&&$.delete(He)}),$.size===0){Z(b);return}setTimeout(Ce,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let li=null;function Fr(b){li&&li(b)}function Q(){vt.stop()}function qe(){vt.start()}const vt=new Zc;vt.setAnimationLoop(Fr),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(b){li=b,xe.setAnimationLoop(b),b===null?vt.stop():vt.start()},xe.addEventListener("sessionstart",Q),xe.addEventListener("sessionend",qe),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(b,H);const j=xe.enabled===!0&&xe.isPresenting===!0,$=L!==null&&(V===null||j)&&L.begin(E,V);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(H),H=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,H,V),w=te.get(b,g.length),w.init(H),w.state.textureUnits=Ke.getTextureUnits(),g.push(w),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?le.setFromArrayCamera(H):W.setFromProjectionMatrix(ce,En,H.reversedDepth),pe=this.localClippingEnabled,ue=J.init(this.clippingPlanes,pe),C=fe.get(b,x.length),C.init(),x.push(C),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){const He=E.xr.getDepthSensingMesh();He!==null&&ct(He,H,-1/0,E.sortObjects)}ct(b,H,0,E.sortObjects),C.finish(),U!==null&&U.updateLights(w.state.lightsArray),E.sortObjects===!0&&C.sort(ze,at),Le=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Le&&F.addToRenderList(C,b),this.info.autoReset===!0&&this.info.reset(),ue===!0&&J.beginShadows();const Z=w.state.shadowsArray;if(ge.render(Z,b,H),ue===!0&&J.endShadows(),($&&L.hasRenderPass())===!1){const He=C.opaque,Re=C.transmissive;if(w.setupLights(),H.isArrayCamera){const Ne=H.cameras;if(Re.length>0)for(let Ye=0,tt=Ne.length;Ye<tt;Ye++){const ut=Ne[Ye];Ut(He,Re,b,ut)}Le&&F.render(b);for(let Ye=0,tt=Ne.length;Ye<tt;Ye++){const ut=Ne[Ye];Ct(C,b,ut,ut.viewport)}}else Re.length>0&&Ut(He,Re,b,H),Le&&F.render(b),Ct(C,b,H)}V!==null&&D===0&&(Ke.updateMultisampleRenderTarget(V),Ke.updateRenderTargetMipmap(V)),$&&L.end(E),b.isScene===!0&&b.onAfterRender(E,b,H),Te.resetDefaultState(),G=-1,B=null,g.pop(),g.length>0?(w=g[g.length-1],Ke.setTextureUnits(w.state.textureUnits),ue===!0&&J.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,U!==null&&U.renderEnd()};function ct(b,H,j,$){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){const He=H.isArrayCamera?le:W;if(!b.frustumCulled||b.intersectsFrustum(He)){$&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ce);const Re=X.update(b),Ne=b.material;Ne.visible&&C.push(b,Re,Ne,j,de.z,null,H)}}else if(b.isMesh||b.isLine||b.isPoints){const He=H.isArrayCamera?le:W;if(!b.frustumCulled||b.intersectsFrustum(He)){const Re=X.update(b),Ne=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),de.copy(Re.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(ce)),Array.isArray(Ne)){const Ye=Re.groups;for(let tt=0,ut=Ye.length;tt<ut;tt++){const We=Ye[tt],ht=Ne[We.materialIndex];ht&&ht.visible&&C.push(b,Re,ht,j,de.z,We,H)}}else Ne.visible&&C.push(b,Re,Ne,j,de.z,null,H)}}}const Ce=b.children;for(let He=0,Re=Ce.length;He<Re;He++)ct(Ce[He],H,j,$)}function Ct(b,H,j,$){const{opaque:Z,transmissive:Ce,transparent:He}=b;w.setupLightsView(j),ue===!0&&J.setGlobalState(E.clippingPlanes,j),$&&me.viewport(Y.copy($)),Z.length>0&&on(Z,H,j),Ce.length>0&&on(Ce,H,j),He.length>0&&on(He,H,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ut(b,H,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const We=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new tn(1,1,{generateMipmaps:!0,type:We?jt:hn,minFilter:ni,samples:Math.max(4,Ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Ce=w.state.transmissionRenderTarget[$.id],He=$.viewport||Y;Ce.setSize(He.z*E.transmissionResolutionScale,He.w*E.transmissionResolutionScale);const Re=E.getRenderTarget(),Ne=E.getActiveCubeFace(),Ye=E.getActiveMipmapLevel();E.setRenderTarget(Ce),E.getClearColor(K),_e=E.getClearAlpha(),_e<1&&E.setClearColor(16777215,.5),E.clear(),Le&&F.render(j);const tt=E.toneMapping;E.toneMapping=Wn;const ut=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),ue===!0&&J.setGlobalState(E.clippingPlanes,$),on(b,j,$),Ke.updateMultisampleRenderTarget(Ce),Ke.updateRenderTargetMipmap(Ce),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ht=0,Lt=H.length;ht<Lt;ht++){const yt=H[ht],{object:St,geometry:Ht,material:Xe,group:$t}=yt;if(Xe.side===mn&&St.layers.test($.layers)){const _t=Xe.side;Xe.side=Qt,Xe.needsUpdate=!0,wn(St,j,$,Ht,Xe,$t),Xe.side=_t,Xe.needsUpdate=!0,We=!0}}We===!0&&(Ke.updateMultisampleRenderTarget(Ce),Ke.updateRenderTargetMipmap(Ce))}E.setRenderTarget(Re,Ne,Ye),E.setClearColor(K,_e),ut!==void 0&&($.viewport=ut),E.toneMapping=tt}function on(b,H,j){const $=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ce=b.length;Z<Ce;Z++){const He=b[Z],{object:Re,geometry:Ne,group:Ye}=He;let tt=He.material;tt.allowOverride===!0&&$!==null&&(tt=$),Re.layers.test(j.layers)&&wn(Re,H,j,Ne,tt,Ye)}}function wn(b,H,j,$,Z,Ce){U!==null&&Z.isNodeMaterial&&U.setObject(b,Z),b.onBeforeRender(E,H,j,$,Z,Ce),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(E,H,j,$,b,Ce),Z.transparent===!0&&Z.side===mn&&Z.forceSinglePass===!1?(Z.side=Qt,Z.needsUpdate=!0,E.renderBufferDirect(j,H,$,Z,b,Ce),Z.side=_i,Z.needsUpdate=!0,E.renderBufferDirect(j,H,$,Z,b,Ce),Z.side=mn):E.renderBufferDirect(j,H,$,Z,b,Ce),b.onAfterRender(E,H,j,$,Z,Ce)}function ci(b){let H=0;for(const j of b)j.texture!==null&&H++;return H}function $n(b,H,j){H.isScene!==!0&&(H=Fe);const $=Oe.get(b),Z=w.state.lights,Ce=w.state.shadowsArray,He=Z.state.version,Re=ne.getParameters(b,Z.state,Ce,H,j,w.state.lightProbeGridArray),Ne=ne.getProgramCacheKey(Re);let Ye=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;const tt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=R.get(b.envMap||$.environment,tt),$.envMapRotation=$.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",gt),Ye=new Map,$.programs=Ye,$.programVariants=new Map);let ut=Ye.get(Ne);if(ut!==void 0){if($.currentProgram===ut&&$.lightsStateVersion===He)return Ti(b,Re),ut}else Re.uniforms=ne.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,j,Re),b.onBeforeCompile(Re,E),ut=ne.acquireProgram(Re,Ne),Ye.set(Ne,ut),$.uniforms=Re.uniforms;const We=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=J.uniform),Ti(b,Re),$.needsLights=wi(b),$.lightsStateVersion=He,$.needsLights&&(We.ambientLightColor.value=Z.state.ambient,We.lightProbe.value=Z.state.probe,We.sunLights.value=Z.state.sun,We.sunLightShadows.value=Z.state.sunShadow,We.directionalLights.value=Z.state.directional,We.directionalLightShadows.value=Z.state.directionalShadow,We.spotLights.value=Z.state.spot,We.spotLightShadows.value=Z.state.spotShadow,We.rectAreaLights.value=Z.state.rectArea,We.ltc_1.value=Z.state.rectAreaLTC1,We.ltc_2.value=Z.state.rectAreaLTC2,We.pointLights.value=Z.state.point,We.pointLightShadows.value=Z.state.pointShadow,We.hemisphereLights.value=Z.state.hemi,We.sunShadowMatrix.value=Z.state.sunShadowMatrix,We.sunShadowCascade.value=Z.state.sunShadowCascade,We.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,We.spotLightMatrix.value=Z.state.spotLightMatrix,We.spotLightMap.value=Z.state.spotLightMap,We.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.numLightProbeGrids=ci(w.state.lightProbeGridArray),$.currentProgram=ut,$.uniformsList=null,ut}function Or(b,H,j,$,Z){const Ce=Oe.get(b),He=Ce.currentProgram.id+","+$+","+Z;let Re=Ce.programVariants.get(He);return Re===void 0?(Re=$n(b,H,j),Ce.programVariants.set(He,Re)):(Ce.currentProgram=Re,Ce.uniformsList=null,Ce.outputColorSpace=$,Ce.toneMapping=Z),Re}function bi(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=ys.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Ti(b,H){const j=Oe.get(b);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function ir(b,H,j,$,Z){H.isScene!==!0&&(H=Fe),Ke.resetTextureUnits();const Ce=H.fog,He=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,Re=V===null?E.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:dt.workingColorSpace,Ne=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ye=R.get($.envMap||He,Ne),tt=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ut=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,Lt=!!j.morphAttributes.color;let yt=Wn;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(yt=E.toneMapping);const St=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ht=St!==void 0?St.length:0,Xe=Oe.get($),$t=w.state.lights;if(ue===!0&&(pe===!0||b!==B)){const wt=b===B&&$.id===G;J.setState($,b,wt)}let _t=!1,ui=!1;$.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==$t.state.version||Z.isBatchedMesh&&Xe.batching===!1||!Z.isBatchedMesh&&Xe.batching===!0||Z.isBatchedMesh&&Xe.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Xe.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Xe.instancing===!1||!Z.isInstancedMesh&&Xe.instancing===!0||Z.isSkinnedMesh&&Xe.skinning===!1||!Z.isSkinnedMesh&&Xe.skinning===!0||Z.isInstancedMesh&&Xe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Xe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Xe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Xe.instancingMorph===!1&&Z.morphTexture!==null||Xe.envMap!==Ye||$.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==J.numPlanes||Xe.numIntersection!==J.numIntersection)||Xe.vertexAlphas!==tt||Xe.vertexTangents!==ut||Xe.morphTargets!==We||Xe.morphNormals!==ht||Xe.morphColors!==Lt||Xe.morphTargetsCount!==Ht||Xe.numLightProbeGrids!==ci(w.state.lightProbeGridArray)?_t=!0:(Xe.outputColorSpace!==Re||Xe.toneMapping!==yt)&&(ui=!0):(_t=!0,Xe.__version=$.version);let kt=Xe.currentProgram;(_t===!0||ui===!0)&&(kt=ui===!0?Or($,H,Z,Re,yt):$n($,H,Z),U&&$.isNodeMaterial&&U.onUpdateProgram($,kt,Xe));let Br=!1,Zn=!1,hi=!1;const ft=kt.getUniforms(),Bt=Xe.uniforms;if(me.useProgram(kt.program)&&(Br=!0,Zn=!0,hi=!0),$.id!==G&&(G=$.id,Zn=!0),Br||B!==b){me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(P,"projectionMatrix",b.projectionMatrix),ft.setValue(P,"viewMatrix",b.matrixWorldInverse);const Ft=ft.map.cameraPosition;Ft!==void 0&&Ft.setValue(P,Ae.setFromMatrixPosition(b.matrixWorld)),Ze.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ft.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Zn=!0,hi=!0)}if(Xe.needsLights&&($t.state.sunShadowMap.length>0&&ft.setValue(P,"sunShadowMap",$t.state.sunShadowMap,Ke),$t.state.directionalShadowMap.length>0&&ft.setValue(P,"directionalShadowMap",$t.state.directionalShadowMap,Ke),$t.state.spotShadowMap.length>0&&ft.setValue(P,"spotShadowMap",$t.state.spotShadowMap,Ke),$t.state.pointShadowMap.length>0&&ft.setValue(P,"pointShadowMap",$t.state.pointShadowMap,Ke)),Z.isSkinnedMesh){ft.setOptional(P,Z,"bindMatrix"),ft.setOptional(P,Z,"bindMatrixInverse");const wt=Z.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ft.setValue(P,"boneTexture",wt.boneTexture,Ke))}Z.isBatchedMesh&&(ft.setOptional(P,Z,"batchingTexture"),ft.setValue(P,"batchingTexture",Z._matricesTexture,Ke),ft.setOptional(P,Z,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",Z._indirectTexture,Ke),ft.setOptional(P,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",Z._colorsTexture,Ke));const _n=j.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&oe.update(Z,j,kt),(Zn||Xe.receiveShadow!==Z.receiveShadow)&&(Xe.receiveShadow=Z.receiveShadow,ft.setValue(P,"receiveShadow",Z.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(Bt.envMapIntensity.value=H.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=mg()),Zn){if(ft.setValue(P,"toneMappingExposure",E.toneMappingExposure),Xe.needsLights&&rr(Bt,hi),Ce&&$.fog===!0&&he.refreshFogUniforms(Bt,Ce),he.refreshMaterialUniforms(Bt,$,Me,Ie,w.state.transmissionRenderTarget[b.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){const wt=y;let Ft=0;for(const Fn of w.state.lightProbeGridArray)Fn.texture!==null&&(wt.textures[Ft]=Fn.texture,wt.min[Ft]=Fn.boundingBox.min,wt.max[Ft]=Fn.boundingBox.max,wt.resolution[Ft]=Fn.resolution,Ft++);for(const Fn in wt)wt[Fn].length=Ft;Bt.probesSH.value=wt.textures,Bt.probesMin.value=wt.min,Bt.probesMax.value=wt.max,Bt.probesResolution.value=wt.resolution}ys.upload(P,bi(Xe),Bt,Ke)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ys.upload(P,bi(Xe),Bt,Ke),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ft.setValue(P,"center",Z.center),ft.setValue(P,"modelViewMatrix",Z.modelViewMatrix),ft.setValue(P,"normalMatrix",Z.normalMatrix),ft.setValue(P,"modelMatrix",Z.matrixWorld),$.uniformsGroups!==void 0){const wt=$.uniformsGroups;for(let Ft=0,Fn=wt.length;Ft<Fn;Ft++){const Yo=wt[Ft];Ve.update(Yo,kt),Ve.bind(Yo,kt)}}return kt}function rr(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.sunLights.needsUpdate=H,b.sunLightShadows.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function wi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(b,H,j){const $=Oe.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Oe.get(b.texture).__webglTexture=H,Oe.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const j=Oe.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,j=0){V=b,q=H,D=j;let $=null,Z=!1,Ce=!1;if(b){const Re=Oe.get(b);if(Re.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(P.FRAMEBUFFER,Re.__webglFramebuffer),Y.copy(b.viewport),ae.copy(b.scissor),be=b.scissorTest,me.viewport(Y),me.scissor(ae),me.setScissorTest(be),G=-1;return}else if(Re.__webglFramebuffer===void 0)Ke.setupRenderTarget(b);else if(Re.__hasExternalTextures)Ke.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const tt=b.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&Oe.has(tt)&&(b.width!==tt.image.width||b.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(b)}}const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);const Ye=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?$=Ye[H][j]:$=Ye[H],Z=!0):b.samples>0&&Ke.useMultisampledRTT(b)===!1?$=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?$=Ye[j]:$=Ye,Y.copy(b.viewport),ae.copy(b.scissor),be=b.scissorTest}else Y.copy(Pe).multiplyScalar(Me).floor(),ae.copy(se).multiplyScalar(Me).floor(),be=ve;if(j!==0&&($=O),me.bindFramebuffer(P.FRAMEBUFFER,$)&&me.drawBuffers(b,$),me.viewport(Y),me.scissor(ae),me.setScissorTest(be),Z){const Re=Oe.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,j)}else if(Ce){const Re=H;for(let Ne=0;Ne<b.textures.length;Ne++){const Ye=Oe.get(b.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,Ye.__webglTexture,j,Re)}}else if(b!==null&&j!==0){const Re=Oe.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Re.__webglTexture,j)}G=-1};function sr(b){const H=Oe.get(b);return(H.__readFormat!==b.format||H.__readType!==b.type)&&(H.__readFormat=b.format,H.__readType=b.type,H.__formatReadable=Ze.textureFormatReadable(b.format),H.__typeReadable=Ze.textureTypeReadable(b.type)),H}this.readRenderTargetPixels=function(b,H,j,$,Z,Ce,He,Re=0){if(!(b&&b.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(Ne=Ne[He],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){me.bindFramebuffer(P.FRAMEBUFFER,Ne);try{const Ye=b.textures[Re],tt=Ye.format,ut=Ye.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re);const We=sr(Ye);if(We.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-$&&j>=0&&j<=b.height-Z&&P.readPixels(H,j,$,Z,Se.convert(tt),Se.convert(ut),Ce)}finally{const Ye=V!==null?Oe.get(V).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,H,j,$,Z,Ce,He,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(Ne=Ne[He],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(H>=0&&H<=b.width-$&&j>=0&&j<=b.height-Z){me.bindFramebuffer(P.FRAMEBUFFER,Ne);const Ye=b.textures[Re],tt=Ye.format,ut=Ye.type;b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re);const We=sr(Ye);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ht),P.bufferData(P.PIXEL_PACK_BUFFER,Ce.byteLength,P.STREAM_READ),P.readPixels(H,j,$,Z,Se.convert(tt),Se.convert(ut),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);const Lt=V!==null?Oe.get(V).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Lt);const yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wu(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ht),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ce),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(ht),P.deleteSync(yt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,j=0){const $=Math.pow(2,-j),Z=Math.floor(b.image.width*$),Ce=Math.floor(b.image.height*$),He=H!==null?H.x:0,Re=H!==null?H.y:0;Ke.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,He,Re,Z,Ce),me.unbindTexture()},this.copyTextureToTexture=function(b,H,j=null,$=null,Z=0,Ce=0){let He,Re,Ne,Ye,tt,ut,We,ht,Lt;const yt=b.isCompressedTexture?b.mipmaps[Ce]:b.image;if(j!==null)He=j.max.x-j.min.x,Re=j.max.y-j.min.y,Ne=j.isBox3?j.max.z-j.min.z:1,Ye=j.min.x,tt=j.min.y,ut=j.isBox3?j.min.z:0;else{const ft=Math.pow(2,-Z);He=Math.floor(yt.width*ft),Re=Math.floor(yt.height*ft),b.isDataArrayTexture?Ne=yt.depth:b.isData3DTexture?Ne=Math.floor(yt.depth*ft):Ne=1,Ye=0,tt=0,ut=0}$!==null?(We=$.x,ht=$.y,Lt=$.z):(We=0,ht=0,Lt=0);const St=Se.convert(H.format),Ht=Se.convert(H.type);let Xe;H.isData3DTexture?(Ke.setTexture3D(H,0),Xe=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ke.setTexture2DArray(H,0),Xe=P.TEXTURE_2D_ARRAY):(Ke.setTexture2D(H,0),Xe=P.TEXTURE_2D),me.activeTexture(P.TEXTURE0),me.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),me.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),me.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);const $t=me.getParameter(P.UNPACK_ROW_LENGTH),_t=me.getParameter(P.UNPACK_IMAGE_HEIGHT),ui=me.getParameter(P.UNPACK_SKIP_PIXELS),kt=me.getParameter(P.UNPACK_SKIP_ROWS),Br=me.getParameter(P.UNPACK_SKIP_IMAGES);me.pixelStorei(P.UNPACK_ROW_LENGTH,yt.width),me.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt.height),me.pixelStorei(P.UNPACK_SKIP_PIXELS,Ye),me.pixelStorei(P.UNPACK_SKIP_ROWS,tt),me.pixelStorei(P.UNPACK_SKIP_IMAGES,ut);const Zn=b.isDataArrayTexture||b.isData3DTexture,hi=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const ft=Oe.get(b),Bt=Oe.get(H),_n=Oe.get(ft.__renderTarget),wt=Oe.get(Bt.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,_n.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ft=0;Ft<Ne;Ft++)Zn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.get(b).__webglTexture,Z,ut+Ft),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Oe.get(H).__webglTexture,Ce,Lt+Ft)),P.blitFramebuffer(Ye,tt,Ye+He,tt+Re,We,ht,We+He,ht+Re,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||Oe.has(b)){const ft=Oe.get(b),Bt=Oe.get(H);me.bindFramebuffer(P.READ_FRAMEBUFFER,I),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let _n=0;_n<Ne;_n++)Zn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ft.__webglTexture,Z,ut+_n):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ft.__webglTexture,Z),hi?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bt.__webglTexture,Ce,Lt+_n):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bt.__webglTexture,Ce),Z!==0?P.blitFramebuffer(Ye,tt,Ye+He,tt+Re,We,ht,We+He,ht+Re,P.COLOR_BUFFER_BIT,P.NEAREST):hi?P.copyTexSubImage3D(Xe,Ce,We,ht,Lt+_n,Ye,tt,He,Re):P.copyTexSubImage2D(Xe,Ce,We,ht,Ye,tt,He,Re);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else hi?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Xe,Ce,We,ht,Lt,He,Re,Ne,St,Ht,yt.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(Xe,Ce,We,ht,Lt,He,Re,Ne,St,yt.data):P.texSubImage3D(Xe,Ce,We,ht,Lt,He,Re,Ne,St,Ht,yt):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ce,We,ht,He,Re,St,Ht,yt.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ce,We,ht,yt.width,yt.height,St,yt.data):P.texSubImage2D(P.TEXTURE_2D,Ce,We,ht,He,Re,St,Ht,yt);me.pixelStorei(P.UNPACK_ROW_LENGTH,$t),me.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t),me.pixelStorei(P.UNPACK_SKIP_PIXELS,ui),me.pixelStorei(P.UNPACK_SKIP_ROWS,kt),me.pixelStorei(P.UNPACK_SKIP_IMAGES,Br),Ce===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&P.generateMipmap(Xe),me.unbindTexture()},this.initRenderTarget=function(b){Oe.get(b).__webglFramebuffer===void 0&&Ke.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ke.setTextureCube(b,0):b.isData3DTexture?Ke.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ke.setTexture2DArray(b,0):Ke.setTexture2D(b,0),me.unbindTexture()},this.resetState=function(){q=0,D=0,V=null,me.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class _g{constructor(e,t=!1){this.mobile=e,this.level=t?2:e?1:0}mobile;level;duration=0;slowDuration=0;fastDuration=0;samples=0;upgradeDelay=10;stableSeconds=0;trialWindows=0;slowWindows=0;reset(){this.duration=this.slowDuration=this.fastDuration=this.samples=0,this.stableSeconds=0,this.slowWindows=0}sample(e){if(e<=0||e>=1)return this.reset(),!1;if(this.duration+=e,this.samples++,e>(this.mobile?.038:.027)&&(this.slowDuration+=e),e<.021&&(this.fastDuration+=e),this.duration<1.8||this.samples<12)return!1;const t=this.slowDuration/this.duration,n=this.fastDuration/this.duration,r=this.duration;return this.duration=this.slowDuration=this.fastDuration=this.samples=0,this.slowWindows=t>.3?this.slowWindows+1:0,this.slowWindows>=2&&this.level<3?(this.trialWindows>0&&(this.upgradeDelay=Math.min(60,this.upgradeDelay*2)),this.trialWindows=0,this.level++,this.stableSeconds=0,!0):(this.trialWindows>0&&this.trialWindows--,this.stableSeconds=n>.9?this.stableSeconds+r:0,this.stableSeconds>=Math.max(18,this.upgradeDelay)&&this.level>0?(this.level--,this.trialWindows=5,this.stableSeconds=0,!0):!1)}}function xg(i,e){if(i.length<10||i.some(n=>!Number.isFinite(n)||n<=0))return!1;const t=[...i].sort((n,r)=>n-r);return t[Math.floor(t.length*.9)]<=(e?25:22)}function vg(i,e){if(!new URLSearchParams(location.search).has("perf"))return{begin(){},end(f,h){}};const n=document.createElement("output");n.className="render-metrics",n.dataset.noTranslate="",e.append(n);const r=i.getContext(),s=r.getExtension("EXT_disjoint_timer_query_webgl2"),a=[];let o=null,l=0,c=performance.now();const u=[];let d=0;return i.info.autoReset=!1,{begin(){if(i.info.reset(),!s)return;const f=a[0];f&&r.getQueryParameter(f,r.QUERY_RESULT_AVAILABLE)&&(r.getParameter(s.GPU_DISJOINT_EXT)||(l=r.getQueryParameter(f,r.QUERY_RESULT)/1e6),r.deleteQuery(f),a.shift()),a.length<4&&(o=r.createQuery(),o&&r.beginQuery(s.TIME_ELAPSED_EXT,o))},end(f,h){if(o&&s&&(r.endQuery(s.TIME_ELAPSED_EXT),a.push(o),o=null),u.push(f*1e3),d+=h,performance.now()-c<1e3)return;u.sort((m,p)=>m-p);const _=u[Math.floor(u.length*.95)],M=d/u.length;e.dataset.frameP95=_.toFixed(1),e.dataset.cpuMs=M.toFixed(1),e.dataset.gpuMs=l.toFixed(1),n.textContent=`${e.dataset.quality} · DPR ${e.dataset.renderRatio}
Frame p95 ${_.toFixed(1)} ms · CPU ${M.toFixed(1)} ms · GPU ${l?l.toFixed(1):"n/a"} ms
${i.info.render.calls} draws · ${Math.round(i.info.render.triangles/1e3)}k triangles (all passes)`,u.length=0,d=0,c=performance.now()}}}const Es={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mg=new zo(-1,1,1,-1,0,1);class Sg extends Gt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const yg=new Sg;class Ho{constructor(e){this._mesh=new Be(yg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Eg extends nr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qi.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ho(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rc extends nr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class bg extends nr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Tg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Eg(Es),this.copyPass.material.blending=gi,this.timer=new vd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}rc!==void 0&&(a instanceof rc?n=!0:a instanceof bg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wg extends nr{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Ag={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ji extends nr{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(s,a,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new tn(s,a,{type:jt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new tn(s,a,{type:jt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=Ag;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ye(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qi.clone(Es.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader,premultipliedAlpha:!0,blending:bs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new sn,this._fsQuad=new Ho(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ye(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const r=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;r.push((a*o+(a+1)*l)/c),s.push(c)}return new Jt({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ji.BlurDirectionX=new ye(1,0);ji.BlurDirectionY=new ye(0,1);const fs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Rg extends nr{constructor(){super(),this.isOutputPass=!0,this.uniforms=Qi.clone(fs.uniforms),this.material=new qc({name:fs.name,uniforms:this.uniforms,vertexShader:fs.vertexShader,fragmentShader:fs.fragmentShader}),this._fsQuad=new Ho(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===go?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_o?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===So?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===vo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Cg extends wc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new bt;e.deleteAttribute("uv");const t=new lt({side:Qt}),n=new lt,r=new Gs(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Be(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new dn(e,n,6),o=new Et;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new Be(e,Gi(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Be(e,Gi(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new Be(e,Gi(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new Be(e,Gi(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new Be(e,Gi(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const h=new Be(e,Gi(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Gi(i){return new hd({color:0,emissive:16777215,emissiveIntensity:i})}const pr=new A;function pn(i,e,t,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;pr.copy(e),pr[n]=0,pr.normalize();const c=.5*a/(a+o),u=1-pr.angleTo(i)/l;return Math.sign(pr[t])===1?u*c:o/(a+o)+c+c*(1-u)}class ri extends bt{constructor(e=1,t=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new A,c=new A,u=new A(e,t,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,_=d.length/6,M=new A,m=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*s,d[p+1]=u.y*Math.sign(l.y)+c.y*s,d[p+2]=u.z*Math.sign(l.z)+c.z*s,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/_)){case 0:M.set(1,0,0),h[S+0]=pn(M,c,"z","y",s,n),h[S+1]=1-pn(M,c,"y","z",s,t);break;case 1:M.set(-1,0,0),h[S+0]=1-pn(M,c,"z","y",s,n),h[S+1]=1-pn(M,c,"y","z",s,t);break;case 2:M.set(0,1,0),h[S+0]=1-pn(M,c,"x","z",s,e),h[S+1]=pn(M,c,"z","x",s,n);break;case 3:M.set(0,-1,0),h[S+0]=1-pn(M,c,"x","z",s,e),h[S+1]=1-pn(M,c,"z","x",s,n);break;case 4:M.set(0,0,1),h[S+0]=1-pn(M,c,"x","y",s,e),h[S+1]=1-pn(M,c,"y","x",s,t);break;case 5:M.set(0,0,-1),h[S+0]=pn(M,c,"x","y",s,e),h[S+1]=1-pn(M,c,"y","x",s,t);break}}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.segments,e.radius)}}function er(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new Gt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){const d=i[u];let f=0,h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const _ in d.attributes){if(!n.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+_+'" attribute exists among all geometries, or in none of them.'),null;s[_]===void 0&&(s[_]=[]),s[_].push(d.attributes[_]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const _ in d.morphAttributes){if(!r.has(_))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[_].length!==i[0].morphAttributes[_].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+_+'" morph attribute.'),null;a[_]===void 0&&(a[_]=[]),a[_].push(d.morphAttributes[_]),h++}if(h!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let _;if(t)_=d.index.count;else if(d.attributes.position!==void 0)_=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,_,u),c+=_}}if(t){let u=0;const d=[];for(let f=0;f<i.length;++f){const h=i[f].index;for(let _=0;_<h.count;++_)d.push(h.getX(_)+u);u+=i[f].attributes.position.count}l.setIndex(d)}for(const u in s){const d=sc(s[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(const u in a){const d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){const h=[];for(let M=0;M<a[u].length;++M)h.push(a[u][M][f]);const _=sc(h);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function sc(i){let e,t,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new qn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const d=l/t;for(let f=0,h=u.count;f<h;f++)for(let _=0;_<t;_++){const M=u.getComponent(f,_);o.setComponent(f+d,_,M)}}else a.set(u.array,l);l+=u.count*t}return r!==void 0&&(o.gpuType=r),o}const Yn=4832255,ho=16730421,it=[{id:"identidad",code:"ID",title:"Identidad",count:3,start:6,end:0,x:-2.09,route:"#sobre-mi"},{id:"proyectos",code:"PRJ",title:"Proyectos",count:5,start:-2,end:-11,x:2.09,route:"#archivo/proyectos"},{id:"experiencia",code:"EXP",title:"Experiencia",count:3,start:-13,end:-19,x:-2.09,route:"#archivo/experiencia"},{id:"educacion",code:"EDU",title:"Educación",count:3,start:-21,end:-27,x:2.09,route:"#archivo/educacion"},{id:"premios",code:"AWD",title:"Premios",count:3,start:-29,end:-36,x:-2.09,route:"#archivo/premios"},{id:"aptitudes",code:"SKL",title:"Aptitudes",count:3,start:-39,end:-48,x:2.09,route:"#archivo/aptitudes"}].map(i=>({...i,start:i.start-6,end:i.end-6})),nn=it.flatMap((i,e)=>Array.from({length:i.count},(t,n)=>({id:`${i.code}-${n+1}`,zoneIndex:e,slot:n}))),ac="hugo-recovery-v1";function Pg(i){const e=new Set;let t=!1,n=!1,r=!1,s=!!i;try{const l=JSON.parse(i?.getItem(ac)||"null");if(l?.version===1&&Array.isArray(l.rescued)){for(const c of nn)l.rescued.includes(c.id)&&e.add(c.id);t=l.greeted===!0,n=l.hasPda===!0||t,r=l.accessUnlocked===!0||l.accessUnlocked===void 0&&(n||e.size>0)}}catch{s=!1}const a=new Set;function o(){try{i?.setItem(ac,JSON.stringify({version:1,rescued:[...e],greeted:t,hasPda:n,accessUnlocked:r})),s=!!i}catch{s=!1}a.forEach(l=>l())}return{get count(){return e.size},get complete(){return e.size===nn.length},get greeted(){return t},get hasPda(){return n},get accessUnlocked(){return r},get saved(){return s},has(l){return e.has(l)},zoneCount(l){return nn.filter(c=>c.zoneIndex===l&&e.has(c.id)).length},rescue(l){return!r||e.has(l)||!nn.some(c=>c.id===l)?!1:(e.add(l),o(),!0)},greet(){t=!0,n=!0,o()},unlockAccess(){n&&!r&&(r=!0,o())},reset(){e.clear(),t=!1,n=!1,r=!1,o()},subscribe(l){return a.add(l),()=>a.delete(l)}}}const Dn={cyan:7395803,red:14894944,violet:8682984};function bn(i,e=1.8){return new lt({color:i,emissive:i,emissiveIntensity:e,roughness:.35,metalness:.3})}function Us(i,e="#8acbd2",t=5){const n=document.createElement("canvas");n.width=1024,n.height=256;const r=new Pr(n);r.userData={labelText:i,labelColor:e};function s(o){const l=o.image.getContext("2d"),c=fo(o.userData.labelText).toLocaleUpperCase();l.globalAlpha=1,l.fillStyle="#080f16",l.fillRect(0,0,1024,256),l.fillStyle=o.userData.labelColor,l.fillRect(32,32,6,192);let u=64;for(l.font=`500 ${u}px "IBM Plex Mono", monospace`;l.measureText(c).width>910&&u>24;)l.font=`500 ${--u}px "IBM Plex Mono", monospace`;l.fillText(c,70,123),l.font='24px "IBM Plex Mono", monospace',l.globalAlpha=.65,l.fillText(ms("architecture"),72,190),o.userData.language=$o(),o.needsUpdate=!0}s(r),r.colorSpace=Xt;const a=new Be(new Tn(t,t/4),new sn({map:r,side:mn}));return a.onBeforeRender=o=>{const l=a.material.map;l.userData.language!==$o()&&s(l);const c=Math.min(8,o.capabilities.getMaxAnisotropy());l.anisotropy!==c&&(l.anisotropy=c,l.needsUpdate=!0)},a}function ee(i,e,t,n){const r=new Be(new bt(...e),n);return r.position.set(...t),i.add(r),r}function au(){const i=new At,e=new lt({color:1514787,metalness:.65,roughness:.4}),t=new lt({color:5661034,metalness:.8,roughness:.38}),n=new lt({color:10975817,metalness:.8,roughness:.4}),r=new Be(new ri(.85,.68,.65,2,.045),e);i.add(r);const s=bn(Yn,.85),a=new Be(new ri(.7,.24,.045,2,.015),new lt({color:198152,roughness:.32}));a.position.set(0,.025,.325),i.add(a);for(let M=0;M<8;M++)ee(i,[.035,M%3===0?.095:.045,.018],[-.245+M*.07,.03,.356],s);ee(i,[.23,.018,.018],[-.14,-.23,.333],s),ee(i,[.1,.018,.018],[.23,-.23,.333],t);const o=ee(i,[.035,.36,.018],[.29,.1,.337],s);o.rotation.z=-.24,ee(i,[.16,.025,.22],[.2,.345,-.12],t);for(const M of[-.37,.37]){ee(i,[.035,.58,.025],[M,0,.328],t);for(let m=0;m<5;m++)ee(i,[.025,.05,.07],[M,-.22+m*.11,-.325],n)}for(let M=0;M<4;M++)ee(i,[.26,.012,.04],[-.08,.343,-.2+M*.1],t);for(const M of[-.34,.34])for(const m of[-.27,.27])ee(i,[.035,.035,.012],[M,m,.346],t);for(const M of[-.26,.26])ee(i,[.15,.09,.3],[M,-.37,.04],e);for(const M of[-.337,.337]){ee(i,[.58,.19,.02],[0,.06,M],e);for(let p=0;p<8;p++)ee(i,[.035,.045+p%3*.025,.025],[-.245+p*.07,.06,M*1.04],s);const m=ee(i,[.025,.29,.025],[.27,.015,M*1.04],s);m.rotation.z=-.3,ee(i,[.22,.018,.025],[-.12,-.22,M*1.04],s)}for(const M of[-.431,.431]){ee(i,[.018,.022,.4],[M,.1,0],s);for(let m=0;m<3;m++)ee(i,[.018,.08,.025],[M,.06,-.14+m*.14],s)}const l=new lt({color:3160643,metalness:.65,roughness:.55}),c=new dn(new bt(.2,.025,.045),l,28);c.instanceMatrix.setUsage(Co),c.frustumCulled=!1,i.add(c);const u=new Et;for(const M of[-.29,.29]){const m=new Be(new ri(.19,.14,.52,2,.055),e);m.position.set(M,-.345,0),i.add(m)}let d=0;function f(M){d+=M;for(let m=0;m<28;m++){const p=(m%14/14+d/1.15)*Math.PI*2;u.position.set(m<14?-.29:.29,-.345+Math.cos(p)*.056,Math.sin(p)*.225),u.rotation.x=-Math.atan2(.056*Math.sin(p),.225*Math.cos(p)),u.updateMatrix(),c.setMatrixAt(m,u.matrix)}c.instanceMatrix.needsUpdate=!0}f(0);const h=new Gs(Yn,.65,3,2);h.position.set(0,.35,.7),i.add(h);const _=new Map;for(const M of[...i.children]){if(!(M instanceof Be)||M instanceof dn||Array.isArray(M.material))continue;M.updateMatrix();const m=(M.geometry.index?M.geometry.toNonIndexed():M.geometry.clone()).applyMatrix4(M.matrix),p=_.get(M.material)??[];p.push(m),_.set(M.material,p),M.removeFromParent(),M.geometry.dispose()}for(const[M,m]of _){const p=er(m,!1);p&&i.add(new Be(p,M)),m.forEach(S=>S.dispose())}return{root:i,core:s,light:h,animate:f}}class Vs extends Be{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,r=t.color!==void 0?new $e(t.color):new $e(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||Vs.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new kn,d=new A,f=new A,h=new A,_=new xt,M=new A(0,0,-1),m=new Tt,p=new A,S=new A,T=new Tt,y=new xt,C=new tn(s,a,{samples:c,type:jt}),w=new Jt({name:l.name!==void 0?l.name:"unspecified",uniforms:Qi.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=C.texture,w.uniforms.color.value=r,w.uniforms.textureMatrix.value=y,this.material=w,this.onBeforeRender=function(x,g,L){const E=this.getReflectionCamera(L);if(f.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(L.matrixWorld),_.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(_),p.subVectors(f,h),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(f),_.extractRotation(L.matrixWorld),M.set(0,0,-1),M.applyMatrix4(_),M.add(h),S.subVectors(f,M),S.reflect(d).negate(),S.add(f),E.position.copy(p),E.up.set(0,1,0),E.up.applyMatrix4(_),E.up.reflect(d),E.lookAt(S),E.far=L.far,E.updateMatrixWorld(),E.projectionMatrix.copy(L.projectionMatrix),E.projectionMatrix.elements[8]*=-1,E.projectionMatrix.elements[12]*=-1,y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(E.projectionMatrix),y.multiply(E.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(E.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const U=E.projectionMatrix;E.isOrthographicCamera?(T.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],T.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],T.z=-L.far,T.w=1):(T.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],T.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],T.z=-1,T.w=(1+U.elements[10])/U.elements[14]),m.multiplyScalar(2/m.dot(T)),U.elements[2]=m.x,U.elements[6]=m.y,E.isOrthographicCamera?(U.elements[10]=m.z-o,U.elements[14]=m.w-1):(U.elements[10]=m.z+1-o,U.elements[14]=m.w),n.visible=!1;const O=x.getRenderTarget(),I=x.xr.enabled,k=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(C),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(g,E),x.xr.enabled=I,x.shadowMap.autoUpdate=k,x.setRenderTarget(O);const q=L.viewport;q!==void 0&&x.state.viewport(q),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return C},this.dispose=function(){C.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let g=this._reflectionCameras.get(x);return g===void 0&&(g=x.clone(),this._reflectionCameras.set(x,g)),g}}}Vs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function an(i){const e=Kt.clamp((10-i)/72,0,1);return-.12-Math.sin(e*Math.PI*3)**2*.72}function Er(i,e){let t=Math.max(an(i-e),an(i),an(i+e));for(const n of[8,-5,-18,-31,-44,-55,-61]){const r=Math.max(0,Math.abs(i-n)-e-.1);r<.25&&(t=Math.max(t,an(n)+.06-r*.4))}return t}function Lg(i,e){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),r=n.createImageData(128,128);for(let g=0;g<r.data.length;g+=4){const L=110+Math.sin(g*12.9898)*22;r.data[g]=r.data[g+1]=r.data[g+2]=L,r.data[g+3]=255}n.putImageData(r,0,0);const s=new Pr(t);s.wrapS=s.wrapT=Ts,s.repeat.set(4,24);const a=new lt({color:1054752,metalness:.08,roughness:.42,bumpMap:s,bumpScale:.014}),o=new lt({color:2371902,metalness:.65,roughness:.23}),l=new lt({color:6582654,metalness:.9,roughness:.23}),c=new lt({color:10051899,metalness:.85,roughness:.3}),u=new lt({color:730150,metalness:.35,roughness:.48}),d=new lt({color:592137,metalness:.05,roughness:.95}),f=bn(Dn.cyan,.38),h=bn(Dn.red,.65),_=(g,L,E,N=40,U=8,O=i)=>{const I=new Be(new qi(new Vi(g),N,L,U,!1),E);return O.add(I),I};for(let g=0;g<19;g++){const L=(g-9)*.38,E=Array.from({length:100},(N,U)=>{const O=10-U/99*72;return new A(L,an(O)-.2,O)});_(E,.185,g%5===0?o:a,e?80:140,8),g%3===0&&_(E.map(N=>N.clone().add(new A(0,.184,0))),.012,g===0?h:f,80,3)}for(const g of[8,-5,-18,-31,-44,-55,-61]){const L=an(g);ee(i,[7.4,.09,.19],[0,L+.015,g],o),ee(i,[7.4,.12,.3],[0,L-.58,g],a);for(const E of[-3.65,3.65]){ee(i,[.12,.65,.3],[E,L-.28,g],o);const N=new Be(new qt(.085,.085,.05,8),l);N.position.set(E,L+.1,g),i.add(N)}}for(const g of[10,-62]){const L=new Be(new ri(8.1,1.3,1.6,2,.12),a);L.position.set(0,-.7,g),i.add(L),ee(i,[8.4,.18,2],[0,-1.4,g],o);for(let E=0;E<19;E++)ee(i,[.22,.15,.8],[(E-9)*.38,-.05,g],c)}for(const g of[8,-5,-18,-31,-44]){const L=an(g);for(const E of[-3.65,3.65])ee(i,[.09,.012,.018],[E,L+.13,g],d),ee(i,[.018,.012,.09],[E,L+.131,g],d)}for(const g of[9.4,-61.4])for(let L=0;L<19;L++){const E=(L-9)*.38;for(let N=0;N<4;N++){const U=new Be(new Pn(.195,.015,3,8),a);U.position.set(E,an(g)-.2,g+N*.1),i.add(U)}}ee(i,[27,.7,39],[0,17,-25],o),ee(i,[25,.14,37],[0,16.58,-25],u);for(let g=0;g<23;g++)ee(i,[17,.7,.16],[0,16.15,-8-g*1.5],l);for(const g of[-11,11]){ee(i,[.12,.08,37],[g,16.45,-25],f);for(let L=-9;L>-43;L-=6)ee(i,[1.7,.3,2.5],[g,16.15,L],a),ee(i,[.2,2.8,.2],[g,18.5,L],l)}for(let g=0;g<6;g++){const L=-9+g*.45;_([new A(L,15,16),new A(L-4,12,0),new A(L-8,13,-21),new A(-24,5,-43)],.18,g%3?a:o,42)}for(const g of[-5,5])_([new A(g,7,-58),new A(g*2,12,-49),new A(g*2,14,-26),new A(g*3,10,-12)],.3,c,36,10);for(const g of[-1,1]){for(let L=0;L<(e?3:5);L++){const E=g*(20+L*.3);_([new A(E,24,25),new A(E,22.9,10),new A(E+g*.5,23.7,-6),new A(E,22.8,-26),new A(E,23.6,-47),new A(g*29,18,-61)],.1,L===0?o:a,e?32:48,6)}for(const L of[24,9,-7,-27,-47]){ee(i,[2.5,.18,.35],[g*20.6,23.9,L],l);for(const E of[g*19.4,g*21.8])ee(i,[.12,.7,.18],[E,24.2,L],o)}}ee(i,[15,.6,110],[-30.5,25,-18],o),ee(i,[53,.6,110],[11.5,25,-18],o),ee(i,[8,.6,73],[-19,25,-36.5],o),ee(i,[8,.6,27],[-19,25,23.5],o);for(let g=0;g<12;g++){const L=g%2?-1:1;ee(i,[.75,.18,1.1],[-19+L*3.8,24.65,.5+Math.floor(g/2)*1.7],l).rotation.set(L*.35,g*.23,L*.45),ee(i,[.14,.04,.5],[-19+L*3.65,24.5,.5+Math.floor(g/2)*1.7],d)}const M=ee(i,[3.6,.25,2],[-6.5,8.8,-8],d);M.rotation.z=-.18;for(let g=0;g<5;g++)_([new A(-16+g*.22,24.6,5),new A(-12+g*.2,17,1),new A(-7+g*.24,9,-8)],.065,g%2?a:c,24,5),_([new A(-7+g*.24,9,-8),new A(-6.8+g*.24,8.35,-7.8)],.035,c,3,5);ee(i,[76,28,1],[0,11,36],o);for(let g=28;g>-70;g-=9){g===1?(ee(i,[12,.75,.5],[-29,24.25,g],l),ee(i,[50,.75,.5],[10,24.25,g],l)):ee(i,[70,.75,.5],[0,24.25,g],l);for(const L of[-30,30])ee(i,[.8,5,.9],[L,22,g],a)}for(let g=0;g<28;g++)ee(i,[18,.12,.14],[21,14+g*.26,35.4],a),ee(i,[18,.12,.14],[-21,14+g*.26,35.4],a);const m=new At;m.position.z=-6,i.add(m);for(let g=0;g<(e?100:210);g++){const E=(g%2?-1:1)*(6+g*7.13%26),N=20-g*11.37%86;ee(m,[.65+g%3*.25,.18,.4],[E,-2.96,N],g%8===0?d:a);for(const U of[-.48,.48])ee(m,[.17,.1,.4],[E+U,-2.98,N],l)}const p=new At;m.add(p);const S=new At;S.position.set(-6.4,-.65,-9),S.rotation.set(.23,-.32,-.19),p.add(S),ee(S,[2.8,.18,1.8],[0,-.6,0],o),ee(S,[2.8,1.25,.16],[0,-.02,-.82],d);for(const g of[-1.32,1.32])ee(S,[.16,1.1,1.7],[g,-.08,0],d);ee(S,[2.4,.12,1.3],[0,-.36,0],u);const T=ee(S,[2.7,.12,1.25],[0,.68,-.48],o);T.rotation.x=-.55;for(let g=0;g<5;g++)ee(S,[.18,.08,.7],[-.9+g*.45,.78,-.5],d).rotation.x=-.55;ee(p,[.3,1.1,2.1],[-7.8,-1.9,-9],l),ee(p,[3.8,.16,2.4],[-6.7,-1.5,-9],o),S.updateMatrix();for(let g=0;g<8;g++){const L=-.96+g%4*.64,E=g<4?-.2:.2;ee(S,[.23,.23,.2],[L,E,.66],a),ee(S,[.12,.12,.25],[L,E,.81],c);const N=new A(L,E,.94).applyMatrix4(S.matrix),U=new A(L,E,1.25).applyMatrix4(S.matrix),O=new A(-8.3+g*.18,-2.72+g%3*.1,-4.8-g%2*.4);_([N,U,new A(U.x-.15,U.y-.1,-7.15),new A(N.x-.25,-2.5,-6.25),O],.065,g%3===0?o:a,22,6,p),_([O,O.clone().add(new A(-.14,.08,.22))],.032,c,2,5,p)}ee(p,[4,.03,5],[-7,-3.03,-10],d);for(let g=0;g<16;g++)ee(p,[.3+g%3*.15,.18,.4],[-5-g*.71%5,-2.85+g%4*.08,-7-g*1.13%6],g%3?d:c).rotation.set(g*.7,g*1.4,g*.3);const y=new At;m.add(y),y.position.set(10,0,3);const C=new Gc;C.moveTo(-2.25,-2.5),C.lineTo(2.25,-2.5),C.lineTo(2.25,.5),C.lineTo(1.5,.35),C.lineTo(1.7,1.15),C.lineTo(.8,.9),C.lineTo(.4,2.5),C.lineTo(-2.25,2.5),C.closePath();const w=new Be(new Fo(C,{depth:.3,bevelEnabled:!1}),u);w.position.set(8,1,-26),y.add(w),w.rotation.z=.28;for(let g=0;g<3;g++)for(let L=0;L<3;L++)g===2&&L===2||(ee(w,[.9,.6,.12],[-1.4+L*1.15,-1.4+g*1.25,.36],a),ee(w,[.55,.025,.02],[-1.4+L*1.15,-1.6+g*1.25,.43],g===2?h:f));ee(y,[5.4,.3,1.4],[8,-2.7,-26],o),ee(y,[1.8,2,.3],[10.7,-1.8,-25],d).rotation.set(.3,.5,-.5);for(let g=0;g<12;g++)ee(y,[.08,.4+g%3*.17,.08],[6+g*.34,-1.6,-25.7],c);for(const g of[-1,1])for(let L=0;L<3;L++){const E=g*(8.8+L%2*2.5),N=-3-L*16,U=m;ee(U,[1.3,1.65,.45],[E,-1.6,N],a),ee(U,[1.3,.7,.14],[E,-.43,N-.12],l);const O=new Be(new qt(.17,.17,.16,10),d);O.rotation.x=Math.PI/2,O.position.set(E,-.4,N-.02),U.add(O);for(let D=0;D<3;D++)ee(U,[.09,.65,.1],[E-.4+D*.4,-2.65,N],c);const I=new At;m.add(I),I.position.set(g*12,-2.85,g===1&&L===1?-21:N-5),ee(I,[2.5,.2,1.6],[0,0,0],u);const k=new Be(new qt(.45,.45,1.1,12),c);k.rotation.z=Math.PI/2,k.position.set(-.3,.65,0),I.add(k);for(let D=0;D<9;D++){const V=new Be(new Pn(.46,.025,4,12),d);V.rotation.y=Math.PI/2,V.position.set(-.8+D*.125,.65,0),I.add(V)}ee(I,[.15,1.1,1.1],[.55,.6,0],l);const q=ee(I,[1.8,.09,.28],[.15,1.22,.18],l);q.rotation.z=-.12;for(const D of[.65,.95])ee(I,[.12,.65,.18],[D,.4,.3],c)}}function Dg(i,e){const t=nn.length,n=new dn(new ri(.55,.43,.43,2,.025),new lt({color:2371900,metalness:.55,roughness:.46}),t),r=new dn(new bt(.13,.035,.025),new sn({color:16777215,toneMapped:!1}),t*4),s=new dn(new bt(.27,.015,.17),new lt({color:4740188,metalness:.8,roughness:.4}),t),a=new dn(new bt(.04,.06,.035),new lt({color:10451017,metalness:.75,roughness:.4}),t*8),o=new dn(new Pn(.4,.025,4,20),bn(Yn,1.8),t),l=[n,r,s,a,o];n.name="recovery-packet-bodies",r.name="recovery-packet-indicators";for(const g of l)g.instanceMatrix.setUsage(Co),g.boundingSphere=new ai(new A(0,0,-29),40),g.userData.skipReflection=g!==n,i.add(g);const c=new Et,u=new A,d=new A,f=new $e,h=Array.from({length:t},()=>new A),_=new Float64Array(t),M=new Float64Array(t).fill(-100),m=it.map(()=>0),p=.57,S=Math.PI*p;let T=0;function y(g,L,E,N,U,O){const I=g-N.x,k=L-N.z;if(Math.abs(I)>1.1||Math.abs(k)>1.1)return!1;const q=Math.cos(E),D=Math.sin(E),V=Math.cos(U),G=Math.sin(U),B=Math.abs(q*V+D*G),Y=Math.abs(D*V-q*G);return Math.abs(I*q-k*D)<=.435+.275*B+.24*Y+O&&Math.abs(I*D+k*q)<=.365+.275*Y+.24*B+O&&Math.abs(I*V-k*G)<=.275+.435*B+.365*Y+O&&Math.abs(I*G+k*V)<=.24+.435*Y+.365*B+O}function C(g,L,E){const N=nn[g],U=it[N.zoneIndex],O=U.start-U.end,I=O*2+S*2,k=((N.slot*I/U.count+L)%I+I)%I,q=U.x;if(k<O)return E.set(q-p,0,U.start-k),Math.PI;if(k<O+S){const V=(k-O)/p;return E.set(q-p*Math.cos(V),0,U.end-p*Math.sin(V)),Math.PI-V}if(k<2*O+S)return E.set(q+p,0,U.end+k-O-S),0;const D=(k-2*O-S)/p;return E.set(q+p*Math.cos(D),0,U.start+p*Math.sin(D)),-D}function w(g){f.setHex(e.has(nn[g].id)?Yn:ho);for(let L=0;L<4;L++)r.setColorAt(g*4+L,f);r.instanceColor.needsUpdate=!0}for(let g=0;g<t;g++)w(g);e.subscribe(()=>{for(let g=0;g<t;g++)w(g);e.count||(m.fill(0),M.fill(-100))});function x(g,L,E,N){d.set(g,L,E).applyAxisAngle(Et.DEFAULT_UP,N),c.position.copy(u).add(d),c.updateMatrix()}return{canOccupy(g,L,E=0){return h.every((N,U)=>!y(g,L,E,N,_[U],.008))},recover(g,L,E,N=0){const U=[];if(E>.25||!e.accessUnlocked)return U;for(let O=0;O<t;O++)!e.has(nn[O].id)&&y(g,L,N,h[O],_[O],.035)&&(e.rescue(nn[O].id),M[O]=T,U.push(nn[O].id));return U},update(g,L,E,N=0){const U=Math.min(Math.max(0,g-T),.12);T=g;for(let O=0;O<it.length;O++){const I=m[O]+(L?0:U*.85);let k=!1;if(E)for(let q=0;q<t;q++){if(nn[q].zoneIndex!==O)continue;const D=C(q,I,u);y(E.x,E.z,N,u,D,.02)&&(k=!0)}k||(m[O]=I)}for(let O=0;O<t;O++){const I=C(O,m[nn[O].zoneIndex],u);u.y=Er(u.z,.28)+.24,h[O].copy(u),_[O]=I,c.position.copy(u),c.rotation.set(0,I,0),c.scale.setScalar(1),c.updateMatrix(),n.setMatrixAt(O,c.matrix);for(let D=0;D<4;D++)x(D%2?.1:-.1,e.has(nn[O].id)?.015:D%2?-.025:.055,D<2?.22:-.22,I),r.setMatrixAt(O*4+D,c.matrix);x(0,.222,0,I),s.setMatrixAt(O,c.matrix);for(let D=0;D<8;D++)x(-.18+D%4*.12,-.16,D<4?.224:-.224,I),a.setMatrixAt(O*8+D,c.matrix);const k=g-M[O],q=!L&&k>=0&&k<.65;c.position.copy(u),c.rotation.set(Math.PI/2,0,0),c.scale.setScalar(q?.3+k*2.5:0),c.updateMatrix(),o.setMatrixAt(O,c.matrix)}for(const O of l)O.instanceMatrix.needsUpdate=!0}}}function Ig(i,e,t){const n=new lt({color:1911611,metalness:.65,roughness:.35}),r=new lt({color:1648435,metalness:.45,roughness:.45}),s=new lt({color:4543589,metalness:.8,roughness:.28}),a=bn(Dn.cyan,.35),o=bn(Dn.violet,.3),l=bn(Dn.red,.5),c=new Vs(new Tn(180,180),{color:2438211,textureWidth:384,textureHeight:384,clipBias:.003,multisample:0});c.name="motherboard-floor";const u=c.onBeforeRender.bind(c);c.onBeforeRender=(...D)=>{c.getReflectionCamera(D[2]).layers.set(1),u(...D)},c.rotation.x=-Math.PI/2,c.position.set(0,-3.15,-22),i.add(c);const d=new Sd(150,75,1718859,991277);d.position.set(0,-3.12,-25),i.add(d),Lg(i,e);for(const D of[2.6,...it.map(V=>(V.start+V.end)/2)]){ee(i,[10.4,.28,1.8],[0,-1.7,D],n);for(const V of[-5.1,5.1])ee(i,[.04,.04,1.8],[V,-1.55,D],a);for(const V of[-3,3])ee(i,[.5,1.3,.5],[V,-2.49,D],s)}ee(i,[20,2,15],[0,-2.1,-62],n),ee(i,[10,4.5,6],[0,1.2,-65],s);for(let D=0;D<19;D++)ee(i,[.24,7,6.8],[-5.4+D*.6,3.2,-65],r);ee(i,[12,.1,.1],[0,6.6,-61.55],a);const f=new Be(new Pn(7.5,.035,6,100),o);f.position.set(0,6,-67),i.add(f),ee(i,[76,29,1],[0,10,-72],n);for(const D of[-1,1]){ee(i,[1,19,89],[D*36,6,-26],n),ee(i,[.4,.4,89],[D*35.4,15.5,-26],s);for(let ae=10;ae>-68;ae-=13)ee(i,[.4,18,.45],[D*35.4,6,ae],s);const V=new At;V.position.set(D*18,8,-70.8),i.add(V);const G=new Be(new Pn(4.8,.16,8,64),s);V.add(G);const B=new Be(new Pn(4.55,.025,5,64),D===-1?l:o);V.add(B);const Y=new Be(new qt(.75,.75,.6,20),r);Y.rotation.x=Math.PI/2,V.add(Y);for(let ae=0;ae<7;ae++){const be=new At;be.rotation.z=ae/7*Math.PI*2,V.add(be);const K=ee(be,[1.5,3.2,.1],[0,2.3,0],n);K.rotation.z=.3}}const h=new At;h.position.z=-6,i.add(h);const _=new qt(.65,.65,2.4,16),M=new qt(.53,.53,.05,16);for(let D=0;D<36;D++){const V=(D%2?-1:1)*(7+D*17%19),G=14-D*13%78,B=new Be(_,n);B.position.set(V,-1.9,G),h.add(B);const Y=new Be(M,s);Y.position.set(V,-.68,G),h.add(Y),ee(h,[.09,1.5,.05],[V,-1.8,G+.65],D%9===0?l:a);const ae=V<0?1:-1,be=new Vi([new A(V,-3.06,G),new A(V+ae*3,-3.06,G-3),new A(V+ae*3,-3.06,G-9),new A(V+ae*7,-3.06,G-13)]),K=new Be(new qi(be,8,.025,3,!1),D%7===0?l:a);h.add(K)}const m=new Vi([new A(0,19,30),new A(5,16,25),new A(6,11,20),new A(-2,7,16),new A(-3,4.4,12),new A(-1.3,2.8,9)],!1,"catmullrom",.35),p=new lt({color:1320246,metalness:.7,roughness:.35}),S=new A;for(let D=0;D<=50;D++){const V=D/50,G=m.getPointAt(V);S.copy(m.getTangentAt(V));const B=new Be(new Pn(2.6,D%5===0?.12:.025,5,40),D%9===0?l:D%3===0?a:p);B.position.copy(G),B.quaternion.setFromUnitVectors(new A(0,0,1),S),i.add(B)}for(let D=0;D<7;D++){const V=Math.PI*.12+D/6*Math.PI*.76,G=[];for(let B=0;B<=80;B++){const Y=B/80,ae=new A(Math.cos(V)*2.6,-Math.sin(V)*2.6,0);ae.applyQuaternion(new en().setFromUnitVectors(new A(0,0,1),m.getTangentAt(Y))),G.push(m.getPointAt(Y).add(ae))}i.add(new Be(new qi(new Vi(G),140,D%2===0?.065:.12,5,!1),D%2===0?a:p))}for(const D of[-.36,0,.36]){const V=Array.from({length:181},(G,B)=>{const Y=B/180,ae=new en().setFromUnitVectors(new A(0,0,-1),m.getTangentAt(Y));return m.getPointAt(Y).add(new A(D,-.59,0).applyQuaternion(ae))});i.add(new Be(new qi(new Vi(V),120,.14,8,!1),p))}const T=new Be(new Pn(2.6,.1,8,64),s);T.position.copy(m.getPointAt(1)),T.quaternion.setFromUnitVectors(new A(0,0,1),m.getTangentAt(1)),i.add(T);const y=new At;y.position.copy(m.getPointAt(0)),y.quaternion.setFromUnitVectors(new A(0,0,-1),m.getTangentAt(0)),i.add(y);for(const D of[-1,1])ee(y,[.55,6.3,.5],[D*2.95,0,1.2],n),ee(y,[5.4,.55,.5],[0,D*2.95,1.2],n);const C=new Be(new qt(2.6,2.9,1.3,48,1,!0),p);C.rotation.x=Math.PI/2,C.position.z=.6,y.add(C);const w=Us("I/O / PACKET INTAKE","#86b6c2",4);w.position.set(0,2.85,.9),y.add(w),i.updateMatrixWorld(!0);const x=new Map,g=new A,L=[];i.traverse(D=>{if(D===c||!(D instanceof Be)||!(D.material instanceof lt))return;const V=D.geometry.clone().applyMatrix4(D.matrixWorld);V.index||V.setIndex(Array.from({length:V.getAttribute("position").count},(K,_e)=>_e)),V.getAttribute("uv")||V.setAttribute("uv",new pt(new Float32Array(V.getAttribute("position").count*2),2)),V.computeBoundingBox(),V.boundingBox.getCenter(g);const G=new A;V.boundingBox.getSize(G);const B=Math.max(G.x,G.y,G.z)<.65,Y=`${Math.floor((g.x+16)/32)},${Math.floor(g.z/32)},${B?"detail":"structure"}`,ae=x.get(D.material)||new Map,be=ae.get(Y)||[];be.push(V),ae.set(Y,be),x.set(D.material,ae),L.push(D)});for(const D of L)D.removeFromParent(),D.geometry.dispose();for(const[D,V]of x)for(const[G,B]of V){const Y=er(B,!1);if(Y){Y.computeBoundingSphere();const ae=new Be(Y,D);ae.name=`hardware-cell-${G}`,ae.matrixAutoUpdate=!1,ae.userData.staticHardware=!0,ae.userData.microDetail=G.endsWith("detail"),i.add(ae)}B.forEach(ae=>ae.dispose())}const E=new dn(new bt(.12,.12,.34),bn(Dn.cyan,.8),65);E.instanceMatrix.setUsage(Co),i.add(E);const N=new Et,U=256,O=Array.from({length:U+1},(D,V)=>{const G=V/U;return{position:m.getPointAt(G),rotation:new en().setFromUnitVectors(new A(0,0,1),m.getTangentAt(G))}}),I=new A;let k=!1;const q=Dg(i,t);return{path:m,packets:E,fault:l,setQuality(D){const V=[512,384,256,192][D],G=c.getRenderTarget();G.width!==V&&G.setSize(V,V)},canOccupy:(D,V,G)=>q.canOccupy(D,V,G),recover:(D,V,G,B)=>q.recover(D,V,G,B),update(D,V,G,B){if(q.update(D,V,G,B),l.emissiveIntensity=V?.5:.4+Math.pow(Math.sin(D*2.3),12)*.6,!(V&&k)){k=V;for(let Y=0;Y<65;Y++){if(Y<35){const be=((V?0:D*.035)+Y/35)%1*U,K=Math.min(U-1,Math.floor(be)),_e=be-K;N.position.lerpVectors(O[K].position,O[K+1].position,_e),N.quaternion.slerpQuaternions(O[K].rotation,O[K+1].rotation,_e);const ie=Y*2.39996;N.position.add(I.set(Math.cos(ie)*1.95,Math.sin(ie)*1.95,0).applyQuaternion(N.quaternion))}else{const ae=10-((V?0:D*3)+Y*3.1)%70;N.position.set(Y%2?3.1:-3.1,an(ae)+.08,ae),N.rotation.set(0,0,0)}N.updateMatrix(),E.setMatrixAt(Y,N.matrix)}E.instanceMatrix.needsUpdate=!0}}}}function Ng(i,e,t,n,r){const s=e.color.clone(),a=e.groundColor.clone(),o=t.color.clone(),l=new $e(16720920),c=new $e(3934216),u=new $e(198414),d=new $e(1508357),f=new lt({color:2501424,roughness:.4,metalness:.7}),h=[],_=new $e(14085119),M=new $e(4832255),m=[0,0,0];let p=0;const S=[];for(const[U,O]of[[-5.5,-4],[5.5,-24],[-5.5,-45]]){const I=O===-4?24.6:15.75;for(const D of[-.52,.52])ee(i,[.32,.12,.34],[U+D,I,O],f),ee(i,[.045,I-7.5,.045],[U+D,(I+7.5)/2,O],f);ee(i,[1.5,.3,.6],[U,7.3,O],f);const k=bn(16722201,.5);h.push(k),ee(i,[1.15,.2,.35],[U,7.05,O],k);for(const D of[-.48,0,.48])ee(i,[.035,.28,.46],[U+D,7.02,O],f);const q=new Gs(16720920,0,29,1.4);q.position.set(U,6.7,O),i.add(q),S.push(q)}const T=[new A(-17,24.5,5),new A(-6.4,8.5,-7.8)],y=r?28:48,C=new sn({color:16777215,toneMapped:!1}),w={sparkTime:{value:0},sparkStability:{value:0},sparkBudget:{value:y},sparkReduced:{value:0}};C.onBeforeCompile=U=>{Object.assign(U.uniforms,w),U.vertexShader=U.vertexShader.replace("#include <common>",`
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
    `)};const x=new dn(new bt(1,1,1),C,T.length*y);x.name="ceiling-fault-sparks",x.boundingSphere=new ai(new A(-11,11,-1),28),i.add(x);const g=new Et,L=new $e,E=new Float32Array(x.count*2);let N=y;for(let U=0;U<x.count;U++){const O=U%T.length;E[U*2]=O,E[U*2+1]=Math.floor(U/T.length),g.position.copy(T[O]),g.updateMatrix(),x.setMatrixAt(U,g.matrix),L.setHex(U%4===0?16772271:U%3===0?16733211:16753723),x.setColorAt(U,L)}return x.geometry.setAttribute("sparkSeed",new ao(E,2)),{setQuality(U){n.forEach(O=>{O.visible=!0}),S.forEach(O=>{O.visible=!0}),N=U>=3?0:U===2?8:U===1?14:y,w.sparkBudget.value=N,x.visible=N>0},update(U,O,I=[],k=!1,q=1/60){const D=O?1:1-Math.exp(-q*.8);p+=((k?1:0)-p)*D;for(let B=0;B<m.length;B++)m[B]+=((I[B*2]&&I[B*2+1]?1:0)-m[B])*D;const V=.5-.5*Math.cos(U*Math.PI*2/5),G=(O?.28:Kt.smoothstep(V,.18,.9))*(1-p);return e.color.copy(s).lerp(l,G*.82),e.groundColor.copy(a).lerp(c,G),e.intensity=1.05-G*.5+p*.25,t.color.copy(o).lerp(l,G*.9),t.intensity=1.15-G*.75+p*.15,i.environmentIntensity=.22-G*.12,i.fog instanceof Bs&&i.fog.color.copy(u).lerp(d,G),i.background instanceof $e&&i.background.copy(u).lerp(d,G),n.forEach((B,Y)=>{B.intensity=25*(Y===1?1+G*.3:1-G*.9),Y===1&&B.color.copy(l).lerp(M,p)}),S.forEach((B,Y)=>{const ae=Math.max(p,m[Y]);B.color.copy(l).lerp(_,ae),B.intensity=(1+G*58)*(1-ae)+ae*24,h[Y].color.copy(B.color),h[Y].emissive.copy(B.color),h[Y].emissiveIntensity=(.12+G*1.5)*(1-ae)+ae*.7}),w.sparkTime.value=U,w.sparkStability.value=p,w.sparkReduced.value=O?1:0,G}}}const ko=[];for(const i of[-.425,.425])for(const e of[-.34,.34])for(const t of[-.365,.365])ko.push(new A(i,e,t));for(const i of[-.39,-.19,.19,.39])for(const e of[-.26,.26])ko.push(new A(i,-.415,e));const Sa=new A;function Hi(i,e,t){let n=-1/0;for(const r of ko)Sa.copy(r).multiply(t).applyQuaternion(e),n=Math.max(n,Er(i+Sa.z,.025)-Sa.y);return n+.012}function ps(i,e,t){return t.setFromUnitVectors(new A(0,0,-1),i).multiply(new en().setFromEuler(new Nn(e*.55,e*.22,-e*.8)))}function Ug(i,e,t,n,r,s){const a=document.createElement("div");a.className="recovery-hud",a.innerHTML='<div class="recovery-meter"><span>RECOVERY PROCESS</span><strong></strong><small></small></div><button class="recovery-interact" type="button" hidden></button><p class="recovery-toast" role="status" aria-live="polite"></p>',e.append(a);const o=document.createElement("button");o.className="pda-access",o.type="button",o.hidden=!n.hasPda,o.innerHTML="PDA <kbd>Q</kbd>",o.setAttribute("aria-label","Abrir PDA");const l=document.createElement("div");l.className="pda-acquired",l.setAttribute("role","status"),l.setAttribute("aria-live","polite"),a.append(o,l);let c=!1,u,d="summary";function f(){h.close(),n.unlockAccess(),r(!1),c&&(c=!1,l.innerHTML='<strong>PDA OBTENIDA</strong><span class="pda-keyboard-notice">Pulsa <kbd>Q</kbd> para volver a abrirla.</span><span class="pda-touch-notice">Toca el botón PDA para volver a abrirla.</span>',l.classList.add("is-visible"),window.clearTimeout(u),u=window.setTimeout(()=>l.classList.remove("is-visible"),2500))}const h=document.createElement("dialog");h.className="recovery-dialog",h.setAttribute("aria-labelledby","recovery-dialog-title"),t.append(h);const _=au();_.light.removeFromParent(),_.root.name="aux-guide",_.root.position.set(1.85,Er(4.8,.4)+.42,4.8),_.root.rotation.set(.09,-.35,-.15),_.root.scale.setScalar(.8),_.core.emissiveIntensity=.22,i.add(_.root);const M=new At,m=new sn({color:Yn,toneMapped:!1}),p=new Be(new Oo(.23,.27,24),m),S=new Be(new bt(.045,.19,.025),m);S.position.y=.04;const T=new Be(new bt(.045,.045,.025),m);T.position.y=-.115,M.add(p,S,T),M.position.copy(_.root.position).add(new A(0,.9,0)),i.add(M);const y=2.6,C=new At;C.name="aux-holographic-gate",C.position.set(0,Er(y,.3)-.15,y),i.add(C);let w=n.accessUnlocked?1:0;const x=new lt({color:2439495,metalness:.7,roughness:.35}),g=new sn({color:ho,toneMapped:!1}),L=new Jt({transparent:!0,depthWrite:!1,side:mn,blending:bs,uniforms:{time:{value:0},opacity:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 vUv; uniform float time; uniform float opacity;
      void main(){
        float lines=pow(.5+.5*sin(vUv.y*180.-time*2.),14.);
        float grid=step(.97,fract(vUv.x*14.))+step(.97,fract(vUv.y*9.));
        float edge=pow(abs(vUv.y-.5)*2.,10.);
        gl_FragColor=vec4(1.,.12,.07,(.09+lines*.19+grid*.12+edge*.3)*opacity);
      }`}),E=[-1,1].map(v=>{const z=C.position.y-.09;ee(i,[.42,z+1.56,.65],[v*3.7,(z-1.56)/2,y],x),ee(C,[.48,.18,.85],[v*3.7,0,0],x),ee(C,[.28,3.3,.4],[v*3.7,1.65,0],x),ee(C,[.07,2.9,.44],[v*3.7-v*.16,1.65,0],g);for(const ne of[-.27,.27]){ee(C,[.68,.09,.12],[v*3.5,.1,ne],x),ee(C,[.68,.09,.12],[v*3.5,-.47,ne],x),ee(C,[.1,.66,.12],[v*3.79,-.185,ne],x);const he=new Be(new qt(.055,.055,.055,6),x);he.position.set(v*3.3,.17,ne),C.add(he)}const X=new Be(new Tn(3.7,3.1),L);return X.name=`gate-hologram-${v}`,X.position.set(v*1.85,1.6,0),C.add(X),X}),N=new lt({color:5662068,metalness:.65,roughness:.5}),U=new Be(new bt(.24,.025,.22),N);U.position.set(-.12,.355,.02),U.rotation.y=-.2,_.root.add(U);const O=new Be(new qt(.016,.016,.28,5),N);O.position.set(.28,.44,-.08),O.rotation.z=-.4,_.root.add(O);const I=new Be(new Bo(.035,6,4),m);I.position.set(.335,.57,-.08),_.root.add(I);const k=new Be(new bt(.76,.42,.025),new lt({color:594459,roughness:.8}));k.position.set(0,0,.38),_.root.add(k);const q=[];for(const v of[-1,1])q.push(new bt(.12,.025,.025).rotateZ(v*-.25).translate(v*.17,.08,.404)),q.push(new bt(.09,.018,.025).rotateZ(v*-.35).translate(v*.04,-.105,.404));const D=er(q),V=new sn({color:Yn}),G=D?new Be(D,V):void 0;G&&_.root.add(G),q.forEach(v=>v.dispose());const B=[];for(const v of[-1,1]){for(const z of[-1,1])B.push(new bt(.075,.028,.025).rotateZ(z*-.65).translate(v*.17+z*.025,.09,.404));B.push(new bt(.085,.024,.025).rotateZ(v*.55).translate(v*.075,-.105,.404)),B.push(new bt(.055,.024,.025).rotateZ(v*1.05).translate(v*.13,-.058,.404))}B.push(new bt(.09,.024,.025).translate(0,-.125,.404));const Y=er(B),ae=new Be(Y,V);ae.name="aux-happy-face",_.root.add(ae),B.forEach(v=>v.dispose());const be=new dn(new ri(.72,.44,.3,2,.065),new lt({color:2569534,metalness:.6,roughness:.5}),it.length),K=[!1,!0].map(v=>{const z=document.createElement("canvas");z.width=256,z.height=128;const X=z.getContext("2d");X.fillStyle="#07131c",X.fillRect(0,0,256,128),X.strokeStyle=v?"#49bbff":"#ff4935",X.lineWidth=8,X.lineCap="round",X.lineJoin="round",X.beginPath(),X.arc(64,64,42,0,Math.PI*2),X.stroke(),X.beginPath(),v?(X.moveTo(42,64),X.lineTo(58,80),X.lineTo(86,49)):(X.moveTo(49,49),X.lineTo(79,79),X.moveTo(79,49),X.lineTo(49,79)),X.stroke(),X.lineWidth=5;for(let he=0;he<3;he++)X.beginPath(),X.moveTo(130,42+he*22),X.lineTo(226-he*18,42+he*22),X.stroke();const ne=new Pr(z);return ne.colorSpace=Xt,new sn({map:ne,toneMapped:!1})}),_e=new Tn(.53,.22),ie=[];i.add(be);const Ie=new Et,Me=it.map(v=>new A(Math.sign(v.x)*4.35,Er((v.start+v.end)/2,.3)+.34,(v.start+v.end)/2)),ze=it.map((v,z)=>{const X=Me[z],ne=X.y-.12,he=new Be(new qt(.12,.17,ne+1.56,12),x);he.position.set(X.x,(ne-1.56)/2,X.z),i.add(he);const fe=new Be(new qt(.29,.33,.1,16),x);fe.position.set(X.x,-1.51,X.z),i.add(fe);const te=new Be(new qt(.19,.19,.09,12),N);te.position.set(X.x,ne-.08,X.z),i.add(te),Ie.rotation.set(-.35,-Math.sign(v.x)*(Math.PI/2-.3),0,"YXZ"),Ie.position.copy(X),Ie.updateMatrix(),be.setMatrixAt(z,Ie.matrix),Ie.position.copy(X).add(new A(0,.035,.16).applyEuler(Ie.rotation));const J=new Be(_e,K[0]);J.position.copy(Ie.position),J.rotation.copy(Ie.rotation),ie.push(J),i.add(J);const ge=ee(i,[.37,.025,.025],[0,0,0],N);ge.rotation.copy(Ie.rotation),ge.position.copy(X).add(new A(0,-.13,.16).applyEuler(Ie.rotation));const F=Us(`${v.code} / ${v.title.toUpperCase()}`,"#9aacbb",2.2);return F.position.copy(Me[z]).add(new A(0,1.2,0)),i.add(F),F}),at=Me.map((v,z)=>{const X=new At;return X.name=`terminal-ready-${it[z].code}`,X.add(p.clone(),S.clone(),T.clone()),X.scale.setScalar(.65),X.position.copy(v).add(new A(0,1.85,0)),X.visible=!1,i.add(X),X});let Pe=-2,se=!1,ve=0,W="",le=n.count,ue=it.map((v,z)=>n.zoneCount(z)===v.count);const pe=a.querySelector(".recovery-interact"),ce=a.querySelector(".recovery-meter strong"),Ae=a.querySelector(".recovery-meter small"),de=a.querySelector(".recovery-toast"),Fe=matchMedia("(hover: none) and (pointer: coarse)");function Le(v,z){let X=fo(z);Fe.matches&&(X=X.replace(/^\[E\]\s*/,"")),v.textContent!==X&&(v.textContent=X)}function ke(v){W=v,ve=performance.now()+2500,de.textContent=v,de.classList.add("is-visible")}function P(){if(G&&(G.visible=!n.complete),ae.visible=n.complete,o.hidden=!n.hasPda,n.hasPda||(c=!1,l.classList.remove("is-visible"),d="summary"),ce.textContent=n.hasPda?n.complete?"SISTEMA ESTABLE · 20/20":`RECUPERACIÓN ${String(n.count).padStart(2,"0")} / 20`:"HABLA CON AUX",n.hasPda||Le(Ae,"ACÉRCATE AL ROBOT CON EL SÍMBOLO !"),e.dataset.recovered=String(n.count),e.dataset.stable=String(n.complete),it.forEach((v,z)=>{ie[z].material=K[n.zoneCount(z)===v.count?1:0]}),n.count<le)ue=it.map(()=>!1),ke("NUEVA RECUPERACIÓN / Habla con AUX junto a la entrada.");else if(n.count>le){const v=it.findIndex((z,X)=>!ue[X]&&n.zoneCount(X)===z.count);n.complete?ke("SYSTEM STABLE / CORE DESBLOQUEADO · Reanuda el sistema al final del bus."):v>=0&&ke(`MEMORIA RESTAURADA / ${it[v].title.toUpperCase()} · Examina los chips desde su terminal.`),ue=it.map((z,X)=>n.zoneCount(X)===z.count)}le=n.count}n.subscribe(P),P();const Ge=matchMedia("(prefers-reduced-motion: reduce)");let Ee;function Ze(){if(!(!h.open||Ee)){if(Ge.matches){f();return}Ee=h.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(8px)"}],{duration:160,easing:"ease-in",fill:"forwards"}),Ee.finished.then(()=>{Ee?.cancel(),Ee=void 0,f()}).catch(()=>{})}}function me(v){const z=h.open;if(Ee?.cancel(),Ee=void 0,h.innerHTML=`<div class="recovery-dialog-bar"><span><i></i> AUX / COMM LINK <small>ENCRYPTED · LOCAL</small></span><button type="button" data-close aria-label="Cerrar conversación">CERRAR <kbd>ESC</kbd> ×</button></div><div class="pda-body"><div class="pda-identity"><svg class="aux-portrait" viewBox="0 0 64 64" aria-hidden="true"><path class="aux-shell" d="M12 23 29 15l23 8v26L34 57 12 48Z M12 23l22 8 18-8 M34 31v26"/><path d="m43 19 3-10-6-4 M19 35l7 2 M39 39l7-3 M22 45l5-2 4 4 M16 52v5m6-3v5m19-3v5m6-8v5"/><circle cx="40" cy="5" r="2"/><path class="aux-patch" d="m22 22 8-4 9 4-8 4Z"/></svg><div><strong>AUX<span>_</span></strong><small>MAINTENANCE UNIT / CONNECTED</small></div><span class="pda-signal" aria-hidden="true">▂▄▆</span></div><div class="pda-content">${v}</div><div class="pda-footer" aria-hidden="true"><span>RECOVERY OS / HANDHELD TERMINAL</span><span>LINK ESTABLISHED ●</span></div></div>`,h.querySelector("[data-close]").addEventListener("click",Ze),r(!0),h.open?h.querySelector("[data-close]").focus({preventScroll:!0}):h.showModal(),h.scrollTop=0,!Ge.matches){const X=h.querySelector(".pda-content");z?X.animate([{opacity:0,transform:"translateY(5px)"},{opacity:1,transform:"translateY(0)"}],{duration:240,easing:"ease-out"}):[...X.children].forEach((ne,he)=>ne.animate([{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"translateY(0)"}],{duration:420,delay:220+Math.min(he*65,325),easing:"cubic-bezier(.16,1,.3,1)",fill:"backwards"}))}}function st(){const v=n.complete;if(d="summary",n.hasPda||(n.greet(),c=!0),me(`<p class="recovery-file">AUX / PAQUETE DE MANTENIMIENTO</p><h2 id="recovery-dialog-title">${v?"Lo has conseguido.":n.count?"La señal está volviendo.":"Todavía queda un proceso limpio."}</h2><p>${v?"Has recuperado los veinte paquetes y reconstruido todos los registros. La alarma se ha detenido. El hardware sigue dañado, pero la información está a salvo. Gracias por volver.":n.count?`Llevas ${n.count} de 20 paquetes recuperados. Los grupos circulan cerca de sus terminales. Abre los objetivos para localizar los que faltan.`:"El ataque ha corrompido los paquetes que transportan los registros de Hugo. Soy AUX; mi oruga está averiada y no puedo ir a buscarlos."}</p>${v?"":"<p>Acércate a un paquete rojo hasta tocar su carcasa: tu señal lo reparará y sus indicadores pasarán a azul. Cada grupo reconstruye un registro distinto.</p><p>No tienes que perseguirlos por todo el ordenador: cada grupo circula en su propia zona. Los primeros paquetes de Identidad están justo delante.</p>"}<div class="recovery-actions"><button data-understood>ENTENDIDO</button><button data-objectives>VER OBJETIVOS</button><a href="#archivo/proyectos" data-read>PREFIERO LEER EL ARCHIVO ↗</a></div>`),h.querySelector("[data-understood]")?.remove(),v){const z=document.createElement("p");z.textContent="El CORE al final del bus ya está desbloqueado. Acércate a su conector y reanuda el sistema para completar la carga que quedó interrumpida.",h.querySelector(".recovery-actions").before(z)}h.querySelector("[data-objectives]").addEventListener("click",Oe),h.querySelector("[data-read]").addEventListener("click",Ze)}function Oe(){d="objectives",me(`<p class="recovery-file">RECONSTRUIR PETICIÓN / ARCHIVO DE HUGO</p><h2 id="recovery-dialog-title">Recupera la información.</h2><p>Repara los paquetes rojos por contacto. Cada grupo devuelve un registro al sistema. Puedes leer el portfolio directamente en Archivo cuando quieras.</p><div class="recovery-objectives">${it.map((z,X)=>`<button data-track="${X}" data-restored="${n.zoneCount(X)===z.count}"><span>${z.code} / ${z.title}</span><strong>${n.zoneCount(X)} / ${z.count}</strong><small>${n.zoneCount(X)===z.count?"RESTAURADO · LOCALIZAR TERMINAL":"PENDIENTE · LOCALIZAR PAQUETES"} ↗</small></button>`).join("")}</div><div class="pda-objective-actions"><button class="reset-recovery" data-reset>REINICIAR RECUPERACIÓN</button></div>`);const v=document.createElement("button");v.type="button",v.className="pda-summary",v.textContent="← RESUMEN",v.addEventListener("click",st),h.querySelector(".pda-objective-actions").prepend(v),h.querySelectorAll("[data-track]").forEach(z=>z.addEventListener("click",()=>{const X=Number(z.dataset.track);Ze(),ke(n.zoneCount(X)===it[X].count?`MEMORIA RESTAURADA / ${it[X].title.toUpperCase()} · Examina los chips desde su terminal.`:`${it[X].title.toUpperCase()} / ${n.zoneCount(X)} de ${it[X].count} · Repara los paquetes rojos de esta zona.`)})),h.querySelector("[data-reset]").addEventListener("click",()=>{me('<p class="recovery-file">NUEVA PARTIDA</p><h2 id="recovery-dialog-title">¿Reiniciar la recuperación?</h2><p>Los veinte paquetes volverán a estar corruptos y se borrará el progreso guardado. El contenido del Archivo seguirá disponible.</p><div class="recovery-actions"><button data-confirm>REINICIAR</button><button data-cancel>CONSERVAR PARTIDA</button></div>'),h.querySelector("[data-confirm]").addEventListener("click",()=>{n.reset(),Ze()}),h.querySelector("[data-cancel]").addEventListener("click",Oe)})}function Ke(){if(!(!se||h.open)){if(Pe===-1)st();else if(Pe>=0){const v=it[Pe];n.zoneCount(Pe)===v.count?s(Pe):ke(`${v.title.toUpperCase()} / ${n.zoneCount(Pe)} de ${v.count} · Repara los paquetes rojos de esta zona.`)}}}pe.addEventListener("click",Ke);function R(){!se||h.open||!n.hasPda||(d==="objectives"?Oe():st())}return o.addEventListener("click",R),h.addEventListener("cancel",v=>{v.preventDefault(),Ze()}),window.addEventListener("keydown",v=>{t.dataset.view!=="explorar"||!se||h.open||v.repeat||v.ctrlKey||v.metaKey||v.altKey||(v.code==="KeyE"&&(v.preventDefault(),Ke()),v.code==="KeyQ"&&n.hasPda&&(v.preventDefault(),R()))}),{get canRecover(){return n.accessUnlocked&&w>=1},canOccupy(v,z){return(w>=1||z>=y+.75)&&!(Math.abs(z-y)<.75&&Math.abs(v)>3)&&Math.hypot(v-_.root.position.x,z-_.root.position.z)>.78},rescued(v){if(v.length&&!(performance.now()<ve&&W.startsWith("REGISTRO RESTAURADO"))&&!n.complete){const z=nn.find(ne=>ne.id===v[0]),X=it[z.zoneIndex];ke(`PAQUETE RECUPERADO · ${z.id} / ${X.title.toUpperCase()} ${n.zoneCount(z.zoneIndex)}/${X.count}`)}},update(v,z,X,ne,he){se=X,w=n.accessUnlocked?Math.min(1,w+(he?1:ne/1.1)):0;const fe=w*w*(3-2*w);if(E.forEach((J,ge)=>{const F=ge===0?-1:1;J.scale.x=Math.max(.001,1-fe),J.position.x=F*(3.7-1.85*(1-fe)),J.visible=w<1}),L.uniforms.time.value=he?0:performance.now()*.001,L.uniforms.opacity.value=1-fe*.6,g.color.setHex(n.accessUnlocked?Yn:ho),e.dataset.gate=w>=1?"open":n.accessUnlocked?"opening":"locked",_.root.rotation.z=Kt.lerp(_.root.rotation.z,n.complete?0:-.15,he?1:1-Math.exp(-ne*2)),_.root.rotation.x=Kt.lerp(_.root.rotation.x,n.complete?0:.09,he?1:1-Math.exp(-ne*2)),O.rotation.z=n.complete?0:-.4,I.position.x=n.complete?.28:.335,I.position.y=n.complete?.6:.57,_.core.emissiveIntensity=n.complete?.8:.22,M.visible=X&&v.distanceTo(_.root.position)<12,M.quaternion.copy(z.quaternion),M.position.y=_.root.position.y+.95+(he||n.complete?0:Math.sin(performance.now()*.0025)*.06),M.scale.setScalar(n.greeted?.8:1),ze.forEach((J,ge)=>{J.visible=X&&Math.abs(v.z-Me[ge].z)<8,J.quaternion.copy(z.quaternion)}),at.forEach((J,ge)=>{J.visible=X&&n.zoneCount(ge)===it[ge].count,J.quaternion.copy(z.quaternion)}),!X)return;Pe=v.distanceTo(_.root.position)<2.8?-1:-2,Pe===-2&&Me.forEach((J,ge)=>{v.distanceTo(J)<2.4&&(Pe=ge)}),pe.hidden=Pe===-2,Le(pe,Pe===-1?"[E] HABLAR CON AUX":Pe>=0?`[E] ${n.zoneCount(Pe)===it[Pe].count?"ABRIR":"EXAMINAR"} ${it[Pe].title.toUpperCase()}`:"");const te=it.findIndex(J=>v.z<=J.start+1&&v.z>=J.end-1);Le(Ae,n.hasPda?te>=0?`${it[te].title.toUpperCase()} ${n.zoneCount(te)}/${it[te].count}`:"BUS DE DATOS / REGISTROS EN RECUPERACIÓN":"ACÉRCATE AL ROBOT CON EL SÍMBOLO !"),performance.now()>ve&&(de.classList.remove("is-visible"),W="")}}}function Fg(i,e,t,n,r){const s=matchMedia("(prefers-reduced-motion: reduce)"),a=new lt({color:3425619,metalness:.8,roughness:.3}),o=new lt({color:1055525,metalness:.65,roughness:.4}),l=bn(15115086,.55),c=new lt({color:10529712,metalness:.18,roughness:.48}),u=new lt({color:14066761,metalness:.85,roughness:.27}),d=new At;d.position.set(0,an(-57.8)-.15,-57.8),i.add(d);function f(P){const Ge=new Map;for(const Ee of P.children){if(!(Ee instanceof Be)||Array.isArray(Ee.material))continue;const Ze=Ge.get(Ee.material)||[];Ze.push(Ee),Ge.set(Ee.material,Ze)}for(const[Ee,Ze]of Ge){const me=Ze.map(Oe=>(Oe.updateMatrix(),Oe.geometry.clone().applyMatrix4(Oe.matrix))),st=er(me);if(st){for(const Oe of Ze)Oe.removeFromParent(),Oe.geometry.dispose();P.add(new Be(st,Ee))}me.forEach(Oe=>Oe.dispose())}}for(const P of[-1,1]){ee(d,[.7,4.6,4],[P*3.8,2,-1.4],c),ee(d,[.12,3.7,3.7],[P*3.42,1.8,-1.5],a),ee(d,[2.35,.65,4],[P*2.65,4.15,-1.4],c),ee(d,[.7,.38,3.6],[P*1.15,4.03,-1.5],c),ee(d,[.34,.2,.06],[P*3.78,.22,.64],l);for(const Ge of[.7,2.1,3.3])ee(d,[.26,.48,1.4],[P*4.23,Ge,-1.3],a);ee(d,[.035,2.7,2.8],[P*3.32,1.8,-1.9],o)}ee(d,[8.3,.5,4.2],[0,-.28,-1.4],c),ee(d,[1.65,.22,4],[0,4.6,-1.4],c),ee(d,[6.6,.18,3.8],[0,-.01,-1.4],o);const h=new sn({color:66052});ee(d,[6.6,4.7,.18],[0,2.1,-3.75],h),ee(d,[6.6,.15,2.9],[0,3.75,-1.9],o);const _=Array.from({length:8},(P,Ge)=>{const Ee=(Ge-3.5)*.72,Ze=ee(d,[.18,.1,2.9],[Ee,.14,-1.8],u);Ze.rotation.x=-.12,ee(d,[.18,.48,.12],[Ee,.45,-3.2],u);const me=bn(7786495,0);return me.color.setHex(1652036),ee(d,[.12,.035,1.9],[Ee,.31,-2],me),me});for(const P of[-1,1]){for(let Ge=0;Ge<5;Ge++){const Ee=-.65-Ge*.56;ee(d,[.13,2.65,.09],[P*3.15,1.75,Ee],a);const Ze=ee(d,[.09,.64,.14],[P*3.05,2.5,Ee],u);Ze.rotation.z=P*.2,ee(d,[.12,.12,.25],[P*2.9,.42,Ee],o)}ee(d,[.16,.18,3],[P*2.9,.3,-1.8],a)}const M=document.createElement("canvas");M.width=8,M.height=256;const m=M.getContext("2d"),p=m.createLinearGradient(0,0,0,256);p.addColorStop(0,"rgba(1,2,4,0)"),p.addColorStop(.3,"rgba(1,2,4,.3)"),p.addColorStop(.7,"rgba(1,2,4,.92)"),p.addColorStop(1,"rgba(1,2,4,1)"),m.fillStyle=p,m.fillRect(0,0,8,256);const S=new Pr(M);S.colorSpace=Xt;const T=new sn({map:S,transparent:!0,side:mn,depthWrite:!1,toneMapped:!1});for(const P of[-1,1]){const Ge=new Be(new Tn(6.7,3.7),T);Ge.rotation.x=P*Math.PI/2,P===-1&&Ge.geometry.rotateZ(Math.PI),Ge.position.set(0,P===1?.03:3.73,-1.8),d.add(Ge);const Ee=new Be(new Tn(3.7,3.7),T);Ee.rotation.y=P*Math.PI/2,Ee.geometry.rotateZ(P*Math.PI/2),Ee.position.set(P*3.33,1.85,-1.8),d.add(Ee)}const y=new At;y.name="core-isolation-flap",d.add(y),ee(y,[6.6,3.7,.2],[0,1.8,-.25],a);for(let P=0;P<7;P++)ee(y,[6.35,.045,.055],[0,.3+P*.47,-.12],o);ee(y,[1.3,.28,.12],[0,.36,-.06],o),ee(y,[.65,.055,.04],[0,.36,.02],l);const C=new At;d.add(C),ee(C,[.85,.24,.42],[0,.04,.02],a),ee(C,[.3,.07,.04],[0,.18,.25],l),f(y),f(C),f(d);const w=document.createElement("canvas");w.width=1024,w.height=256;const x=w.getContext("2d"),g=new Pr(w);g.colorSpace=Xt;const L=new Be(new Tn(6.4,1.6),new sn({map:g}));L.position.set(0,5,.3),d.add(L);let E=n.complete?1:0,N=n.complete?8.5:0,U=-100,O=n.complete;function I(){n.complete&&!O&&(U=0,N=0),n.complete||(N=0,E=0),O=n.complete,x.fillStyle="#061018",x.fillRect(0,0,1024,256),x.fillStyle=n.complete?"#a7e4ff":"#ff7964",x.font='500 48px "IBM Plex Mono", monospace',x.fillText(ms(n.complete?"coreLinkRestored":"coreIsolatedTitle"),38,76),x.font='27px "IBM Plex Mono", monospace',x.fillText(ms("coreData",{count:n.count}),38,134),x.fillStyle="#87a6b8",x.font='22px "IBM Plex Mono", monospace',x.fillText(ms(n.complete?"coreReady":"coreRestore"),38,193),g.needsUpdate=!0,l.color.setHex(n.complete?7786495:15115086),l.emissive.copy(l.color),t.dataset.core=n.complete?"ready":"isolated"}n.subscribe(I),I(),window.addEventListener("languagechange",I);const k=new At;i.add(k),k.visible=!1;const q=new sn({color:11135743});for(const P of[-3,-1.5,0,1.5,3])ee(k,[.07,.045,1.3],[P,0,0],q);f(k);const D=document.createElement("button");D.className="core-interact",D.type="button",D.hidden=!0,t.append(D);const V=document.createElement("p");V.className="core-notice",V.setAttribute("role","status"),t.append(V);const G=matchMedia("(hover: none) and (pointer: coarse)"),B=document.createElement("dialog");B.className="ending-dialog",B.setAttribute("aria-label","Restauración del sistema y créditos"),B.innerHTML=`<div class="ending-veil"></div><button class="ending-skip" type="button">OMITIR TRANSICIÓN</button>
    <section class="ending-boot" hidden aria-labelledby="ending-title">
      <div class="console-meta"><span>SYS / RESUME_087</span><span>LOCAL CHANNEL / VERIFIED</span></div>
      <div class="title-block"><p class="eyebrow">PERSONAL PORTFOLIO / RECOVERED</p><h2 id="ending-title"><span class="title-line">HUGO /</span><span class="title-line">SOFTWARE DEVELOPER</span><span class="title-cursor" aria-hidden="true">_</span></h2></div>
      <div class="load-module"><div class="load-heading"><span class="phase">RESUMING PORTFOLIO DATA…</span><span class="percentage"><span data-percent>087</span><span class="percentage-sign">%</span></span></div><div class="progress-track" role="progressbar" aria-label="Carga del portfolio restaurado" aria-valuemin="0" aria-valuemax="100" aria-valuenow="87"><div class="progress-fill"></div><div class="progress-grid" aria-hidden="true"></div></div></div>
      <div class="event-log"><p class="log-line">› Recovery verified / 20 packets restored</p><p class="log-line" data-boot-status role="status">› Resuming interrupted session…</p></div>
    </section>
    <section class="ending-signature" hidden aria-labelledby="ending-signature-title"><p class="eyebrow">END OF THE DATA BUS / SYSTEM RESTORED</p><span class="ending-heart" aria-hidden="true">♡</span><h2 id="ending-signature-title" tabindex="-1">Made with love<br>by <span>Hugo.</span></h2><p>Gracias por llegar hasta el final.</p><div class="ending-links"><button type="button" data-return>← VOLVER AL MUNDO</button><a href="#archivo/proyectos" data-archive>VER ARCHIVO ↗</a></div><small>20 / 20 PACKETS · CONNECTION COMPLETE</small></section>
    <p class="sr-only" role="status" data-announcement></p>`,e.append(B);const Y=document.createElement("canvas");Y.className="ending-cursor-particles",Y.setAttribute("aria-hidden","true"),B.append(Y),B.dataset.state="entered",ou(Y,B,{cursorOnly:!0});const ae=B.querySelector(".ending-boot"),be=B.querySelector(".ending-signature"),K=B.querySelector(".ending-skip"),_e=B.querySelector(".ending-veil");let ie="idle",Ie=0,Me=!1,ze=0,at=0;const Pe=new A,se=new A,ve=new A,W=new A(0,an(-60.4)+.48,-60.4),le=new A,ue=new A,pe=P=>P*P*(3-2*P);function ce(){if(!(!Me||ie!=="idle")){if(!n.complete){V.textContent=`CORE AISLADO / Recupera todos los paquetes para restablecer el enlace (${n.count}/20).`,ze=performance.now()+4500;return}if(E<.99){V.textContent="ENLACE VERIFICADO / Liberando el seguro del conector…",ze=performance.now()+2500;return}ie="travel",Ie=0,D.hidden=!0,V.textContent="",t.dataset.ending="true",e.dataset.ending="true",Ae=!1,ae.hidden=be.hidden=!0,K.hidden=!1,_e.style.opacity="0",B.showModal(),K.focus({preventScroll:!0}),B.querySelector("[data-announcement]").textContent="Enlace restablecido. Reanudando el sistema.",r("start")}}let Ae=!1;const de=P=>new Promise(Ge=>window.setTimeout(Ge,P));async function Fe(){if(ie!=="travel")return;ie="loading";const P=++at;B.dataset.state="restored",r("screen"),K.hidden=!0,_e.style.opacity="1",ae.hidden=!1,B.style.setProperty("--progress","87%"),B.querySelector("[data-percent]").textContent="087",B.querySelector(".progress-track").setAttribute("aria-valuenow","87"),B.querySelector(".phase").textContent="RESUMING PORTFOLIO DATA…",B.querySelector("[data-boot-status]").textContent="› Resuming interrupted session…",ae.classList.remove("is-finished"),B.classList.remove("is-revealing-signature");for(let Ge=88;Ge<=100;Ge++){if(await de(s.matches?45:180),P!==at)return;B.style.setProperty("--progress",`${Ge}%`),B.querySelector("[data-percent]").textContent=String(Ge).padStart(3,"0"),B.querySelector(".progress-track").setAttribute("aria-valuenow",String(Ge))}if(B.querySelector(".phase").textContent="SYSTEM RESTORED",B.querySelector("[data-boot-status]").textContent="› Todos los registros recuperados. Conexión completada.",B.querySelector("[data-announcement]").textContent="Carga completada al cien por cien. Sistema restaurado.",await de(s.matches?350:1200),ae.classList.add("is-finished"),s.matches)ae.hidden=!0;else{const Ge=ae.animate([{opacity:1,transform:"translateY(0)",filter:"blur(0)"},{opacity:0,transform:"translateY(-10px)",filter:"blur(3px)"}],{duration:1100,easing:"cubic-bezier(.4,0,.2,1)",fill:"forwards"});await Ge.finished,ae.hidden=!0,Ge.cancel(),await de(120)}P===at&&(be.hidden=!1,B.classList.add("is-revealing-signature"),ie="signature",be.querySelector("h2").focus({preventScroll:!0}))}async function Le(P=!1){if(ie==="signature"){if(at++,ie="leaving",s.matches?be.hidden=!0:(await ke(be,500),be.hidden=!0,be.style.removeProperty("opacity")),delete t.dataset.ending,delete e.dataset.ending,r("return"),P){location.hash="archivo/proyectos";const Ge=performance.now()+2500;for(;e.dataset.view!=="archivo"&&performance.now()<Ge;)await de(16);await de(s.matches?0:350)}else await new Promise(Ge=>requestAnimationFrame(()=>requestAnimationFrame(()=>Ge())));s.matches?B.close():(await ke(B,850),B.close(),B.style.removeProperty("opacity")),ie="idle",B.dataset.state="entered",e.querySelector(P?".reading-hero h1":".world-viewport canvas")?.focus({preventScroll:!0})}}function ke(P,Ge){return new Promise(Ee=>{const Ze=performance.now();function me(){const st=Math.min((performance.now()-Ze)/Ge,1);P.style.opacity=String(1-pe(st)),st<1?window.setTimeout(me,16):Ee()}me()})}return D.addEventListener("click",ce),K.addEventListener("click",()=>{Fe()}),B.querySelector("[data-return]").addEventListener("click",()=>{Le()}),B.querySelector("[data-archive]").addEventListener("click",P=>{P.preventDefault(),Le(!0)}),B.addEventListener("cancel",P=>{P.preventDefault(),ie==="signature"?Le():ie==="travel"&&Fe()}),window.addEventListener("keydown",P=>{P.code!=="KeyE"||P.repeat||P.ctrlKey||P.metaKey||P.altKey||!Me||e.dataset.view!=="explorar"||B.open||e.querySelector("dialog[open]")||(P.preventDefault(),ce())}),{canOccupy(P){return P>(n.complete&&E>=.99?-59.9:-56.95)},update(P,Ge,Ee,Ze,me,st){n.complete&&(N=Math.min(N+me,8.5));const Oe=Kt.clamp((N-4.4)/4,0,1);E=s.matches?Number(n.complete):pe(Oe),y.position.y=E*3.7,y.scale.y=Math.max(.001,1-E),y.visible=E<.999,y.position.z=-E*.65,C.position.y=-.22*(s.matches?Number(n.complete):Kt.clamp((N-3.8)/.6,0,1)),_.forEach((z,X)=>{const ne=n.complete&&(s.matches||E>.3+X*.075);z.color.setHex(ne?7786495:1652036),z.emissiveIntensity=ne?.65:0}),t.dataset.coreOpening=E.toFixed(3),U>=0&&U<3.8&&!s.matches?(U+=me,k.visible=!0,k.position.z=Kt.lerp(7,-60,Math.min(U/3.8,1)),k.position.y=an(k.position.z)+.14):k.visible=!1,Me=Ze&&P.z<-54.7&&ie==="idle",D.hidden=!Me;let Ke=fo(n.complete?E<.99?"LIBERANDO CONECTOR…":"[E] REANUDAR EL SISTEMA":`[E] EXAMINAR CORE · ${n.count}/20`);if(G.matches&&(Ke=Ke.replace(/^\[E\]\s*/,"")),D.textContent!==Ke&&(D.textContent=Ke),V.textContent&&performance.now()>ze&&(V.textContent=""),ie!=="travel")return;Ae||(Pe.copy(P),se.copy(Ge.position),Ae=!0),Ie+=me;const R=s.matches?1:Math.min(Ie/4.2,1),v=P.z;P.lerpVectors(Pe,W,pe(R)),P.y=an(P.z)+.48,Ee.position.copy(P),Ee.rotation.set(0,Math.PI,0),s.matches||st(Math.abs(P.z-v)),le.set(P.x,P.y+1.1,P.z+4.5-R*4.8),Ge.position.lerpVectors(se,le,pe(Math.min(R*2,1))),ve.copy(P).add(ue.set(0,.35,-1.5*R)),Ge.lookAt(ve),_e.style.opacity=String(pe(Kt.clamp((R-.65)/.35,0,1))),R===1&&Fe()}}}function Og(i,e,t,n,r,s,a){const o=matchMedia("(prefers-reduced-motion: reduce)"),l=new lt({color:1781821,metalness:.55,roughness:.4}),c=new lt({color:5333619,metalness:.8,roughness:.3}),u=new lt({color:1055009,metalness:.45,roughness:.4}),d=new lt({color:13476454,metalness:.7,roughness:.4}),f=new lt({color:5406336,metalness:.65,roughness:.45}),h=new dn(new bt(.68,.04,.035),new sn({color:16777215,toneMapped:!1}),it.length*12);h.name="memory-chip-indicators",i.add(h);const _=new Et,M=new $e,m=new At;i.add(m);const p=it.map((se,ve)=>{const W=new At;W.name=`memory-board-${se.id}`,W.position.set(Math.sign(se.x)*11.5,-2.5,(se.start+se.end)/2),W.rotation.y=Math.sign(se.x)*-.2,m.add(W),ee(W,[6.4,7.6,.55],[0,3.8,0],l),ee(W,[6.8,.25,1.15],[0,.1,0],c),ee(W,[6.4,.07,.1],[0,7.5,.32],c);const le=n.zoneCount(ve)===se.count,ue=Us(`${se.code} / ${se.title.toUpperCase()}`,le?"#8ecfe9":"#ff4935",5.8);ue.position.set(0,6.6,.4),W.add(ue);for(let ce=0;ce<18;ce++)ee(W,[.15,.55,.12],[-2.9+ce*.34,.55,.35],d);for(const ce of[-1,1]){const Ae=ce*.286;for(let de=0;de<10;de++){const Fe=-2.85+de*.62,Le=1.05+de%3*.13,ke=2.05+de%4*1.12,P=(de%2?1:-1)*.2;ee(W,[.018,Le-.65,.012],[Fe,(.65+Le)/2,Ae],f),ee(W,[.22,.018,.012],[Fe+P/2,Le,Ae],f),ee(W,[.018,ke-Le,.012],[Fe+P,(ke+Le)/2,Ae],f),ee(W,[.065,.065,.018],[Fe+P,ke,Ae],d)}for(const de of[-1,1]){ee(W,[.025,6.7,.015],[de*3.02,3.9,Ae],f);for(const Fe of[1.2,2.85,4.4,5.8,7.2])ee(W,[.12,.12,.035],[de*3.02,Fe,Ae],c),ee(W,[.052,.052,.042],[de*3.02,Fe,Ae+ce*.018],u)}for(let de=0;de<8;de++){const Fe=-2.65+de*.75;ee(W,[.23,.12,.08],[Fe,1.05,ce*.33],u);for(const Le of[-1,1])ee(W,[.045,.13,.085],[Fe+Le*.12,1.05,ce*.33],c)}}ee(W,[1.25,1.25,.16],[.65,4.2,-.35],u);for(let ce=0;ce<7;ce++)for(const Ae of[-1,1])ee(W,[.07,.075,.06],[.65+Ae*.68,3.7+ce*.16,-.34],c),ee(W,[.075,.07,.06],[.15+ce*.16,4.2+Ae*.68,-.34],c);for(let ce=0;ce<6;ce++)ee(W,[.12,1.5,.18],[-2.2+ce*.23,4.25,-.39],c);for(let ce=0;ce<6;ce++){const Ae=.1+ce%3*.63,de=2.15+Math.floor(ce/3)*.47;ee(W,[.35,.18,.13],[Ae,de,-.34],d);for(const Fe of[-1,1])ee(W,[.06,.2,.14],[Ae+Fe*.18,de,-.35],c)}for(let ce=0;ce<3;ce++){const Ae=-2+ce*1.2,de=.6+ce%2*.25,Fe=new Be(new qt(.22,.22,de,10),u);Fe.position.set(Ae,de/2+.18,-1),W.add(Fe);const Le=new Be(new qt(.2,.2,.035,10),c);Le.position.set(Ae,de+.2,-1),W.add(Le),ee(W,[.27,.012,.02],[Ae,de+.22,-1],u),ee(W,[.02,.012,.27],[Ae,de+.22,-1],u);for(const ke of[-1,1])ee(W,[.035,.2,.035],[Ae+ke*.11,.13,-1],d)}const pe=Array.from({length:12},(ce,Ae)=>{const de=-2.19+Ae%4*1.46,Fe=5.2-Math.floor(Ae/4)*1.55;ee(W,[1.08,1.05,.2],[de,Fe,.39],u);for(const Le of[-1,1])for(let ke=0;ke<4;ke++)ee(W,[.09,.055,.12],[de+Le*.58,Fe-.3+ke*.2,.4],c);return{instance:ve*12+Ae,local:new A(de,Fe,.55),world:new A,color:-1}});return{group:W,title:ue,titleRestored:le,indicators:pe,restoredAt:le?-100:1/0}});m.updateMatrixWorld(!0),p.forEach(se=>se.indicators.forEach(ve=>{se.group.localToWorld(ve.world.copy(ve.local)),_.position.copy(ve.local),_.position.y-=.27,_.position.z=.51,_.updateMatrix(),h.setMatrixAt(ve.instance,new xt().multiplyMatrices(se.group.matrixWorld,_.matrix)),h.setColorAt(ve.instance,M.setHex(16730421))}));const S=new Map,T=[];m.traverse(se=>{if(!(se instanceof Be)||!(se.material instanceof lt))return;const ve=S.get(se.material)||[];ve.push(se.geometry.clone().applyMatrix4(se.matrixWorld)),S.set(se.material,ve),T.push(se)}),T.forEach(se=>{se.removeFromParent(),se.geometry.dispose()});for(const[se,ve]of S){const W=er(ve);W&&i.add(new Be(W,se)),ve.forEach(le=>le.dispose())}const y=document.createElement("section");y.className="memory-explorer",y.hidden=!0,y.setAttribute("aria-label","Explorador de memoria"),y.innerHTML='<header><div><small>MEMORY / READ ONLY</small><h2 tabindex="-1"></h2><p><span class="memory-pointer-hint">Selecciona un registro azul.</span><span class="memory-touch-hint">Toca para abrir. Mantén pulsado para ver la etiqueta.</span></p></div><button type="button" data-back>← VOLVER AL BUS <kbd>ESC</kbd></button></header><div class="memory-chip-targets"></div><p class="memory-selection" aria-live="polite"></p>',e.append(y);const C=y.querySelector(".memory-chip-targets"),w=document.createElement("dialog");w.className="recovery-dialog memory-dialog",w.setAttribute("aria-label","Registro de memoria"),e.append(w);let x="idle",g=-1,L=0,E=0,N=-1,U=r.near,O=r.near,I=r.near;const k=new A,q=new en,D=new A,V=new en,G=new A,B=new en,Y=new un,ae=new A;function be(){const se=p[g],ve=se.group.localToWorld(new A(0,3.8,.4)),W=Math.max(8.8,7.4/(2*Math.tan(Kt.degToRad(r.fov/2))*r.aspect));I=W-.9,G.copy(se.group.localToWorld(new A(0,3.8,W+.4))),Y.position.copy(G),Y.lookAt(ve),B.copy(Y.quaternion)}function K(se){N=se,C.querySelectorAll("button").forEach(ve=>ve.classList.toggle("is-active",Number(ve.dataset.chip)===se)),y.querySelector(".memory-selection").textContent=se<0?"":zr[it[g].id][se].title}let _e=!1,ie=()=>{};function Ie(){if(!w.open)return;const se=N;w.close(),a(!1),_e?C.querySelector(`[data-chip="${se}"]`)?.focus({preventScroll:!0}):(y.querySelector("h2").focus({preventScroll:!0}),K(-1))}function Me(se){if(x!=="browse")return;const ve=zr[it[g].id][se];K(se),w.innerHTML=`<div class="recovery-dialog-bar"><span>MEMORY / ${Zo(it[g].code)} / RECORD ${String(se+1).padStart(2,"0")}</span><button type="button" data-close>VOLVER A LA TARJETA ×</button></div><div class="pda-body"><div class="pda-content">${lu(ve)}</div><div class="pda-footer"><span>RECOVERY OS / MEMORY READER</span><span>RECORD VERIFIED ●</span></div></div>`,w.querySelector("[data-close]").addEventListener("click",Ie),a(!0),w.showModal(),w.scrollTop=0}function ze(se){x!=="idle"||n.zoneCount(se)!==it[se].count||(ie(),g=se,x="enter",E=0,N=-1,y.querySelector(".memory-selection").textContent="",k.copy(r.position),q.copy(r.quaternion),U=O=r.near,D.copy(r.position),V.copy(r.quaternion),be(),y.hidden=!1,y.dataset.phase=x,y.querySelector("h2").textContent=it[se].title,C.replaceChildren(),zr[it[se].id].forEach((ve,W)=>{const le=document.createElement("button");le.type="button",le.dataset.chip=String(W),le.setAttribute("aria-label",`${ve.title}${ve.demo?" · DEMO":""}`),le.innerHTML=`<span>${String(W+1).padStart(2,"0")}</span><small>${Zo(ve.title)}</small>`;let ue,pe,ce=0,Ae=0,de=!1;const Fe=()=>{window.clearTimeout(ue),pe=void 0,N===W&&K(-1)};le.addEventListener("click",Le=>{if(de&&Le.detail!==0){Le.preventDefault(),de=!1;return}de=!1,_e=Le.detail===0,Me(W)}),le.addEventListener("pointerenter",Le=>{Le.pointerType==="mouse"&&K(W)}),le.addEventListener("pointerdown",Le=>{Le.pointerType==="mouse"||!Le.isPrimary||x!=="browse"||(ie(),ie=Fe,de=!1,pe=Le.pointerId,ce=Le.clientX,Ae=Le.clientY,le.setPointerCapture(Le.pointerId),ue=window.setTimeout(()=>{pe===void 0||x!=="browse"||(de=!0,K(W))},350))}),le.addEventListener("pointermove",Le=>{Le.pointerId===pe&&Math.hypot(Le.clientX-ce,Le.clientY-Ae)>12&&(de=!0,Fe())});for(const Le of["pointerup","pointercancel","lostpointercapture"])le.addEventListener(Le,ke=>{ke.pointerId===pe&&Fe()});le.addEventListener("contextmenu",Le=>{(pe!==void 0||de)&&Le.preventDefault()}),le.addEventListener("focus",()=>{le.matches(":focus-visible")&&K(W)}),le.addEventListener("blur",()=>{N===W&&K(-1)}),le.addEventListener("pointerleave",()=>{N===W&&K(-1)}),C.append(le)}),s(!0),t.dataset.memory="true")}function at(){ie(),x="idle",y.hidden=!0,delete t.dataset.memory,r.position.copy(k),r.quaternion.copy(q),s(!1),r.near=U,r.updateProjectionMatrix()}function Pe(){if(ie(),w.open){Ie();return}x!=="browse"&&x!=="enter"||(x="return",E=0,y.dataset.phase=x,D.copy(r.position),V.copy(r.quaternion),O=r.near,I=U,G.copy(k),B.copy(q))}return y.querySelector("[data-back]").addEventListener("click",Pe),window.addEventListener("blur",()=>ie()),document.addEventListener("visibilitychange",()=>{document.hidden&&ie()}),w.addEventListener("cancel",se=>{se.preventDefault(),Ie()}),window.addEventListener("keydown",se=>{se.key==="Escape"&&x!=="idle"&&!w.open&&(se.preventDefault(),Pe())}),window.addEventListener("resize",()=>{(x==="enter"||x==="browse")&&be()}),{open:ze,cancel(){x!=="idle"&&(Ie(),at())},update(se){if(L+=se,p.forEach((ve,W)=>{const le=n.zoneCount(W)===it[W].count;if(ve.titleRestored!==le){const ue=Us(`${it[W].code} / ${it[W].title.toUpperCase()}`,le?"#8ecfe9":"#ff4935",5.8),pe=ve.title.material;pe.map?.dispose(),pe.map=ue.material.map,pe.needsUpdate=!0,ue.geometry.dispose(),ue.material.dispose(),ve.titleRestored=le}le&&ve.restoredAt===1/0&&(ve.restoredAt=L),le||(ve.restoredAt=1/0),ve.indicators.forEach((ue,pe)=>{const ce=le&&pe<zr[it[W].id].length&&(o.matches||L-ve.restoredAt>=pe*.15),Ae=le?ce?g===W&&N===pe&&x!=="idle"?12840959:4832255:1319983:16730421;ue.color!==Ae&&(ue.color=Ae,h.setColorAt(ue.instance,M.setHex(Ae)),h.instanceColor.needsUpdate=!0)})}),x!=="idle"){if(x==="enter"||x==="return"){E+=se;const ve=o.matches?1:Math.min(E/1.7,1),W=ve*ve*(3-2*ve);if(r.position.lerpVectors(D,G,W),r.quaternion.slerpQuaternions(V,B,W),r.near=Kt.lerp(O,I,W),r.updateProjectionMatrix(),ve===1){if(x==="return"){at();return}x="browse",y.dataset.phase=x,C.querySelector("button")?.focus({preventScroll:!0})}}else r.position.copy(G),r.quaternion.copy(B),r.near=I,r.updateProjectionMatrix();r.updateMatrixWorld(),C.querySelectorAll("button").forEach((ve,W)=>{ae.copy(p[g].indicators[W].world).project(r),ve.style.left=`${(ae.x+1)*innerWidth/2}px`,ve.style.top=`${(1-ae.y)*innerHeight/2}px`})}}}}async function zg(i){const e=document.createElement("section");e.className="world-layer",e.hidden=!0,e.setAttribute("aria-label","Interior del ordenador. Explora el bus de datos con WASD o las flechas."),e.innerHTML=`<div class="world-viewport"></div>
    <div class="world-heading"><h2 tabindex="-1">THE DATA BUS<span>_</span></h2><p>Recupera los paquetes. Restaura la información.</p></div>
    <button class="skip-transit" type="button">OMITIR <kbd>ESC</kbd></button>
    <div class="world-bottom"><div class="movement-hint"><span class="keyboard-hint"><kbd>W A S D</kbd> <span>MOVER</span> &nbsp; <kbd>ESPACIO</kbd> <span>SALTAR</span> &nbsp; <span>ARRASTRA PARA MIRAR</span></span><span class="touch-hint">ARRASTRA EL ESCENARIO PARA MIRAR</span></div></div>
    <div class="mobile-controls" aria-label="Controles de movimiento"><div class="movement-joystick" role="group" aria-label="Joystick de movimiento: arrastra para moverte"><span class="joystick-guide" aria-hidden="true"></span><span class="joystick-thumb" aria-hidden="true"></span></div><button class="jump-control" type="button" aria-label="Saltar">↥</button></div>
    <span class="world-announcement sr-only" aria-live="polite"></span>`,i.append(e);const t=e.querySelector(".world-viewport"),n=window.matchMedia("(prefers-reduced-motion: reduce)"),r=matchMedia("(max-width: 700px), (pointer: coarse)").matches,s=new gg({antialias:!1,powerPreference:"high-performance",alpha:!1}),a=s.getContext(),o=a.getExtension("WEBGL_debug_renderer_info"),l=o?/swiftshader|llvmpipe|software/i.test(a.getParameter(o.UNMASKED_RENDERER_WEBGL)):!1,c=navigator.deviceMemory,u=new _g(r,r&&(c!==void 0&&c<=4||navigator.hardwareConcurrency<=4)),d=new URLSearchParams(location.search).get("quality"),f=["full","balanced","light","minimal"].indexOf(d??"");function h(){if(l)return .75;const Q=[4e6,r?1e6:25e5,7e5,42e4][u.level],qe=[1.75,r?1.25:1.5,1,.8][u.level];return Math.min(devicePixelRatio,qe,Math.sqrt(Q/(innerWidth*innerHeight)))}let _=h();s.setPixelRatio(_),s.setSize(innerWidth,innerHeight),s.setClearColor(198414),s.toneMapping=Os,s.toneMappingExposure=.95,s.domElement.tabIndex=0,s.domElement.setAttribute("aria-label","Escena 3D. Flechas o WASD para moverte, espacio para saltar."),t.append(s.domElement);const M=new wc;M.background=new $e(198414),M.fog=new Bs(198414,.019);const m=new Nr(s),p=new Cg;M.environment=m.fromScene(p,.04).texture,M.environmentIntensity=.45,p.dispose(),m.dispose();const S=new un(57,innerWidth/innerHeight,.1,200),T=new pd(8493764,1581622,3);M.add(T);const y=new _d(10929127,3);y.position.set(5,20,15),M.add(y);const C=[];for(const[Q,qe,vt]of[[-9,-3,Dn.cyan],[10,-18,Dn.red],[-9,-38,Dn.violet],[0,-61,Dn.cyan]]){const ct=new Gs(vt,60,25,2);ct.position.set(Q,4,qe),M.add(ct),C.push(ct)}let w;try{w=sessionStorage}catch{}const x=Pg(w),g=Ig(M,r||l,x),L=Ng(M,T,y,C,r||l),E=au();M.add(E.root);const N=new Tg(s);N.renderTarget1.samples=r||l?0:2,N.renderTarget2.samples=r||l?0:2,N.addPass(new wg(M,S));const U=new ji(new ye(innerWidth,innerHeight),.18,.2,1.1),O=U.setSize.bind(U);U.setSize=(Q,qe)=>O(Math.max(1,Math.round(Q*.6)),Math.max(1,Math.round(qe*.6))),N.addPass(U),N.addPass(new Rg);const I=vg(s,e),k=[],q=new A;function D(){for(const Q of k){q.copy(Q.geometry.boundingSphere.center);const qe=Math.max(0,S.position.distanceTo(q)-Q.geometry.boundingSphere.radius);Q.visible=qe<(Q.visible?38:32)}}function V(){N.render()}function G(){const Q=h();_!==Q&&(_=Q,s.setPixelRatio(_),N.setPixelRatio(_));const qe=[.6,.45,.32,.25][u.level];U.setSize=(vt,ct)=>O(Math.max(1,Math.round(vt*qe)),Math.max(1,Math.round(ct*qe))),U.setSize(innerWidth*_,innerHeight*_),L.setQuality(u.level),g.setQuality(u.level),e.dataset.quality=["full","balanced","light","minimal"][u.level],e.dataset.renderRatio=_.toFixed(2),u.reset()}G();const B=new Set,Y=e.querySelector(".movement-joystick"),ae={id:-1,x:0,z:0};function be(){const Q=ae.id;ae.id=-1,ae.x=ae.z=0,Y.classList.remove("is-active"),Y.style.setProperty("--stick-x","0px"),Y.style.setProperty("--stick-y","0px"),Q!==-1&&Y.hasPointerCapture(Q)&&Y.releasePointerCapture(Q)}const K=new A,_e=new A,ie=new A(0,.7,7);let Ie=0,Me=0,ze=0,at=0,Pe=0,se="idle",ve=0,W=0,le,ue=0,pe=!1,ce=!1,Ae=!1,de=!1;const Fe=new A,Le=new A;let ke=.38,P=.32,Ge=r?7.8:6.4;const Ee={active:!1,id:-1,x:0,y:0};function Ze(){return Le.set(Math.sin(ke)*Math.cos(P)*Ge,.65+Math.sin(P)*Ge,Math.cos(ke)*Math.cos(P)*Ge)}Ze();const me=new $e(Yn),st=new $e(Yn),Oe=Q=>Q*Q*(3-2*Q),Ke=g.path.getPointAt(1),R=g.path.getTangentAt(1),v=R.clone().multiplyScalar(g.path.getLength()*1.58/5.8),z=R.clone().multiplyScalar(-2.8).add(new A(0,.9,0)),X=new A;let ne=0,he=.5;const fe=new A,te=new A,J=new en,ge=new A(1,1,1),F=new A,oe=Og(M,i,e,x,S,Q=>{be(),B.clear(),Ee.active=!1,se=Q?"memory":"explore",e.dataset.mode=se,re.update(ie,S,!Q,0,n.matches),Q||s.domElement.focus({preventScroll:!0})},Q=>{Ae=Q,Ve()}),re=Ug(M,e,i,x,Q=>{Ae=Q,Ve()},Q=>oe.open(Q)),we=Fg(M,i,e,x,Q=>{be(),B.clear(),Ee.active=!1,Q==="start"?(se="ending",e.dataset.mode="ending"):Q==="screen"?(de=!0,Ve()):(ie.set(-1.2,0,7.15),E.root.rotation.set(0,-.95,0),ie.y=Hi(ie.z,E.root.quaternion,E.root.scale),E.root.position.copy(ie),ke=.38,P=.32,S.position.copy(ie).add(Ze()),te.copy(ie).add(new A(0,.45,0)),S.lookAt(te),W=ve=0,F.set(0,0,0),se="explore",e.dataset.mode="explore",de=!1,Ve())}),Se=it.map((Q,qe)=>x.zoneCount(qe)===Q.count);function Te(){!x.hasPda&&ie.z<3.6&&(ie.set(0,0,6.2),W=ve=0,F.set(0,0,0)),it.forEach((Q,qe)=>{Se[qe]=x.zoneCount(qe)===Q.count})}x.subscribe(Te),Te();function Ve(){be(),u.reset(),pe=ce||Ae||de,B.clear(),Ee.active=!1,e.classList.remove("is-orbiting"),e.inert=pe,se==="idle"&&(e.hidden=!ce),cancelAnimationFrame(ue),!pe&&se!=="idle"&&!document.hidden&&(ze=0,De(),se==="explore"&&s.domElement.focus({preventScroll:!0}))}function je(Q,qe){return qe.copy(Ke).addScaledVector(v,Q),qe.y-=5.5*Q*Q,qe}for(let Q=.005;Q<=2;Q+=.005)if(je(Q,fe),ps(R,Q,J),fe.y<=Hi(fe.z,J,ge)){let qe=Q-.005,vt=Q;for(let ct=0;ct<12;ct++){const Ct=(qe+vt)/2;je(Ct,fe),ps(R,Ct,J),fe.y>Hi(fe.z,J,ge)?qe=Ct:vt=Ct}he=vt;break}je(he,fe),ps(R,he,J),fe.y=Hi(fe.z,J,ge);function xe(Q=!1){se="explore",at=Ie,e.dataset.mode="explore",B.clear(),ie.copy(fe),E.root.scale.setScalar(1),E.root.quaternion.copy(Q?J:new en),ie.y=Hi(ie.z,E.root.quaternion,E.root.scale),E.root.position.copy(ie),F.copy(v).multiplyScalar(Q?.38:0),F.y=0,W=0,ve=Q?Math.min(1.55,Math.abs(v.y-11*he)*.18):0,Q||(S.position.copy(ie).add(Ze()),te.copy(ie).add(new A(0,.45,0)),S.lookAt(te)),e.querySelector(".world-bottom").inert=!1,e.querySelector(".mobile-controls").inert=!1,E.core.color.copy(st),E.core.emissive.copy(st),E.light.color.copy(st),e.querySelector(".world-announcement").textContent="Proceso de recuperación desplegado. Habla con AUX junto a la entrada: acércate y pulsa E para conocer los objetivos. Usa WASD para moverte.",s.domElement.focus({preventScroll:!0}),le?.(),le=void 0}function Je(Q){E.root.position.copy(g.path.getPointAt(0)),E.root.scale.setScalar(.1+Oe(Q)*.9),E.root.quaternion.setFromUnitVectors(new A(0,0,-1),g.path.getTangentAt(0)),S.position.copy(Fe),te.copy(E.root.position).add(new A(0,.15,0)),S.lookAt(te)}function nt(Q){const qe=Math.min(Q,.12);Ie+=qe,Me+=Q;const vt=L.update(Me,n.matches,Se,x.complete,qe);if(e.dataset.alert=vt.toFixed(2),g.update(Ie,n.matches,se==="explore"||se==="memory"?ie:fe,E.root.rotation.y),se==="forming"){Pe+=Q;const ct=Math.min(Pe/1.1,1);Je(ct),ct===1&&(se="transit",Pe=0,e.dataset.mode="transit")}else if(se==="transit"){Pe+=Q;const ct=Math.min(Pe/5.8,1),Ct=.42*ct+.58*ct*ct,Ut=g.path.getPointAt(Ct),on=g.path.getTangentAt(Ct);E.root.position.copy(Ut),E.root.quaternion.setFromUnitVectors(new A(0,0,-1),on);const wn=Ut.clone().addScaledVector(on,-2.8).add(new A(0,.9,0)),ci=Oe(Math.min(ct*5,1));_e.copy(Fe).lerp(wn,ci),S.position.copy(_e),te.copy(E.root.position).add(new A(0,.15,0)),S.lookAt(te),E.core.color.copy(me).lerp(st,Oe(Math.max(0,(ct-.65)/.35))),E.core.emissive.copy(E.core.color),E.light.color.copy(E.core.color),e.style.setProperty("--transit",`${ct*100}%`),ct===1&&(se="falling",e.dataset.mode="falling",ne=0,E.root.position.copy(Ke))}else if(se==="falling")ne=Math.min(ne+Math.min(Q,.1),he),je(ne,X),E.root.position.copy(X),ps(R,ne,E.root.quaternion),_e.copy(X).add(z),S.position.copy(_e),te.lerp(X.clone().add(new A(0,.3,0)),1-Math.exp(-qe*9)),S.lookAt(te),ne>=he&&xe(!0);else if(se==="explore"){const ct=Number(B.has("KeyD")||B.has("ArrowRight"))-Number(B.has("KeyA")||B.has("ArrowLeft"))+ae.x,Ct=Number(B.has("KeyS")||B.has("ArrowDown"))-Number(B.has("KeyW")||B.has("ArrowUp"))+ae.z,Ut=Math.max(1,Math.hypot(ct,Ct)),on=(ct*Math.cos(ke)+Ct*Math.sin(ke))/Ut,wn=(-ct*Math.sin(ke)+Ct*Math.cos(ke))/Ut,ci=(1-Math.exp(-qe*4))/4,$n=Kt.clamp(ie.x+on*qe*4.5+F.x*ci,-3.15,3.15),Or=Kt.clamp(ie.z+wn*qe*4.5+F.z*ci,-59.9,8.5);F.multiplyScalar(Math.exp(-qe*4));const bi=ie.x,Ti=ie.z,ir=Math.max(1,Math.ceil(Math.hypot($n-bi,Or-Ti)/.015)),rr=($n-bi)/ir,wi=(Or-Ti)/ir;for(let Z=0;Z<ir;Z++)g.canOccupy(ie.x+rr,ie.z,E.root.rotation.y)&&re.canOccupy(ie.x+rr,ie.z)&&(ie.x+=rr),we.canOccupy(ie.z+wi)&&g.canOccupy(ie.x,ie.z+wi,E.root.rotation.y)&&re.canOccupy(ie.x,ie.z+wi)&&(ie.z+=wi);const sr=re.canRecover?g.recover(ie.x,ie.z,W,E.root.rotation.y):[];sr.length&&(re.rescued(sr),e.querySelector(".world-announcement").textContent=`${x.count} paquetes recuperados de veinte.`);const b=Math.hypot(ie.x-bi,ie.z-Ti);W===0&&b>0&&E.animate(b),B.has("Space")&&W===0&&(ve=4),ve-=qe*11,W=Math.max(0,W+ve*qe),W===0&&(ve=0);const H=Ie-at,j=n.matches?0:Math.max(0,1-H/.16)*.07;E.root.scale.set(1+j*.5,1-j,1+j*.5);const $=n.matches||W>0?0:-Math.min(.045,b*.09/Math.max(qe,.001));if(E.root.rotation.x=Kt.lerp(E.root.rotation.x,$,1-Math.exp(-qe*5)),ct||Ct){const Z=Math.atan2(on,wn),Ce=Math.atan2(Math.sin(Z-E.root.rotation.y),Math.cos(Z-E.root.rotation.y))*Math.min(qe*12,1),He=Math.max(1,Math.ceil(Math.abs(Ce)/.03));for(let Re=0;Re<He;Re++){const Ne=E.root.rotation.y+Ce/He;if(!g.canOccupy(ie.x,ie.z,Ne))break;E.root.rotation.y=Ne}}E.root.rotation.z*=n.matches?0:Math.exp(-qe*4.5),ie.y=Hi(ie.z,E.root.quaternion,E.root.scale),E.root.position.copy(ie),E.root.position.y+=W,e.dataset.landing=`${H.toFixed(2)},${W.toFixed(3)},${F.length().toFixed(3)}`,_e.copy(ie).add(Ze()),S.position.lerp(_e,n.matches?1:1-Math.exp(-qe*3)),K.copy(ie),K.y+=.45,te.lerp(K,n.matches?1:1-Math.exp(-qe*6)),S.lookAt(te),e.dataset.camera=`${ke.toFixed(2)},${P.toFixed(2)}`,e.dataset.position=`${ie.x.toFixed(2)},${ie.z.toFixed(2)}`}re.update(ie,S,se==="explore",qe,n.matches),we.update(ie,S,E.root,se==="explore",Q,E.animate),oe.update(Q)}function De(){if(se==="idle"||document.hidden||pe)return;const Q=performance.now(),qe=ze?(Q-ze)/1e3:1/60;ze=Q,f<0&&(se==="explore"||se==="memory")&&u.sample(qe)&&G(),I.begin();const vt=performance.now();nt(qe),D(),V(),I.end(qe,performance.now()-vt),pe||(ue=requestAnimationFrame(De))}async function gt(Q){if(se!=="idle"&&se!=="explore")return;B.clear(),cancelAnimationFrame(ue),be(),Pe=0,W=ve=0,ie.set(0,an(7)+.45,7),ke=.38,P=.32,Ze(),E.core.color.copy(me),E.core.emissive.copy(me),E.light.color.copy(me);const qe=g.path.getPointAt(0);Fe.copy(qe).addScaledVector(g.path.getTangentAt(0),-3.5).add(new A(0,.65,0)),e.dataset.mode="forming",se="forming",e.querySelector(".world-bottom").inert=!0,e.querySelector(".mobile-controls").inert=!0,e.style.setProperty("--origin-x",`${Q.x+Q.width/2}px`),e.style.setProperty("--origin-y",`${Q.y+Q.height/2}px`),e.style.setProperty("--transit","0%");const vt=new Promise(ct=>{le=ct});n.matches?xe():Je(0),V(),e.hidden=!1,ze=performance.now(),ue=requestAnimationFrame(De),await vt}const Pt=["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",Q=>{if(!(pe||se==="idle"||Q.ctrlKey||Q.metaKey||Q.altKey)){if(Q.code==="Escape"&&["forming","transit","falling"].includes(se)){Q.preventDefault(),xe();return}se!=="explore"||!Pt.includes(Q.code)||Q.target instanceof Element&&Q.target.closest("button, a, input, textarea")||(Q.preventDefault(),B.add(Q.code))}}),window.addEventListener("keyup",Q=>B.delete(Q.code)),window.addEventListener("blur",()=>{B.clear(),be(),Ee.active=!1,e.classList.remove("is-orbiting")}),t.addEventListener("pointermove",Q=>{!Ee.active||Q.pointerId!==Ee.id||se!=="explore"||(ke-=(Q.clientX-Ee.x)*.005,P=Kt.clamp(P+(Q.clientY-Ee.y)*.004,.05,.95),Ee.x=Q.clientX,Ee.y=Q.clientY)}),t.addEventListener("pointerdown",Q=>{s.domElement.focus({preventScroll:!0}),!(se!=="explore"||Q.button!==0)&&(Ee.active=!0,Ee.id=Q.pointerId,Ee.x=Q.clientX,Ee.y=Q.clientY,t.setPointerCapture(Q.pointerId),e.classList.add("is-orbiting"))});for(const Q of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(Q,()=>{Ee.active=!1,e.classList.remove("is-orbiting")});t.addEventListener("wheel",Q=>{se==="explore"&&(Q.preventDefault(),Ge=Kt.clamp(Ge+Q.deltaY*.005,4,9))},{passive:!1});function gn(Q){if(Q.pointerId!==ae.id)return;const qe=Y.getBoundingClientRect(),vt=qe.width*.3,ct=Q.clientX-qe.left-qe.width/2,Ct=Q.clientY-qe.top-qe.height/2,Ut=Math.hypot(ct,Ct),on=Ut>vt?vt/Ut:1,wn=Math.max(0,(Math.min(Ut/vt,1)-.12)/.88);ae.x=Ut?ct/Ut*wn:0,ae.z=Ut?Ct/Ut*wn:0,Y.style.setProperty("--stick-x",`${ct*on}px`),Y.style.setProperty("--stick-y",`${Ct*on}px`)}Y.addEventListener("pointerdown",Q=>{pe||se!=="explore"||ae.id!==-1||Q.button!==0||(Q.preventDefault(),ae.id=Q.pointerId,Y.setPointerCapture(Q.pointerId),Y.classList.add("is-active"),gn(Q))}),Y.addEventListener("pointermove",gn);for(const Q of["pointerup","pointercancel","lostpointercapture"])Y.addEventListener(Q,qe=>{qe.pointerId===ae.id&&be()});Y.addEventListener("contextmenu",Q=>Q.preventDefault());const oi=e.querySelector(".jump-control");oi.addEventListener("pointerdown",Q=>{pe||se!=="explore"||Q.button!==0||(Q.preventDefault(),oi.setPointerCapture(Q.pointerId),B.add("Space"))});for(const Q of["pointerup","pointercancel","lostpointercapture"])oi.addEventListener(Q,()=>B.delete("Space"));oi.addEventListener("click",Q=>{Q.detail===0&&!pe&&se==="explore"&&W===0&&(ve=4)}),e.querySelector(".skip-transit").addEventListener("click",()=>xe()),window.addEventListener("resize",()=>{be(),B.delete("Space"),S.aspect=innerWidth/innerHeight,S.updateProjectionMatrix(),G(),s.setSize(innerWidth,innerHeight),N.setSize(innerWidth,innerHeight),Ge=innerWidth<700?7.8:6.4,Ze()}),document.addEventListener("visibilitychange",()=>{be(),B.clear(),cancelAnimationFrame(ue),!document.hidden&&se!=="idle"&&!pe&&(ze=0,De())}),n.addEventListener("change",()=>{n.matches&&["forming","transit","falling"].includes(se)&&xe()}),S.position.copy(Fe.copy(g.path.getPointAt(0)).addScaledVector(g.path.getTangentAt(0),-3.5).add(new A(0,.65,0))),S.lookAt(g.path.getPointAt(0)),g.update(0,!0),L.update(0,n.matches),E.root.position.copy(g.path.getPointAt(0)),M.traverse(Q=>{Q instanceof zs&&Q.layers.enable(1),!(!(Q instanceof Be)||Q.name==="motherboard-floor")&&(Q.userData.microDetail&&k.push(Q),!(Q.userData.microDetail||Q.name==="ceiling-fault-sparks"||Q.userData.skipReflection)&&(Q.geometry.computeBoundingSphere(),(Q instanceof dn||Q.geometry.boundingSphere.radius>.2)&&Q.layers.enable(1)))}),await s.compileAsync(M,S),V(),S.position.copy(fe).add(Ze()),S.lookAt(fe),V();for(const Q of[-1,1])await new Promise(qe=>requestAnimationFrame(()=>qe())),S.position.set(Q*3,3,-9),S.lookAt(Q*13,9,-23),V();S.position.copy(fe).add(Ze()),S.lookAt(fe);const li=performance.now();let Fr=3;for(let Q=0;Q<=3&&!(performance.now()-li>4500);Q++){u.level=Q,G();const qe=[];for(let vt=0;vt<18;vt++){const ct=vt<9?0:-24;K.copy(fe),K.z+=ct,S.position.copy(K).add(Ze()),S.lookAt(K);const Ct=performance.now();if(V(),await new Promise(Ut=>requestAnimationFrame(()=>Ut())),vt%9>1&&qe.push(performance.now()-Ct),performance.now()-li>4500)break}if(xg(qe,r)){Fr=Q;break}}return u.level=f>=0?f:Fr,e.dataset.calibrationMs=String(Math.round(performance.now()-li)),G(),S.position.copy(fe).add(Ze()),S.lookAt(fe),V(),Je(0),V(),{enter:gt,setPaused(Q){ce=Q,Q&&oe.cancel(),Ve()}}}export{zg as prepareWorld};
