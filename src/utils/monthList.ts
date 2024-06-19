import { addMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

function formatMonthYear(date: Date) {
  const month = format(date, "MMM", { locale: ptBR });
  const year = format(date, "yy", { locale: ptBR });
  return `${month.charAt(0).toUpperCase()}${month.slice(1)}/${year}`;
}

export default function MonthList(date: Date) {
  const result = [];
  let currentDate = date;

  for (let i = 0; i < 6; i++) {
    const formattedDate = formatMonthYear(addMonths(currentDate, i));
    result.push(formattedDate);
  }

  return result;
}
