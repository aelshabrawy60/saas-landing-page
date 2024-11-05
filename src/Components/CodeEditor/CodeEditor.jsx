import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CodeEditor.css';

function CodeEditor({ name, lines }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate once when the element comes into view
  });

  const controls = useAnimation();

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  function colorCode(line, colors = ['#c89dff', '#fed600', '#85caff', '#ce9178', '#dcdcaa']) {
    if (typeof line !== 'string') {
      console.error("Invalid input: line must be a string");
      return [];
    }

    const match = line.match(/^(\s*)(.*)/);
    const leadingSpaces = match[1];
    const content = match[2];
    let code = [];

    if (leadingSpaces) {
      code.push('\u00A0'.repeat(leadingSpaces.length)); // Add non-breaking spaces
    }

    if (content) {
      const words = content.split(' ');

      words.forEach((word, index) => {
        let color = colors[2];

        if (word === "import" || word === "from" || word === "if") {
          color = colors[0];
        }
        if (word === "{" || word === "}" || word === "(" || word === ")") {
          color = colors[1];
        }

        code.push(<span style={{ color }} key={index}>{word}</span>);

        if (index < words.length - 1) {
          code.push('\u00A0'); // Add non-breaking space between words
        }
      });
    }

    return code;
  }

  return (
    <div ref={ref} className="code-editor-container pt-3 px-4 pb-3">
        <div className='d-flex justify-content-center mb-3'>
            <div className='code_dots d-flex gap-2'>
                <div className='code_dot' style={{backgroundColor: '#ff6c6c'}}></div>
                <div className='code_dot' style={{backgroundColor: '#ffbd45'}}></div>
                <div className='code_dot' style={{backgroundColor: '#3dd56d'}}></div>
            </div>
            <div className='code__title'>
                {name}
            </div>
        </div>
      <div className="code-lines">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            className="code-line"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}
            transition={{
              delay: index * 0.2, // Stagger the appearance of each line
              duration: 0.4
            }}
          >
            {colorCode(line)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CodeEditor;
