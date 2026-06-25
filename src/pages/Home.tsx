import Reveal from "@/components/Reveal";
import {
  academicOutcomes,
  awards,
  contact,
  education,
  featuredProjects,
  profile,
  researchDirections,
  robotProjects,
  skillGroups,
  statement,
  transitionStrengths,
} from "@/data/resumeData";

function SecNum({ n }: { n: string }) {
  return <div className="section-num">{n}</div>;
}

function SecHead({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

/* Project row component */
function ProjectRow({ p, i }: { p: typeof featuredProjects[0]; i: number }) {
  return (
    <Reveal className="project-row" delay={i * 70}>
      <div className="col-main">
        <span className="mono-label">{p.period}</span>
        <h3>{p.title}</h3>
        <p className="stack">{p.stack}</p>
        <p className="desc">{p.summary}</p>
      </div>
      <div className={`col-details${p.outcomes.length === 0 ? " col-details--full" : ""}`}>
        <div>
          <h4>我的工作</h4>
          <ul>
            {p.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        {p.outcomes.length > 0 && (
          <div>
            <h4>成果</h4>
            <ul>
              {p.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* ════════ 01 · Transition ════════ */}
      <div className="sec-bg-1">
        <section className="section" id="transition">
          <Reveal>
            <SecNum n="01 / 转向" />
            <SecHead
              title="为什么我会转向机器人"
              desc="机器人并不是我对机械背景的放弃，而是让我把机械理解、代码实现、嵌入式控制与英文资料阅读真正汇合在一起的方向。"
            />
          </Reveal>

          <div className="transition-layout">
            {transitionStrengths.map((item, i) => (
              <Reveal key={item.title} className="transition-cell" delay={i * 60}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p className="summary">{item.summary}</p>
                <p className="detail">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ════════ 02 · Projects ════════ */}
      <div className="sec-bg-2">
        <section className="section" id="projects">
          <Reveal>
            <SecNum n="02 / 项目" />
            <SecHead
              title="项目经历"
              desc="涵盖科研竞赛、系统开发与机器人实践，体现机械、控制、软件与嵌入式方向的持续积累。"
            />
          </Reveal>

          <Reveal delay={40}>
            <div className="project-feature">
              <div className="project-feature-img">
                <img src="/pics/4.jpg" alt="项目现场" />
              </div>
              <div className="project-feature-body">
                <span className="mono-label">project_gallery</span>
                <h3>项目现场 · 实验记录 · 系统实拍</h3>
                <p className="desc">
                  以下项目按照时间倒序排列，每一个都代表了我在特定阶段的技术深度与跨模块协同能力。
                </p>
              </div>
            </div>
          </Reveal>

          {/* Main Projects — staggered left-right */}
          <div className="project-list">
            {featuredProjects.map((p, i) => (
              <ProjectRow key={p.title} p={p} i={i} />
            ))}
          </div>

          {/* Robotics supplement */}
          <div style={{ marginTop: 80 }}>
            <Reveal>
              <SecNum n="补充" />
              <SecHead
                title="机器人实践项目"
                desc="围绕视觉识别、嵌入式控制与机器人系统联调展开，突出机器人方向的直接实践基础。"
              />
            </Reveal>

            <div className="project-list">
              {robotProjects.map((p, i) => (
                <ProjectRow key={p.title} p={p} i={i} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ════════ 03 · Academic ════════ */}
      <div className="sec-bg-1">
        <section className="section" id="academic">
          <Reveal>
            <SecNum n="03 / 学术" />
            <SecHead
              title="学术成果与竞赛获奖"
              desc="论文、专利、软著与竞赛结果共同构成研究积累与实践成果。"
            />
          </Reveal>

          <div className="stats-strip">
            {profile.metrics.map((m, i) => (
              <Reveal key={m.label} className="stat-cell" delay={i * 50}>
                <span className="num">{m.value}</span>
                <span className="lbl">{m.label}</span>
                <span className="note">{m.note}</span>
              </Reveal>
            ))}
          </div>

          <div className="academic-split">
            <Reveal className="academic-pane" delay={40}>
              <h3>学术成果</h3>
              {academicOutcomes.map((a) => (
                <div key={a.label} className="academic-item">
                  <span className="l">{a.label}</span>
                  <span className="r">{a.value}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="academic-pane" delay={80}>
              <h3>竞赛获奖</h3>
              {awards.map((a) => (
                <div key={`${a.name}-${a.result}`} className="award-item">
                  <span className="lvl">{a.level}</span>
                  <span className="name">{a.name}</span>
                  <span className="result">{a.result}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      </div>

      {/* ════════ 04 · Skills ════════ */}
      <div className="sec-bg-2">
        <section className="section" id="skills">
          <Reveal>
            <SecNum n="04 / 能力" />
            <SecHead
              title="能力不是孤立技能，而是服务于机器人问题的组合"
              desc="把每一类能力放回机器人系统的真实场景中理解——框架开发、底层控制、视觉感知以及工程表达与研究准备。"
            />
          </Reveal>

          <div className="skills-cluster">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} className="skill-cluster-cell" delay={i * 60}>
                <span className="mono-label">{`cluster_0${i + 1}`}</span>
                <h3>{g.title}</h3>
                <p>{g.description}</p>
                <div className="skill-flow">
                  {g.items.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ════════ 05 · Education ════════ */}
      <div className="sec-bg-1">
        <section className="section" id="education">
          <Reveal>
            <SecNum n="05 / 教育" />
            <SecHead
              title="教育背景"
              desc="本科训练立足机械设计制造，持续延展到控制、嵌入式与系统实现。"
            />
          </Reveal>

          <div className="edu-layout">
            <Reveal className="edu-main" delay={40}>
              <h3>{education.school}</h3>
              <p className="sub">{education.major}</p>
              <div className="edu-meta-row">
                <span>{education.degree}</span>
                <span>{education.period}</span>
                <span>{education.rank}</span>
              </div>
              <div className="edu-block">
                <h4>主修课程</h4>
                <p>{education.courses.join("、")}</p>
              </div>
              <div className="edu-block">
                <h4>荣誉与工具</h4>
                <p>{education.honors.join("、")}</p>
                <p style={{ marginTop: 8 }}>{education.tools}</p>
              </div>
            </Reveal>

            <div className="edu-side">
              <Reveal className="edu-img-cell" delay={80}>
                <img src="/pics/2.jpg" alt="实验" />
                <div className="edu-img-cap">
                  <span>lab_view</span>
                  <strong>机械课程延展到控制、视觉与系统验证</strong>
                </div>
              </Reveal>
              <Reveal className="edu-img-cell" delay={120}>
                <img src="/pics/3.jpg" alt="嵌入式" />
                <div className="edu-img-cap">
                  <span>embedded</span>
                  <strong>课程能力落到机器人软硬件联调实践中</strong>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* ════════ 06 · Research ════════ */}
      <div className="sec-bg-2">
        <section className="section" id="research">
          <Reveal>
            <SecNum n="06 / 研究" />
            <SecHead
              title="研究生阶段希望继续深耕的方向"
              desc="希望在机器人控制、感知与系统集成三个方向上继续深入，把已有项目经验提升为更系统的研究训练。"
            />
          </Reveal>

          <div className="research-layout">
            {researchDirections.map((r, i) => (
              <Reveal key={r.title} className="research-cell" delay={i * 60}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                <div className="skill-flow">
                  {r.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ════════ Statement + Contact ════════ */}
      <div className="statement-area" id="statement">
        <div className="statement-inner">
          <Reveal className="statement-text" delay={40}>
            <span className="mono-label">statement</span>
            <h2>{statement.title}</h2>
            {statement.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="contact-box" delay={100}>
            <span className="mono-label">contact</span>
            <h3>{contact.title}</h3>
            <p>{contact.description}</p>
            {contact.items.map((item) => (
              <span key={item} className="info-line">
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </div>

      {/* ════════ Footer ════════ */}
      <footer className="footer">
        <div className="footer-left">
          <span className="logo">何昊</span>
          <span className="copy">机器人方向 · 跨学科申请者</span>
        </div>
        <div className="footer-right">
          <a href="#projects">项目</a>
          <a href="#skills">能力</a>
          <a href="#education">教育</a>
          <a href="#statement">联系</a>
        </div>
      </footer>
      <div className="footer-band">
        <div className="big-text">ROBOTICS</div>
      </div>
    </>
  );
}
