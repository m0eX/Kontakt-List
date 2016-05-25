using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KontaktList.Models
{
    public class Kontakt
    {
        public int KontaktId { get; set; }
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string Adresa { get; set; }
        public string Telefon { get; set; }
        public string Tag { get; set; }
        public string Email { get; set; }
    }
}
