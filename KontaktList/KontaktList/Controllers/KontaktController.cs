using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KontaktList.Models;

namespace KontaktList.Controllers
{
    public class KontaktController : Controller
    {
        private KontaktDb _context = null;
        public KontaktController()
        {
            _context = new KontaktDb();
        }
        // GET: Kontakt
        public JsonResult GetContacts()
        {
            List<Kontakt> listKontakti = _context.Kontakti.ToList();
            return Json(new { list = listKontakti },JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetContactById(int id)
        {
            Kontakt kontakt = _context.Kontakti.Where(c =>c.KontaktId==id).SingleOrDefault();
            return Json(new { kontakt = kontakt }, JsonRequestBehavior.AllowGet);
        }
        public JsonResult AddContact(Kontakt kontakt)
        {
            _context.Kontakti.Add(kontakt);
            _context.SaveChanges();
            return Json(new { status = "Kontakt dodan uspješno" });
        }
        public JsonResult EditContact(Kontakt kontakt)
        {
            _context.Entry(kontakt).State = System.Data.Entity.EntityState.Modified;
            _context.SaveChanges();
            return Json(new { status = "Kontakt izmijenjen uspješno" });
        }
        public JsonResult DeleteContact(int id)
        {
            Kontakt kontakt = _context.Kontakti.Where(c=>c.KontaktId == id).SingleOrDefault();
            _context.Kontakti.Remove(kontakt);
            _context.SaveChanges();
            return Json(new { status = "Kontakt izbrisan uspješno" });
        }

    }
}