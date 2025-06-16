
const a = ["algorithms", "technical","behavioural","web-dev","fullstack","mobile"]
const b = [""];

export const navFr = [
    {
        heading: "French",
        links: [
            { sub: "Accueil", href:"/"},

        ]
    }
]

export const navSections = [
    
    {
        heading: "Home Page",
        links: [
            { sub: "Home", href: "/" }
        ]
    },

    {
        heading: "Algorithms Cheat Sheet",
        links: [
            { sub: "DSA Runtimes Cheat Sheet", href: `${a[0]}/runtimes` },
            { sub: "Array", href: `${a[0]}/array` },
            { sub: "String", href: `${a[0]}/string` },
            { sub: "Stack", href: `${a[0]}/stack`},
            { sub: "Queue", href: `${a[0]}/queue`},
            { sub: "Linked List", href: `${a[0]}/linkedlist` },
            { sub: "Hash Table", href: `${a[0]}/hashtable` },
            { sub: "Recursion", href: `${a[0]}/recursion` },
            { sub: "Search and Sort", href: `${a[0]}/searchsort` },
        ]
    },


    {
        heading: "Technical Interview",
        links: [

            { sub: "Common LeetCode Patterns", href: "#1" },
            { sub: "Keywords for Identifying Strategy", href: `${a[1]}/keywords`}
        ],
    },

    {
        heading: "Behavioural Interview",
        links: [
            { sub: "STAR Method", href: "#2" },
            { sub: "Sample Q's", href: "#3" }
        ],
    },


    {
        heading: "Web Development Interview",
        links: [
            { sub: "React-based Interview", href: "/3" },
            { sub: "Angular-based Interview", href: "/5" },
            { sub: "Express.js", href: "/4" },
            { sub: "Node.js", href: "/6" },
            { sub: "Regex", href: "/7" },
            { sub: "JavaScript Notes", href: "/1" },
            { sub: "HTML/CSS Notes", href: "/9" }
        ],
    },

    {
        heading: "Backend/Full-stack Interview",
        links: [
            { sub: "Restful APIs", href: "/9" },
            { sub: "SQL", href: "/1" },
            { sub: "Spring Boot", href: "/30" }
        ],
    },

    {
        heading: "Mobile Developer (Swift) Interview",
        links: [
            { sub: "hold", href: "/4" }
        ],
    }

]