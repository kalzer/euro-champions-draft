const shape = (name, slots) => ({ name, slots });

export const formations = {
  "4-3-3": shape("4-3-3", [
    { position:"GK", x:50, y:92 }, { position:"LB", x:14, y:72 }, { position:"CB", x:38, y:75 }, { position:"CB", x:62, y:75 }, { position:"RB", x:86, y:72 },
    { position:"CDM", x:50, y:58 }, { position:"CM", x:32, y:48 }, { position:"CM", x:68, y:48 },
    { position:"LW", x:18, y:24 }, { position:"ST", x:50, y:17 }, { position:"RW", x:82, y:24 }
  ]),
  "4-2-3-1": shape("4-2-3-1", [
    { position:"GK", x:50, y:92 }, { position:"LB", x:14, y:72 }, { position:"CB", x:38, y:75 }, { position:"CB", x:62, y:75 }, { position:"RB", x:86, y:72 },
    { position:"CDM", x:38, y:58 }, { position:"CDM", x:62, y:58 },
    { position:"LW", x:18, y:38 }, { position:"CAM", x:50, y:36 }, { position:"RW", x:82, y:38 }, { position:"ST", x:50, y:17 }
  ]),
  "4-1-2-1-2": shape("4-1-2-1-2", [
    { position:"GK", x:50, y:92 }, { position:"LB", x:14, y:72 }, { position:"CB", x:38, y:75 }, { position:"CB", x:62, y:75 }, { position:"RB", x:86, y:72 },
    { position:"CDM", x:50, y:58 }, { position:"CM", x:30, y:45 }, { position:"CM", x:70, y:45 }, { position:"CAM", x:50, y:32 }, { position:"ST", x:38, y:16 }, { position:"ST", x:62, y:16 }
  ]),
  "4-4-2": shape("4-4-2", [
    { position:"GK", x:50, y:92 }, { position:"LB", x:14, y:72 }, { position:"CB", x:38, y:75 }, { position:"CB", x:62, y:75 }, { position:"RB", x:86, y:72 },
    { position:"LM", x:17, y:46 }, { position:"CM", x:39, y:50 }, { position:"CM", x:61, y:50 }, { position:"RM", x:83, y:46 }, { position:"ST", x:39, y:18 }, { position:"ST", x:61, y:18 }
  ]),
  "3-5-2": shape("3-5-2", [
    { position:"GK", x:50, y:92 }, { position:"CB", x:28, y:75 }, { position:"CB", x:50, y:78 }, { position:"CB", x:72, y:75 },
    { position:"LWB", x:12, y:50 }, { position:"CDM", x:50, y:58 }, { position:"CM", x:34, y:43 }, { position:"CM", x:66, y:43 }, { position:"RWB", x:88, y:50 }, { position:"ST", x:38, y:17 }, { position:"ST", x:62, y:17 }
  ]),
  "3-4-3": shape("3-4-3", [
    { position:"GK", x:50, y:92 }, { position:"CB", x:28, y:75 }, { position:"CB", x:50, y:78 }, { position:"CB", x:72, y:75 },
    { position:"LM", x:15, y:50 }, { position:"CM", x:38, y:52 }, { position:"CM", x:62, y:52 }, { position:"RM", x:85, y:50 },
    { position:"LW", x:20, y:23 }, { position:"ST", x:50, y:16 }, { position:"RW", x:80, y:23 }
  ]),
  "5-3-2": shape("5-3-2", [
    { position:"GK", x:50, y:92 }, { position:"LWB", x:10, y:70 }, { position:"CB", x:30, y:76 }, { position:"CB", x:50, y:79 }, { position:"CB", x:70, y:76 }, { position:"RWB", x:90, y:70 },
    { position:"CM", x:32, y:48 }, { position:"CDM", x:50, y:55 }, { position:"CM", x:68, y:48 }, { position:"ST", x:38, y:17 }, { position:"ST", x:62, y:17 }
  ]),
  "4-3-1-2": shape("4-3-1-2", [
    { position:"GK", x:50, y:92 }, { position:"LB", x:14, y:72 }, { position:"CB", x:38, y:75 }, { position:"CB", x:62, y:75 }, { position:"RB", x:86, y:72 },
    { position:"CM", x:27, y:50 }, { position:"CDM", x:50, y:57 }, { position:"CM", x:73, y:50 }, { position:"CAM", x:50, y:34 }, { position:"ST", x:38, y:16 }, { position:"ST", x:62, y:16 }
  ]),
  "4-2-2-2": shape("4-2-2-2", [
    { position:"GK", x:50, y:92 }, { position:"LB", x:14, y:72 }, { position:"CB", x:38, y:75 }, { position:"CB", x:62, y:75 }, { position:"RB", x:86, y:72 },
    { position:"CDM", x:38, y:57 }, { position:"CDM", x:62, y:57 }, { position:"CAM", x:32, y:35 }, { position:"CAM", x:68, y:35 }, { position:"ST", x:38, y:16 }, { position:"ST", x:62, y:16 }
  ]),
  "4-5-1": shape("4-5-1", [
    { position:"GK", x:50, y:92 }, { position:"LB", x:14, y:72 }, { position:"CB", x:38, y:75 }, { position:"CB", x:62, y:75 }, { position:"RB", x:86, y:72 },
    { position:"LM", x:14, y:46 }, { position:"CM", x:35, y:51 }, { position:"CDM", x:50, y:58 }, { position:"CM", x:65, y:51 }, { position:"RM", x:86, y:46 }, { position:"ST", x:50, y:16 }
  ])
};
