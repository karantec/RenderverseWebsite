export default function TechShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen">
          {/* Node.js - Large card on left */}
          <div className="col-span-3 row-span-3 bg-black/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center justify-center p-6">
            <div className="w-24 h-24 mb-4">
              <svg viewBox="0 0 256 289" className="w-full h-full">
                <path
                  fill="#539E43"
                  d="M128 288.464c-3.975 0-7.685-1.06-11.048-2.976l-35.293-20.889c-5.24-2.976-2.65-4.036-0.931-4.596 6.829-2.385 8.219-2.915 15.048-7.028 0.794-.265 1.589-.265 2.12.265l27.075 16.06c1.06.529 2.385.529 3.18 0l105.739-61.217c1.06-.53 1.589-1.326 1.589-2.385V84.508c0-1.06-.529-2.12-1.589-2.65L127.735 20.64c-1.06-.529-2.385-.529-3.445 0L18.285 81.857c-1.06.529-1.589 1.589-1.589 2.65v122.324c0 1.06.794 2.12 1.589 2.65l28.93 16.854c15.577 7.949 25.421-1.326 25.421-10.635V93.487c0-1.589 1.326-3.18 3.18-3.18h13.458c1.589 0 3.18 1.326 3.18 3.18v122.059c0 21.418-11.578 33.26-31.785 33.26-6.299 0-11.313 0-25.156-6.829L7.949 228.378c-6.829-4.036-11.048-11.578-11.048-19.527V86.627c0-7.949 4.22-15.492 11.048-19.527L113.688 5.883c6.564-3.975 15.492-3.975 22.056 0L241.483 67.1c6.829 4.036 11.048 11.578 11.048 19.527v122.324c0 7.949-4.22 15.492-11.048 19.527L135.744 289.26c-3.18 1.916-6.829 2.915-11.048 2.915z"
                />
                <path
                  fill="#539E43"
                  d="M144.292 223.455c-46.34 0-55.906-21.418-59.147-31.785-.529-1.589.265-3.445 2.12-4.036l14.518-8.484c1.589-.794 3.445-.265 4.036 1.324 2.915 19.527 11.578 29.356 38.653 29.356 23.863 0 33.955-5.24 33.955-17.932 0-7.214-2.915-12.719-39.712-16.325-30.461-3.18-49.255-9.743-49.255-34.22 0-22.585 19.263-35.822 51.64-35.822 36.268 0 54.267 12.719 56.387 39.977.265 1.589-.529 3.18-1.854 3.975l-14.784 8.484c-1.324.794-3.18.265-3.975-1.324-4.036-19.263-14.518-25.421-35.822-25.421-26.499 0-29.62 11.578-29.62 20.377 0 8.219 3.709 10.635 38.388 15.313 34.485 4.596 50.846 11.048 50.846 35.028.265 24.627-20.112 38.388-55.641 38.388z"
                />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold">Node.Js</h3>
          </div>

          {/* Next.js */}
          <div className="col-span-3 row-span-1 bg-black/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 256 256" className="w-full h-full">
                  <rect width="256" height="256" rx="60" fill="#000" />
                  <path
                    fill="#fff"
                    d="M121.451 28.054c-.43.039-.86.078-1.29.157-15.808 2.676-30.536 8.862-43.25 17.656-2.637 1.85-7.454 5.29-8.386 5.996-.233.195-.195.312.156.312.273 0 2.207-1.367 4.297-3.062 8.936-7.298 20.602-12.819 32.463-15.378 3.668-.786 9.113-1.368 10.24-1.095.43.117.547.039.431-.234-.273-.43-2.051-.547-4.18-.586-1.016-.039-1.95-.039-2.48.039z"
                  />
                  <path
                    fill="#fff"
                    d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 240c-61.9 0-112-50.1-112-112S66.1 16 128 16s112 50.1 112 112-50.1 112-112 112z"
                  />
                  <path
                    fill="#fff"
                    d="M73.858 124.812c-1.055 0-1.719.664-1.719 1.836v42.539c0 1.172.664 1.836 1.719 1.836h7.734c.39 0 .586-.195.586-.586v-39.921h37.148v39.921c0 .39.195.586.586.586h7.734c1.055 0 1.719-.664 1.719-1.836v-42.539c0-1.172-.664-1.836-1.719-1.836h-7.734c-.39 0-.586.195-.586.586v18.125H82.178v-18.125c0-.39-.195-.586-.586-.586h-7.734zm56.03 0c-1.055 0-1.719.664-1.719 1.836v42.539c0 1.172.664 1.836 1.719 1.836h29.688c1.055 0 1.719-.664 1.719-1.836v-5.078c0-.39-.195-.586-.586-.586h-21.641v-10.938h19.844c.39 0 .586-.195.586-.586v-5.078c0-.39-.195-.586-.586-.586h-19.844v-10.938h21.641c.39 0 .586-.195.586-.586v-5.078c0-.39-.195-.586-.586-.586h-29.101c-.39 0-.586.195-.586.586z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold">Next.Js</h3>
            </div>
          </div>

          {/* Vue.js */}
          <div className="col-span-3 row-span-1 bg-teal-900/30 rounded-3xl border border-teal-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 256 221" className="w-full h-full">
                  <path
                    fill="#41B883"
                    d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"
                  />
                  <path
                    fill="#41B883"
                    d="M0 0l128 220.8L256 0h-51.2L128 132.48 51.2 0z"
                  />
                  <path
                    fill="#35495E"
                    d="M51.2 0l76.8 132.48L204.8 0h-47.36L128 51.2 97.92 0z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold">Vue.Js</h3>
            </div>
          </div>

          {/* Swift */}
          <div className="col-span-3 row-span-2 bg-blue-900/30 rounded-3xl border border-blue-700/50 backdrop-blur-sm flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 256 256" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="swift-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FA7343" />
                    <stop offset="100%" stopColor="#FF5722" />
                  </linearGradient>
                </defs>
                <rect
                  width="256"
                  height="256"
                  rx="60"
                  fill="url(#swift-gradient)"
                />
                <path
                  fill="#fff"
                  d="M128 32c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96-42.98-96-96-96zm42.67 131.33c-7.03 7.03-18.43 7.03-25.46 0L128 146.12l-17.21 17.21c-7.03 7.03-18.43 7.03-25.46 0s-7.03-18.43 0-25.46L102.54 121l-17.21-17.21c-7.03-7.03-7.03-18.43 0-25.46s18.43-7.03 25.46 0L128 95.54l17.21-17.21c7.03-7.03 18.43-7.03 25.46 0s7.03 18.43 0 25.46L153.46 121l17.21 17.21c7.03 7.03 7.03 18.43 0 25.46z"
                />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold">Swift</h3>
          </div>

          {/* Angular.js */}
          <div className="col-span-3 row-span-2 bg-red-900/20 rounded-3xl border border-red-700/50 backdrop-blur-sm flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 256 272" className="w-full h-full">
                <path
                  fill="#E23237"
                  d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"
                />
                <path
                  fill="#B52E31"
                  d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z"
                />
                <path
                  fill="#FFF"
                  d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 29.367.498-83.556-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold">Angular.Js</h3>
          </div>

          {/* Unreal Engine - Central large card */}
          <div className="col-span-6 row-span-2 bg-black/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 mb-6">
                <svg viewBox="0 0 256 256" className="w-full h-full">
                  <rect width="256" height="256" fill="#0E1128" />
                  <path fill="#FFF" d="M128 16L48 224h160L128 16z" />
                  <path fill="#0E1128" d="M128 48l-48 144h96L128 48z" />
                  <circle cx="96" cy="160" r="8" fill="#00D4FF" />
                  <circle cx="160" cy="160" r="8" fill="#00D4FF" />
                  <circle cx="128" cy="128" r="8" fill="#00D4FF" />
                  <circle cx="112" cy="96" r="6" fill="#00D4FF" />
                  <circle cx="144" cy="96" r="6" fill="#00D4FF" />
                </svg>
              </div>
              <h3 className="text-white text-3xl font-bold">Unreal Engine</h3>
            </div>
          </div>

          {/* MongoDB */}
          <div className="col-span-3 row-span-2 bg-green-900/30 rounded-3xl border border-green-700/50 backdrop-blur-sm flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 256 549" className="w-full h-full">
                <path
                  fill="#01EC64"
                  d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677z"
                />
                <path
                  fill="#13AA52"
                  d="M140.86 533.664c-.427 2.133-1.28 4.051-1.28 6.184 0 15.154-11.52 25.6-26.246 25.6s-26.246-10.446-26.246-25.6c0-2.133-.853-4.051-1.28-6.184l54.932-.64-.88.64z"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold">MongoDB</h3>
          </div>

          {/* PHP */}
          <div className="col-span-2 row-span-1 bg-purple-900/30 rounded-3xl border border-purple-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6">
                <svg viewBox="0 0 256 134" className="w-full h-full">
                  <ellipse cx="128" cy="67" rx="128" ry="67" fill="#6181B6" />
                  <ellipse cx="128" cy="67" rx="123" ry="62" fill="#FFF" />
                  <ellipse cx="128" cy="67" rx="118" ry="57" fill="#6181B6" />
                  <path
                    fill="#FFF"
                    d="M128 20c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-40 32c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm80 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold">PHP</h3>
            </div>
          </div>

          {/* Unity */}
          <div className="col-span-2 row-span-1 bg-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6">
                <svg viewBox="0 0 256 263" className="w-full h-full">
                  <rect width="256" height="263" fill="#000" />
                  <path
                    fill="#FFF"
                    d="M128 0L42.7 75v112.5L128 263l85.3-75.5V75L128 0zm0 50l42.7 37.5v75L128 200l-42.7-37.5v-75L128 50z"
                  />
                  <circle cx="128" cy="131.5" r="25" fill="#FFF" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-bold">Unity</h3>
            </div>
          </div>

          {/* "and many more..." */}
          <div className="col-span-2 row-span-1 bg-indigo-900/30 rounded-3xl border border-indigo-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <p className="text-white text-sm font-medium text-center">
              and many more...
            </p>
          </div>

          {/* Python */}
          <div className="col-span-4 row-span-1 bg-yellow-900/20 rounded-3xl border border-yellow-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 256 255" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="python-gradient-1"
                      x1="12.959%"
                      y1="12.039%"
                      x2="79.639%"
                      y2="78.201%"
                    >
                      <stop offset="0%" stopColor="#387EB8" />
                      <stop offset="100%" stopColor="#366994" />
                    </linearGradient>
                    <linearGradient
                      id="python-gradient-2"
                      x1="19.128%"
                      y1="20.579%"
                      x2="90.742%"
                      y2="88.429%"
                    >
                      <stop offset="0%" stopColor="#FFE052" />
                      <stop offset="100%" stopColor="#FFC331" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#python-gradient-1)"
                    d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                  />
                  <path
                    fill="url(#python-gradient-2)"
                    d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold">Python</h3>
            </div>
          </div>

          {/* Flutter */}
          <div className="col-span-4 row-span-1 bg-blue-900/30 rounded-3xl border border-blue-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 256 317" className="w-full h-full">
                  <path
                    fill="#40D0FD"
                    d="M157.666 0L0 157.667l45.253 45.254L254.371 0h-96.705z"
                  />
                  <path
                    fill="#41D0FD"
                    d="M156.567 145.396L72.249 229.714l45.254 45.254 129.824-129.824-45.254-45.254-45.506.506z"
                  />
                  <path
                    fill="#1FBCFD"
                    d="M71.6 230.364l40.506-40.506 45.254 45.254-40.506 40.507L71.6 230.364z"
                  />
                  <path
                    fill="#095A9D"
                    d="M115.12 274.619l40.506-40.506L71.6 316.463l40.507-40.506 3.013-1.338z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold">Flutter</h3>
            </div>
          </div>

          {/* Kotlin */}
          <div className="col-span-4 row-span-1 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-3xl border border-orange-700/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10">
                <svg viewBox="0 0 256 256" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="kotlin-gradient-1"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0095D5" />
                      <stop offset="30%" stopColor="#238AD9" />
                      <stop offset="60%" stopColor="#557BDE" />
                      <stop offset="100%" stopColor="#7F6CE2" />
                    </linearGradient>
                    <linearGradient
                      id="kotlin-gradient-2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#C757BC" />
                      <stop offset="20%" stopColor="#D0609A" />
                      <stop offset="40%" stopColor="#E1725C" />
                      <stop offset="60%" stopColor="#EE7E2F" />
                      <stop offset="100%" stopColor="#F58220" />
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#kotlin-gradient-1)"
                    points="0,256 128,128 0,0"
                  />
                  <polygon
                    fill="url(#kotlin-gradient-2)"
                    points="128,128 256,0 256,256"
                  />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-bold">Kotlin</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
