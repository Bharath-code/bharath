import axios from "axios";
import handleError from "cli-handle-error";
import ora from "ora";

const api_URL = "https://api.github.com/users/Bharath-code";
const spinner = ora({ text: `` });

const getGithubFollowers = async () => {

        spinner.start(`Fetching github followers...`);
        const res = await axios.get(api_URL);

        try {
          const data = await res.data;
          handleError(`API CALL FAILED`, null, true, true);
          spinner.succeed(`Followers fetched.`);
          console.log(`
        
    Github followers : ${data.followers}
        
          `);
          
        } catch (error) {
          handleError(`API CALL FAILED`, error, true, true);
        }
};

export default getGithubFollowers;
