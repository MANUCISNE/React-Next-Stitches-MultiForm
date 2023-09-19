import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface FormData {
  username: string;
  email: string;
  selectedPlan: string;
  selectedOption: string;
}

export default function Step4() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    selectedPlan: '',
    selectedOption: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div>
      <h2>Etapa 4: Resumo</h2>
      <p>Nome de Usuário: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Plano Selecionado: {formData.selectedPlan}</p>
      <p>Adicionais: {formData.selectedOption || 'Nenhum selecionado'}</p>
      <button>
        <Link href="/step1">Voltar para a Etapa 1</Link>
      </button>
      <br />
      <Link href="/">Voltar para o Início</Link>
    </div>
  );
};

