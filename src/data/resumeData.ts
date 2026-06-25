export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ProjectItem = {
  period: string;
  title: string;
  role: string;
  stack: string;
  summary: string;
  responsibilities: string[];
  outcomes: string[];
  takeaway: string;
};

export type AwardItem = {
  level: string;
  name: string;
  result: string;
  role?: string;
};

export type StrengthItem = {
  title: string;
  summary: string;
  detail: string;
};

export type AcademicItem = {
  label: string;
  value: string;
  note: string;
};

export type ResearchItem = {
  title: string;
  description: string;
  tags: string[];
};

export const profile = {
  name: "何昊",
  badge: "Mechanical · Embedded · Vision · Robotics",
  title: "面向机器人研究的\n跨学科申请者",
  typewriterText: "面向机器人研究的\n跨学科申请者",
  subtitle:
    "以机械背景为起点，持续延展到机器人视觉、嵌入式控制、ROS 开发与英文技术资料阅读，希望在研究生阶段进一步深耕机器人系统研究。",
  mission:
    "我希望把机械直觉、代码实现、闭环控制与系统集成能力融合起来，进入机器人控制、感知与系统协同相关方向继续深入。",
  heroImage: "/pics/1.jpg",
  quickFacts: [
    { label: "本科方向", value: "机械设计制造及其自动化" },
    { label: "综测专业排名", value: "6 / 76" },
    { label: "英语能力", value: "CET-4 / CET-6" },
    { label: "关键词", value: "ROS / OpenCV / Linux / Python" },
  ],
  metrics: [
    { label: "智能机器相关项目", value: "3", note: "机械臂 / 智能小车 / 仿生蝴蝶" },
    { label: "IEEE 论文", value: "3", note: "国际会议论文" },
    { label: "软著与专利", value: "7", note: "软著 4 + 专利 3" },
    { label: "交叉能力簇", value: "4", note: "机械 / 编程 / 英语 / 工程实战" },
  ],
  focus: ["机器人控制", "嵌入式系统", "机器视觉", "系统集成", "传感器融合"],
};

export const education = {
  school: "机电与车辆工程学院",
  major: "机械设计制造及其自动化（中外合作办学）",
  period: "2023.09 - 至今",
  degree: "本科",
  rank: "综测专业排名 6 / 76",
  courses: [
    "机械设计",
    "机械原理",
    "机械工程控制基础",
    "电工与电子技术",
    "理论力学",
    "材料力学",
    "复杂机械系统设计与分析实践",
    "计算机辅助工程与分析 CAE",
  ],
  honors: ["校科技创新先进个人", "学院三等奖学金"],
  tools:
    "熟练运用 Python、C、SolidWorks、Catia、Abaqus、Keil5、VS Code、Claude Code、掌握 ROS Noetic、OpenCV、Linux、SSH/VNC 远程开发。",
};

export const transitionStrengths: StrengthItem[] = [
  {
    title: "机械根基",
    summary: "机械专业背景让我能从物理世界理解机器人，而不只是停留在抽象算法层面。",
    detail:
      "对运动学、结构设计与力学特性的理解，使我在处理关节控制、力反馈和机构方案时，具备区别于纯软件背景学习者的直觉优势。",
  },
  {
    title: "编程能力",
    summary: "从 Java 入门到项目实战，我已经把代码能力真正用于机器人和嵌入式场景。",
    detail:
      "无论是底层驱动的 C 语言开发，还是上层 ROS 节点与视觉模块的 Python 编程，我都在实际项目中完成过从开发到联调的闭环。",
  },
  {
    title: "英语水平",
    summary: "机器人前沿资料高度依赖英文，我能够直接阅读并吸收一手技术材料。",
    detail:
      "ROS 文档、SLAM 论文、芯片 datasheet 和中外合作交流场景，让英语能力不只是成绩，而是我的真实研究工具。",
  },
  {
    title: "竞赛淬炼",
    summary: "竞赛与工程项目让我形成了抗压推进、多模块协同和交付意识。",
    detail:
      "数学建模、电子设计、机创和机器人类项目的训练，让我更适应机器人系统长期调试、多模块协作和复杂问题排查的工作方式。",
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    period: "2024.12 - 至今",
    title: "多能融合先锋：风-光-流多能耦合一体化发电系统",
    role: "核心成员",
    stack: "Python / PID 调参 / 控制器设计 / 机械结构联动",
    summary:
      "围绕新能源捕获与多能耦合发电开展研究，推进风-光-流多能融合发电系统的实用化。",
    responsibilities: [
      "结合 PID 调参与控制器设计，参与整体实物系统制作。",
      "利用 Python 完成捕能系统相关代码设计与调试。",
      "在机械结构与控制实现之间完成联动验证。",
    ],
    outcomes: ["校级立项", "全国大学生节能减排社会实践与科技竞赛全国三等奖", "发明专利一项", "软件著作权一件"],
    takeaway: "该项目体现了我在机械系统、控制实现与工程落地之间进行跨模块协同的能力。",
  },
  {
    period: "2025.01 - 2025.05",
    title: "机械制造数字化运维系统",
    role: "第一负责人",
    stack: "Spring Boot / Python / HTML / CSS / JavaScript / LLM",
    summary:
      "面向机械制造场景研发数字化运维平台，提升异常感知、辅助诊断与排故效率。",
    responsibilities: [
      "基于 Spring Boot 搭建核心服务端，负责设备数据接收、存储与后端 API 开发。",
      "利用 Python 对工业监测数据进行清洗、特征提取并完成部分检测算法实现。",
      "集成 LLM 接口，开发自然语言辅助诊断能力，并使用 HTML/CSS/JS 实现监控看板。",
    ],
    outcomes: ["中国大学生计算机设计大赛重庆市三等奖", "软件著作权一件"],
    takeaway: "该项目证明我不仅能做底层控制，也能完成数据处理、后端服务和前端展示的完整系统实现。",
  },
  {
    period: "2025.05 - 2025.10",
    title: "灵韵智舞：基于深度学习的多模态交互动态舞蹈生成系统",
    role: "核心成员",
    stack: "ESP32 / OpenPose / LLM / 运动学映射 / 总线舵机控制",
    summary:
      "结合 OpenPose 姿态估计与 LLM，开发基于 ESP32 的 16 自由度智能人形机器人系统。",
    responsibilities: [
      "完成 ESP32 控制系统开发，实现 16 个总线舵机的高效通信与精准协同调度。",
      "搭建 OpenPose 模型并设计空间坐标与运动学映射算法。",
      "将人体姿态数据转化为机器人底层舵机角度指令，实现动作复现。",
    ],
    outcomes: ["中国机器人大赛暨 RoboCup 机器人世界杯中国赛全国三等奖"],
    takeaway: "该项目把视觉理解、动作映射和机器人执行机构控制真正连接在一起。",
  },
  {
    period: "2025.11 - 至今",
    title: "基于多模态感知的仿生蝴蝶",
    role: "核心成员",
    stack: "单片机 / C 语言 / SPI / UART / CRSF / Simulink / PID",
    summary:
      "基于微型控制器与高精度传感器，研发具有多模态环境感知能力的微型仿生扑翼飞行器。",
    responsibilities: [
      "设计微型电控方案，使用 C 语言完成单片机底层驱动开发。",
      "熟练运用 SPI、UART 与 CRSF 等协议，实现主控板与编码器、无线接收机的高效通信。",
      "完成 Simulink 建模与姿态分析，将整定后的 PID 参数移植至单片机系统，优化区间映射与防积分饱和算法。",
      "实现左右双翼高精度同步平滑运动",
      "具备高频稳定的位置、速度与环控制能力",
    ],
    outcomes: [],
    takeaway: "该项目体现了我在复杂机电系统中的建模、控制实现与稳定性优化能力。",
  },
];

export const robotProjects: ProjectItem[] = [
  {
    period: "机器人项目 01",
    title: "ArmPi FPV 智能视觉机械臂",
    role: "系统开发与联调",
    stack: "树莓派 / ROS Noetic / OpenCV / PyQt / Python",
    summary:
      "基于树莓派与 ROS1 框架搭建智能视觉机械臂系统，完成视觉识别、自动分拣、目标追踪与智能拼图等功能。",
    responsibilities: [
      "结合 OpenCV 完成目标颜色识别、位置标定与实时追踪。",
      "基于视觉反馈实现物体自动分类、抓取、堆叠与拼图任务。",
      "完成树莓派环境搭建、SSH/VNC 远程连接、舵机调试与功能联调。",
      "编写机械臂使用说明书、简化操作手册与模块梳理文档。",
      "熟悉 catkin / rospy / topic / service 开发流程",
      "掌握机器人视觉系统标定与调试方法",
      "形成完整的机器人系统集成与排障经验",
    ],
    outcomes: [],
    takeaway: "这个项目让我第一次把视觉、控制与系统部署真正串成一条完整机器人开发链路。",
  },
  {
    period: "机器人项目 02",
    title: "智能小车嵌入式控制系统",
    role: "主要开发者",
    stack: "MSPM0G3507 / C 语言 / PID 算法 / 传感器融合",
    summary:
      "围绕电赛小车完成嵌入式控制系统开发，重点负责软件架构、驱动开发、闭环控制与系统联调。",
    responsibilities: [
      "负责整体嵌入式软件设计，搭建底层驱动到任务逻辑的分层式代码架构。",
      "完成电机、编码器、循迹传感器、陀螺仪、串口通信和 OLED 显示等模块驱动开发。",
      "基于 PID 算法实现速度闭环控制与方向修正，结合多传感器反馈完成循迹控制。",
      "参与问题定位与系统调试，处理电机干扰、传感器稳定性与串口实时性等工程问题。",
      "具备嵌入式分层架构与多模块协同控制经验",
      "积累闭环控制调参与系统联调能力",
      "形成面向真实硬件问题的工程排障思维",
    ],
    outcomes: [],
    takeaway: "这个项目强化了我对底层控制、传感器融合与工程稳定性的理解。",
  },
];

export const academicOutcomes: AcademicItem[] = [
  { label: "软件著作权", value: "4", note: "体现持续的软件系统产出能力" },
  { label: "发明专利", value: "2", note: "当前处于申请中" },
  { label: "实用新型专利", value: "1", note: "当前处于申请中" },
  { label: "IEEE 国际会议论文", value: "3", note: "体现科研表达与学术积累" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "机器人框架与系统开发",
    description: "围绕 ROS 节点开发、系统部署、模块通信与实验联调展开，能够从框架层组织机器人功能模块。",
    items: ["ROS Noetic", "catkin", "rospy", "topic / service", "树莓派", "SSH / VNC"],
  },
  {
    title: "嵌入式平台与底层控制",
    description: "能够完成单片机底层驱动、控制逻辑实现、通信联调与闭环控制参数整定。",
    items: ["STM32", "MSPM0", "C 语言", "PID 闭环控制", "串口通信", "硬件联调"],
  },
  {
    title: "视觉感知与传感器",
    description: "具备从摄像头视觉识别到编码器、陀螺仪等传感器接入与反馈控制的综合实践经验。",
    items: ["OpenCV", "颜色识别", "位置标定", "目标追踪", "AS5600", "IMU / 编码器"],
  },
  {
    title: "工程表达与研究准备",
    description: "除了实现能力，也具备文档整理、英文资料阅读、技术交流与研究方向表达能力。",
    items: ["英文文档阅读", "技术文档编写", "中外合作交流", "问题排查", "系统集成", "项目推进"],
  },
];

export const awards: AwardItem[] = [
  { level: "国家级", name: "中国高校智能机器人创意大赛", result: "二等奖", role: "第二负责人" },
  { level: "国家级", name: "中国机器人大赛暨 RoboCup 机器人世界杯中国赛", result: "三等奖", role: "核心成员" },
  { level: "省级", name: "全国大学生英语竞赛", result: "三等奖" },
  { level: "校级", name: "校科技创新先进个人", result: "荣誉称号" },
  { level: "学院", name: "学院三等奖学金", result: "奖学金" },
];

export const researchDirections: ResearchItem[] = [
  {
    title: "机器人控制",
    description: "希望进一步系统学习运动控制、闭环调节与本体执行机构协同，让控制策略真正作用于实体机器人。",
    tags: ["PID", "执行机构控制", "姿态反馈", "闭环系统"],
  },
  {
    title: "感知与视觉",
    description: "希望继续拓展机器人视觉感知能力，把图像处理、定位识别与传感反馈更紧密地服务于运动决策。",
    tags: ["OpenCV", "视觉标定", "目标追踪", "多传感器反馈"],
  },
  {
    title: "系统集成",
    description: "希望在研究生阶段继续训练多模块协同能力，把机械、控制、软件和实验验证组织为完整系统。",
    tags: ["ROS", "嵌入式", "软硬件联调", "机器人平台"],
  },
];

export const statement = {
  title: "为什么适合机器人方向",
  paragraphs: [
    "机器人是机械本体、嵌入式控制、上层算法与实验系统集成高度交叉的方向，而我的成长路径恰好沿着这几条线逐渐汇合。",
    "我不是从单一维度切入机器人，而是在机械专业基础上，主动把编程能力、底层控制、视觉处理和英文技术资料阅读能力不断补齐，这使我更适合进入需要综合能力的机器人研究场景。",
    "研究生阶段，我希望在机器人控制、感知与系统集成方向继续深入，把已有的工程实践沉淀为更系统的研究能力。",
  ],
};

export const contact = {
  title: "联系与延展",
  description:
    "欢迎通过以下方式与我联系或查看更多信息。如需完整简历、项目详细资料或进一步交流，可随时通过邮箱联系我。",
  items: ["姓名：何昊", "邮箱：1840013365@qq.com", "GitHub / 作品集：暂无", "论文链接：https://ieeexplore.ieee.org/document/11385491"],
};

export const videoConfig = {
  url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4",
};
