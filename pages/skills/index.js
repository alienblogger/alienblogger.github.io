import Layout from "../../components/Layout";
import Router from "next/router";
import Spacer from "../../components/Spacer";

function Skills() {
  return (
    <Layout>
      <div className="container">
        <div className="flex just-space-between min-width-150-px card-border">
          <ul>
            <li>Linux</li>
            <li>React</li>
            <li>Git</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Adobe Illustrator</li>
            <li>Python</li>
            <li>Webpack</li>
          </ul>
          <ul>
            <li>VueJS</li>
            <li>RiotJS</li>
            <li>React Native</li>
            <li>AngularJS</li>
            <li>Angular 2+</li>
            <li>Loopback - Node</li>
            <li>HTML/CSS/JS</li>
            <li>Ruby</li>
          </ul>
        </div>
        <Spacer y={1}></Spacer>
        <button
          className="button margin-top-sm align-start black outline-btn"
          onClick={() => Router.back()}
        >
          Back
        </button>
      </div>
    </Layout>
  );
}

export default Skills;
