import React, { useState } from 'react';
import Link from 'next/link';

export default function Step3 () {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];

  return (
    <div>
      <h2>Etapa 3: Adicionais ao Plano</h2>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <button>
          <Link href="/step4">Next Step</Link>
        </button>
      )}
      <br />
      <Link href="/step2">Go Back</Link>
    </div>
  );
};
