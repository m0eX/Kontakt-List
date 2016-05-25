using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace KontaktList.Models
{
    public class KontaktDb : DbContext
    {
        public DbSet<KontaktList.Models.Kontakt> Kontakti { get; set; }
    }
}
