import { addMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

function firstUpper(month: string) {
  return month.charAt(0).toUpperCase() + month.slice(1);
}

export default function MonthList(date: Date) {
  const result = [];
  let currentDate = date;

  for (let i = 0; i < 7; i++) {
    const formattedDate = format(addMonths(currentDate, i), "MMMM yyyy", {
      locale: ptBR,
    });
    result.push(firstUpper(formattedDate));
  }

  return result;
}
