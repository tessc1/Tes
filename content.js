const translations = {
    id: {
        nav: {
            title: "SHEER VERIFICATION",
            veteran: "Veteran",
            gemini: "Gemini",
            k12: "K12",
            support: "Contact"
        },
        support: {
            title: "Community & Support",
            items: [
                { icon: "cube-outline", label: "Verify Bot", value: "@Tes_verif_vetranBot", link: "http://t.me/Tes_verif_vetranBot", sub: "use /vgpt" },

                { icon: "people-outline", label: "Group", value: "Join Community", link: "https://t.me/+NPwVQBn8VyQ4NmQ1", sub: "Official Group" },
                { icon: "radio-outline", label: "Channel", value: "Subscribe", link: "https://t.me/+NPwVQBn8VyQ4NmQ1", sub: "Announcements" }
            ]
        },
        hero: {
            title: "AUTOMATED<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-cyan-400'>VERIFICATION SYSTEM</span>",
            subtitle: "Advanced military-grade verification bypass protocols. Secure, fast, and fully automated."
        },
        gemini: {
            title: "Gemini Verification",
            steps: [
                "Coming Soon..."
            ],
            troubleshooting: {
                title: "Status",
                fraud: "Under development. Check back later."
            }
        },
        k12: {
            title: "K12 Education",
            steps: [
                "Coming Soon..."
            ],
            troubleshooting: {
                title: "Status",
                fraud: "Under development. Check back later."
            }
        },
        veteran: {
            title: "Veteran Full Auto",
            modes: [
                {
                    name: "DB Injection",
                    details: "Auto-injects verified identities from persons.db"
                },
                {
                    name: "Residental IP Rotation",
                    details: "Use US residential IP address"
                }
            ],
            usage: `
                <div class="space-y-6">
                    <div class="bg-dark-900/50 p-5 rounded-xl border border-gray-700">
                        <h4 class="text-lg font-bold text-accent-500 mb-4 flex items-center gap-2">
                            <i data-eva="layers-outline"></i> EXECUTION PROTOCOL
                        </h4>
                        
                        <ol class="relative border-l border-gray-700 ml-3 space-y-8">
                            <!-- Step 1 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <span class="text-xs font-bold text-white">1</span>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Session Extraction</h5>
                                <div class="text-sm text-gray-400 space-y-2">
                                    <p>Login to <a href="https://chatgpt.com" target="_blank" class="text-accent-400 hover:underline">chatgpt.com</a> <span class="text-red-400 text-xs block mt-1">(Account must NOT have K12, Go, or Plus)</span></p>
                                    <p>Navigate to <a href="https://chatgpt.com/api/auth/session" target="_blank" class="text-accent-400 hover:underline">https://chatgpt.com/api/auth/session</a></p>
                                    <p class="bg-black/30 p-2 rounded font-mono text-xs">Copy the entire JSON response (starts with {"user":...})</p>
                                </div>
                            </li>

                            <!-- Step 2 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <span class="text-xs font-bold text-white">2</span>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Initialize Verification</h5>
                                <p class="text-sm text-gray-400 mb-2">Send the command to the bot:</p>
                                <div class="bg-black/50 p-2 rounded border border-gray-700 font-mono text-sm text-green-400">
                                    /vgpt
                                </div>
                            </li>

                            <!-- Step 3 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <span class="text-xs font-bold text-white">3</span>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Token Injection</h5>
                                <p class="text-sm text-gray-400 mb-2">When prompted, paste the JSON token:</p>
                                <div class="bg-black/50 p-2 rounded border border-gray-700 font-mono text-xs text-gray-500 break-all">
                                    {"user":{...},"accessToken":"ey..."}
                                </div>
                            </li>

                            <!-- Step 4 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <i data-eva="checkmark-outline" class="fill-white w-3 h-3"></i>
                                </span>
                                <h5 class="font-bold text-green-400 mb-1">Auto-Process</h5>
                                <p class="text-sm text-gray-400">
                                    Wait for the system to complete the verification cycle. 
                                    <br>
                                    <span class="text-xs text-gray-500 italic">Success/Fail notification will be sent automatically.</span>
                                </p>
                            </li>

                            <!-- Step 5 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <i data-eva="gift-outline" class="fill-white w-3 h-3"></i>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Claim Benefit</h5>
                                <div class="text-sm text-gray-400 space-y-2">
                                    <p>Upon successful verification:</p>
                                    <p>1. Go to <a href="https://chatgpt.com/veterans-claim" target="_blank" class="text-accent-400 hover:underline">https://chatgpt.com/veterans-claim</a></p>
                                    <p>2. Claim the offer and <strong>bind your card</strong>.</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div class="flex items-center gap-3 p-4 bg-accent-500/10 border border-accent-500/20 rounded-lg">
                        <i data-eva="video-outline" class="fill-accent-500"></i>
                        <span class="text-sm text-gray-300">Video tutorial available in <a href="#" class="text-accent-400 hover:text-accent-300 font-bold">official group</a></span>
                    </div>

                    <div class="bg-dark-900 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 class="font-bold text-green-400 mb-2 text-sm">Logic Breakdown</h4>
                        <ul class="list-disc list-inside space-y-1 text-xs text-gray-400">
                            <li><strong>Identity:</strong> Selects random unused VETERAN profile</li>
                            <li><strong>Fingerprint:</strong> Spoofs Safari 15-18 & WebGL parameters</li>
                            <li><strong>Fraud Bypass:</strong> Injects synthetic mouse movements & font lists</li>
                        </ul>
                    </div>
                </div>
            `
        }
    },
    en: {
        nav: {
            title: "SHEER VERIFICATION",
            veteran: "Veteran",
            gemini: "Gemini",
            k12: "K12",
            support: "Contact"
        },
        support: {
            title: "Community & Support",
            items: [
                { icon: "cube-outline", label: "Verify Bot", value: "@Tes_verif_vetranBot", link: "http://t.me/Tes_verif_vetranBot", sub: "use /vgpt" },
                { icon: "person-outline", label: "Admin", value: "@Kepoloanjim", link: "https://t.me/Kepoloanjim", sub: "Support" },
                { icon: "people-outline", label: "Group", value: "Join Community", link: "https://t.me/+NPwVQBn8VyQ4NmQ1", sub: "Official Group" },
                { icon: "radio-outline", label: "Channel", value: "Subscribe", link: "https://t.me/+NPwVQBn8VyQ4NmQ1", sub: "Announcements" }
            ]
        },
        hero: {
            title: "AUTOMATED<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-cyan-400'>VERIFICATION SYSTEM</span>",
            subtitle: "Advanced military-grade verification bypass protocols. Secure, fast, and fully automated."
        },
        gemini: {
            title: "Gemini Verification",
            steps: [
                "Coming Soon..."
            ],
            troubleshooting: {
                title: "Status",
                fraud: "Under development. Check back later."
            }
        },
        k12: {
            title: "K12 Education",
            steps: [
                "Coming Soon..."
            ],
            troubleshooting: {
                title: "Status",
                fraud: "Under development. Check back later."
            }
        },
        veteran: {
            title: "Veteran Full Auto",
            modes: [
                {
                    name: "DB Injection",
                    details: "Auto-injects verified identities from persons.db"
                },
                {
                    name: "Residental IP Rotation",
                    details: "Spoofs AT&T/Comcast residential ranges (CIDR)"
                }
            ],
            usage: `
                <div class="space-y-6">
                    <div class="bg-dark-900/50 p-5 rounded-xl border border-gray-700">
                        <h4 class="text-lg font-bold text-accent-500 mb-4 flex items-center gap-2">
                            <i data-eva="layers-outline"></i> EXECUTION PROTOCOL
                        </h4>
                        
                        <ol class="relative border-l border-gray-700 ml-3 space-y-8">
                            <!-- Step 1 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <span class="text-xs font-bold text-white">1</span>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Session Extraction</h5>
                                <div class="text-sm text-gray-400 space-y-2">
                                    <p>Login to <a href="https://chatgpt.com" target="_blank" class="text-accent-400 hover:underline">chatgpt.com</a></p>
                                    <p>Navigate to <a href="https://chatgpt.com/api/auth/session" target="_blank" class="text-accent-400 hover:underline">https://chatgpt.com/api/auth/session</a></p>
                                    <p class="bg-black/30 p-2 rounded font-mono text-xs">Copy the entire JSON response (starts with {"user":...})</p>
                                </div>
                            </li>

                            <!-- Step 2 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <span class="text-xs font-bold text-white">2</span>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Initialize Verification</h5>
                                <p class="text-sm text-gray-400 mb-2">Send the command to the bot:</p>
                                <div class="bg-black/50 p-2 rounded border border-gray-700 font-mono text-sm text-green-400">
                                    /vgpt
                                </div>
                            </li>

                            <!-- Step 3 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <span class="text-xs font-bold text-white">3</span>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Token Injection</h5>
                                <p class="text-sm text-gray-400 mb-2">When prompted, paste the JSON token:</p>
                                <div class="bg-black/50 p-2 rounded border border-gray-700 font-mono text-xs text-gray-500 break-all">
                                    {"user":{...},"accessToken":"ey..."}
                                </div>
                            </li>

                            <!-- Step 4 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <i data-eva="checkmark-outline" class="fill-white w-3 h-3"></i>
                                </span>
                                <h5 class="font-bold text-green-400 mb-1">Auto-Process</h5>
                                <p class="text-sm text-gray-400">
                                    Wait for the system to complete the verification cycle. 
                                    <br>
                                    <span class="text-xs text-gray-500 italic">Success/Fail notification will be sent automatically.</span>
                                </p>
                            </li>

                            <!-- Step 5 -->
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-6 h-6 bg-accent-500 rounded-full -left-3 ring-8 ring-dark-900">
                                    <i data-eva="gift-outline" class="fill-white w-3 h-3"></i>
                                </span>
                                <h5 class="font-bold text-gray-200 mb-1">Claim Benefit</h5>
                                <div class="text-sm text-gray-400 space-y-2">
                                    <p>Upon successful verification:</p>
                                    <p>1. Go to <a href="https://chatgpt.com/veterans-claim" target="_blank" class="text-accent-400 hover:underline">https://chatgpt.com/veterans-claim</a></p>
                                    <p>2. Claim the offer and <strong>bind your card</strong>.</p>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div class="flex items-center gap-3 p-4 bg-accent-500/10 border border-accent-500/20 rounded-lg">
                        <i data-eva="video-outline" class="fill-accent-500"></i>
                        <span class="text-sm text-gray-300">Video tutorial available in <a href="#" class="text-accent-400 hover:text-accent-300 font-bold">official group</a></span>
                    </div>

                    <div class="bg-dark-900 p-4 rounded-lg border-l-4 border-green-500">
                        <h4 class="font-bold text-green-400 mb-2 text-sm">Logic Breakdown</h4>
                        <ul class="list-disc list-inside space-y-1 text-xs text-gray-400">
                            <li><strong>Identity:</strong> Selects random unused VETERAN profile</li>
                            <li><strong>Fingerprint:</strong> Spoofs Safari 15-18 & WebGL parameters</li>
                            <li><strong>Fraud Bypass:</strong> Injects synthetic mouse movements & font lists</li>
                        </ul>
                    </div>
                </div>
            `
        }
    }
};
