(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75275,e=>{"use strict";let t,i;var n=e.i(43476),r=e.i(71645),s=e.i(75056),o=e.i(25234),a=e.i(53190),l=e.i(80233),d=e.i(31067),c=e.i(90072),f=e.i(1950),f=f,u=c,p=c;let h=new p.Box3,m=new p.Vector3;class v extends p.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new p.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new p.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new p.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new p.InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceEnd",new p.InterleavedBufferAttribute(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new p.InstancedInterleavedBuffer(i,2*t,1);return this.setAttribute("instanceColorStart",new p.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new p.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new p.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new p.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),h.setFromBufferAttribute(t),this.boundingBox.union(h))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new p.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)m.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(m)),m.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(m));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var y=c,g=e.i(8560);let x=parseInt(c.REVISION.replace(/\D+/g,""));class S extends y.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:y.UniformsUtils.clone(y.UniformsUtils.merge([g.UniformsLib.common,g.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new y.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${x>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let w=x>=125?"uv1":"uv2",b=new u.Vector4,E=new u.Vector3,A=new u.Vector3,_=new u.Vector4,L=new u.Vector4,U=new u.Vector4,M=new u.Vector3,z=new u.Matrix4,B=new u.Line3,C=new u.Vector3,O=new u.Box3,j=new u.Sphere,D=new u.Vector4;function I(e,t,n){return D.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),D.multiplyScalar(1/D.w),D.x=i/n.width,D.y=i/n.height,D.applyMatrix4(e.projectionMatrixInverse),D.multiplyScalar(1/D.w),Math.abs(Math.max(D.x,D.y))}class P extends u.Mesh{constructor(e=new v,t=new S({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,r=0,s=t.count;e<s;e++,r+=2)E.fromBufferAttribute(t,e),A.fromBufferAttribute(i,e),n[r]=0===r?0:n[r-1],n[r+1]=n[r]+E.distanceTo(A);let r=new u.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new u.InterleavedBufferAttribute(r,1,0)),e.setAttribute("instanceDistanceEnd",new u.InterleavedBufferAttribute(r,1,1)),this}raycast(e,n){let r,s,o=this.material.worldUnits,a=e.camera;null!==a||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let d=this.matrixWorld,c=this.geometry,f=this.material;if(i=f.linewidth+l,null===c.boundingSphere&&c.computeBoundingSphere(),j.copy(c.boundingSphere).applyMatrix4(d),o)r=.5*i;else{let e=Math.max(a.near,j.distanceToPoint(t.origin));r=I(a,e,f.resolution)}if(j.radius+=r,!1!==t.intersectsSphere(j)){if(null===c.boundingBox&&c.computeBoundingBox(),O.copy(c.boundingBox).applyMatrix4(d),o)s=.5*i;else{let e=Math.max(a.near,O.distanceToPoint(t.origin));s=I(a,e,f.resolution)}O.expandByScalar(s),!1!==t.intersectsBox(O)&&(o?function(e,n){let r=e.matrixWorld,s=e.geometry,o=s.attributes.instanceStart,a=s.attributes.instanceEnd,l=Math.min(s.instanceCount,o.count);for(let s=0;s<l;s++){B.start.fromBufferAttribute(o,s),B.end.fromBufferAttribute(a,s),B.applyMatrix4(r);let l=new u.Vector3,d=new u.Vector3;t.distanceSqToSegment(B.start,B.end,d,l),d.distanceTo(l)<.5*i&&n.push({point:d,pointOnLine:l,distance:t.origin.distanceTo(d),object:e,face:null,faceIndex:s,uv:null,[w]:null})}}(this,n):function(e,n,r){let s=n.projectionMatrix,o=e.material.resolution,a=e.matrixWorld,l=e.geometry,d=l.attributes.instanceStart,c=l.attributes.instanceEnd,f=Math.min(l.instanceCount,d.count),p=-n.near;t.at(1,U),U.w=1,U.applyMatrix4(n.matrixWorldInverse),U.applyMatrix4(s),U.multiplyScalar(1/U.w),U.x*=o.x/2,U.y*=o.y/2,U.z=0,M.copy(U),z.multiplyMatrices(n.matrixWorldInverse,a);for(let n=0;n<f;n++){if(_.fromBufferAttribute(d,n),L.fromBufferAttribute(c,n),_.w=1,L.w=1,_.applyMatrix4(z),L.applyMatrix4(z),_.z>p&&L.z>p)continue;if(_.z>p){let e=_.z-L.z,t=(_.z-p)/e;_.lerp(L,t)}else if(L.z>p){let e=L.z-_.z,t=(L.z-p)/e;L.lerp(_,t)}_.applyMatrix4(s),L.applyMatrix4(s),_.multiplyScalar(1/_.w),L.multiplyScalar(1/L.w),_.x*=o.x/2,_.y*=o.y/2,L.x*=o.x/2,L.y*=o.y/2,B.start.copy(_),B.start.z=0,B.end.copy(L),B.end.z=0;let l=B.closestPointToPointParameter(M,!0);B.at(l,C);let f=u.MathUtils.lerp(_.z,L.z,l),h=f>=-1&&f<=1,m=M.distanceTo(C)<.5*i;if(h&&m){B.start.fromBufferAttribute(d,n),B.end.fromBufferAttribute(c,n),B.start.applyMatrix4(a),B.end.applyMatrix4(a);let i=new u.Vector3,s=new u.Vector3;t.distanceSqToSegment(B.start,B.end,s,i),r.push({point:s,pointOnLine:i,distance:t.origin.distanceTo(s),object:e,face:null,faceIndex:n,uv:null,[w]:null})}}}(this,a,n))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(b),this.material.uniforms.resolution.value.set(b.z,b.w))}}class T extends v{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){let i=e.length-t,n=new Float32Array(2*i);if(3===t)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class R extends P{constructor(e=new T,t=new S({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let V=r.forwardRef(function({points:e,color:t=0xffffff,vertexColors:i,linewidth:n,lineWidth:s,segments:o,dashed:a,...l},u){var p,h;let m=(0,f.C)(e=>e.size),y=r.useMemo(()=>o?new P:new R,[o]),[g]=r.useState(()=>new S),x=(null==i||null==(p=i[0])?void 0:p.length)===4?4:3,w=r.useMemo(()=>{let n=o?new v:new T,r=e.map(e=>{let t=Array.isArray(e);return e instanceof c.Vector3||e instanceof c.Vector4?[e.x,e.y,e.z]:e instanceof c.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(r.flat()),i){t=0xffffff;let e=i.map(e=>e instanceof c.Color?e.toArray():e);n.setColors(e.flat(),x)}return n},[e,o,i,x]);return r.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),r.useLayoutEffect(()=>{a?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[a,g]),r.useEffect(()=>()=>{w.dispose(),g.dispose()},[w]),r.createElement("primitive",(0,d.default)({object:y,ref:u},l),r.createElement("primitive",{object:w,attach:"geometry"}),r.createElement("primitive",(0,d.default)({object:g,attach:"material",color:t,vertexColors:!!i,resolution:[m.width,m.height],linewidth:null!=(h=null!=n?n:s)?h:1,dashed:a,transparent:4===x},l)))});var H=e.i(31354);function F({index:e,total:t,color:i,radius:s=2.6}){let l=(0,r.useRef)(null),d=(0,r.useRef)(null),c=e/t*Math.PI*2;(0,o.useFrame)(t=>{let i=t.clock.elapsedTime;if(l.current&&(l.current.rotation.y=.25*i),d.current){d.current.rotation.x=.4*i+e,d.current.rotation.z=.3*i;let t=.32+.04*Math.sin(1.5*i+e);d.current.scale.setScalar(t)}});let f=[Math.cos(c)*s,.35*Math.sin(2*c),Math.sin(c)*s];return(0,n.jsx)("group",{ref:l,children:(0,n.jsx)(a.Float,{speed:2,rotationIntensity:.4,floatIntensity:.6,children:(0,n.jsxs)("mesh",{ref:d,position:f,children:[(0,n.jsx)("icosahedronGeometry",{args:[1,1]}),(0,n.jsx)("meshStandardMaterial",{color:i,emissive:i,emissiveIntensity:.45,roughness:.25,metalness:.85,transparent:!0,opacity:.9})]})})})}function N(){let e=(0,r.useRef)(null);return(0,o.useFrame)(t=>{e.current&&(e.current.rotation.y=.4*t.clock.elapsedTime,e.current.rotation.x=.2*t.clock.elapsedTime)}),(0,n.jsx)(a.Float,{speed:1.5,rotationIntensity:.6,floatIntensity:.8,children:(0,n.jsxs)("mesh",{ref:e,scale:.9,children:[(0,n.jsx)("icosahedronGeometry",{args:[1,4]}),(0,n.jsx)(l.MeshDistortMaterial,{color:"#7C3AED",emissive:"#7C3AED",emissiveIntensity:.2,roughness:.35,metalness:.9,distort:.35,speed:2.5,transparent:!0,opacity:.55})]})})}function G({radius:e=2.6}){let t=(0,r.useMemo)(()=>{let t=[];for(let i=0;i<=128;i++){let n=i/128*Math.PI*2;t.push([Math.cos(n)*e,0,Math.sin(n)*e])}return t},[e]),i=(0,r.useRef)(null);return(0,o.useFrame)(e=>{i.current&&(i.current.rotation.x=Math.PI/2.4)}),(0,n.jsx)("group",{ref:i,children:(0,n.jsx)(V,{points:t,color:"#7C3AED",lineWidth:1,transparent:!0,opacity:.25})})}function W(){let e=(0,r.useMemo)(()=>{let e=new Float32Array(360);for(let t=0;t<120;t++)e[3*t]=(Math.random()-.5)*14,e[3*t+1]=(Math.random()-.5)*10,e[3*t+2]=(Math.random()-.5)*10;return e},[]),t=(0,r.useRef)(null);return(0,o.useFrame)(e=>{t.current&&(t.current.rotation.y=.03*e.clock.elapsedTime)}),(0,n.jsxs)("points",{ref:t,children:[(0,n.jsx)("bufferGeometry",{children:(0,n.jsx)("bufferAttribute",{attach:"attributes-position",args:[e,3]})}),(0,n.jsx)("pointsMaterial",{size:.035,color:"#06B6D4",transparent:!0,opacity:.45,sizeAttenuation:!0})]})}function k(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("ambientLight",{intensity:.35}),(0,n.jsx)("directionalLight",{position:[5,5,5],intensity:.6,color:"#7C3AED"}),(0,n.jsx)("directionalLight",{position:[-5,-5,-5],intensity:.35,color:"#06B6D4"}),(0,n.jsx)("pointLight",{position:[0,0,4],intensity:.6,color:"#EC4899"}),(0,n.jsx)(N,{}),(0,n.jsx)(G,{}),H.workProcess.map((e,t)=>(0,n.jsx)(F,{index:t,total:H.workProcess.length,color:e.color},e.step)),(0,n.jsx)(W,{})]})}function q(){return(0,n.jsx)("div",{className:"absolute inset-0 z-0 pointer-events-none",children:(0,n.jsx)(s.Canvas,{camera:{position:[0,1.5,7],fov:50},dpr:[1,1.5],gl:{antialias:!0,alpha:!0},style:{background:"transparent"},children:(0,n.jsx)(k,{})})})}e.s(["default",()=>q],75275)},84181,e=>{e.n(e.i(75275))}]);