import axios from "axios";
import handleError from "cli-handle-error";
import ora from "ora";
import stripHTML from "cli-strip-html";
import chalk from "chalk";

const { dim } = chalk;
const spinner = ora({ text: "" });
const apiURL = `https://Awais.dev/api/posts`;

const getBlogPost = async () => {
  spinner.start(dim(`Fetching 10 latest blog posts…`));
  const res = await axios.get(apiURL);

  try {
    const data = await res.data;
    handleError(`API CALL FAILED`, null, true, true);
    const posts = res.data.map((post) => {
      return { title: stripHTML(post.title.rendered), link: post.link };
    });
    spinner.stop();

    posts.map(({ title, link }, index) => {
      console.log(`${dim(`#${++index}`)} ${title}`);
      console.log(dim(link));
      console.log();
    });
  } catch (error) {
    handleError(`API CALL FAILED`, error, true, true);
  }
};

export default getBlogPost;
