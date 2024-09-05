const simpleGit = require('simple-git');

module.exports = {
  name: "$gitCommit",
  type: "djs",
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [commitMessage] = data.inside.splits; // Captura a mensagem do commit

    if (!commitMessage) {
      return d.aoiError.fnError(d, 'custom', {}, 'No commit message provided!');
    }

    try {
      const git = simpleGit();
      await git.add('.'); // Adiciona todas as mudanças ao stage
      await git.commit(commitMessage); // Realiza o commit com a mensagem fornecida

      data.result = `Commit successfully made with message: "${commitMessage}"`;
    } catch (error) {
      data.result = `Failed to commit: ${error.message}`;
    }

    return {
      code: d.util.setCode(data),
    };
  },
};