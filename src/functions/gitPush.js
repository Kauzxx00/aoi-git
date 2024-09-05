const simpleGit = require('simple-git');

module.exports = {
  name: "$gitPush",
  type: "djs",
  code: async (d) => {
    // Pegue os parâmetros passados para a função
    const data = d.util.aoiFunc(d);
    const git = simpleGit(repoPath);
    try {
      await git.push();

      return {
        code: d.util.setCode(data),
        result: "Commit and push successful!"
      };
    } catch (error) {
      console.error("Error during git push:", error);
      return {
        code: d.util.setCode(data),
        result: `Error: ${error.message}`
      };
    }
  },
};