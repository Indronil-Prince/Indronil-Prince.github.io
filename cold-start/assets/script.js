const copyButton = document.getElementById('copyBib');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const citation = document.getElementById('bibtex').innerText;
    try {
      await navigator.clipboard.writeText(citation);
      const previous = copyButton.innerHTML;
      copyButton.textContent = 'Copied! ✓';
      window.setTimeout(() => { copyButton.innerHTML = previous; }, 1800);
    } catch (e) {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('bibtex'));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      copyButton.textContent = 'Selected — press Ctrl+C';
    }
  });
}
