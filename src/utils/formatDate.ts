export const formatDate = (inputString?: string): string => {
  const currentDate = new Date();
  const defaultDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1,
  ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
  inputString = inputString || defaultDate;

  const [year, month, day] = inputString
    .split('-')
    .map((str) => parseInt(str, 10));

  const dateObj = new Date(year, month - 1, day);

  const formattedDate = dateObj.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return formattedDate.replace(/\//g, '-');
};
