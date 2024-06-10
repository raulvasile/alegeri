const time = 900000;

const judete = [
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ab_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ar_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ag_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bc_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bh_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bn_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bt_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_br_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bv_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bz_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cs_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ct_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cv_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_db_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_dj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_gl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_gr_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_gj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_hr_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_hd_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_il_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_is_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_if_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_mm_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_mh_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ms_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_nt_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ot_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ph_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sm_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s1_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s2_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s3_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s4_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s5_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s6_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sb_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sv_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_tr_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_tm_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_tl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_vl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_vs_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_vn_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sr_prov.json'
];

const denumire_sectii = [
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_ab.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_ar.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_ag.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_bc.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_bh.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_bn.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_bt.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_br.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_bv.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_bz.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_cl.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_cs.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_cj.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_ct.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_cv.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_db.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_dj.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_gl.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_gr.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_gj.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_hr.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_hd.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_il.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_is.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_if.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_mm.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_mh.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_ms.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_nt.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_ot.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_ph.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_sj.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_sm.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_b.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_sb.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_tr.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_tm.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_tl.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_vl.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_vs.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_vn.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/simpv/lists/precincts_sr.json',
]

let total = [];
let count = 0;
let total_voturi_v = [];
let total_nule = [];

const sectii = {};

const fs = require('fs');

const total_prezenta = 9661773;

const getData = (url, date_sectii) => {
  return new Promise((resolve, reject) => {
    let baza_judet = url.split('/');
    let baza_judet_el = baza_judet.slice(-1)[0];
    let judet = baza_judet_el.split('_');

    fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        let total_votes = 0;
        let total_voturi_valide = 0;
        let total_voturi_nule = 0;
        const table = data.stages.PROV?.scopes?.PRCNCT?.categories?.EUP?.table;

        if (table) {
          Object.keys(table).forEach((item) => {
            let voturi_nicu = table[item].votes.filter((tab) => tab.candidate == 'ȘTEFĂNUȚĂ NICOLAE-BOGDĂNEL');
            // let voturi_nicu = table[item].votes.filter((tab) => tab.candidate == 'GHEORGHE VLAD-DAN');
            // let voturi_nicu = table[item].votes.filter((tab) => tab.candidate == 'ALIANȚA DREAPTA UNITĂ USR - PMP - FORȚA DREPTEI');
            // let voturi_nicu = table[item].votes.filter((tab) => tab.candidate == 'PARTIDUL REÎNNOIM PROIECTUL EUROPEAN AL ROMÂNIEI');
            // let voturi_nicu = table[item].votes.filter((tab) => tab.candidate == 'PARTIDUL S.O.S. ROMÂNIA');
            total_votes += parseInt(voturi_nicu[0].votes, 10);

            let voturi_valide = table[item].fields.filter((tab) => tab.name == 'e');
            total_voturi_valide += parseInt(voturi_valide[0].value);

            let voturi_nule = table[item].fields.filter((tab) => tab.name == 'f');
            total_voturi_nule += parseInt(voturi_nule[0].value);

            let tv = parseInt(voturi_valide[0].value, 10) + parseInt(voturi_nule[0].value, 10);

            const date = date_sectii.find(obj => obj.id == item);

            sectii[item] = {
              voturi_valide: parseInt(voturi_valide[0].value, 10),
              voturi_nule: parseInt(voturi_nule[0].value, 10),
              total_voturi: tv,
              procent_nule: Math.trunc((parseInt(voturi_nule[0].value, 10) * 100) / tv),
              cod_sectie: date?.code,
              nume_sectie: date?.name,
              uat_id: date?.uat_id,
              locality_id: date?.locality_id
            };
          });
        }

        console.log(`total_votes ${judet[1]} = ${total_votes} | total_voturi_valide ${total_voturi_valide} | procent judet: ${parseFloat(total_votes * 100 / total_voturi_valide).toFixed(2)}%`);
        total_voturi_v.push(total_voturi_valide);
        total_nule.push(total_voturi_nule);

        total.push(total_votes);
        count++;
        if (count == judete.length) {

          let total_voturi = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
          let t_v_v = total_voturi_v.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
          let total_n = total_nule.reduce((acc, curr) => acc + curr, 0);

          console.log('TOTAL VOTURI VALIDE = ', t_v_v.toLocaleString('en-US'));
          console.log(`TOTAL VOTURI NULE: ${total_n.toLocaleString('en-US')}`);
          console.log('Total voturi Nicu Stefanuta = ', total_voturi.toLocaleString('en-US'));
          console.log(`Procent Nicu Stefanuta:  ${parseFloat((total_voturi / t_v_v) * 100).toFixed(4)}%`);
          console.log(`Procent voturi numarate (aproximativ): ${parseFloat(((t_v_v + total_n) / total_prezenta) * 100).toFixed(4)}%`);

          // console.log(sectii);
          const jsonArray = Object.entries(sectii);

          // Sort the array based on the procent_nule key
          jsonArray.sort((b, a) => a[1].procent_nule - b[1].procent_nule);

          fs.writeFileSync('sectii.json', JSON.stringify(jsonArray));
        }
      });
  });
};

const promises = [];
denumire_sectii.forEach((judet) => {
  promises.push(fetch(judet).then(res => res.json()));
  /*fetch(judet)
    .then(res => {
      promises.push(res.json())
    });*/
});

Promise.all(promises).then((sectii) => {
  let final_sectii = sectii.flat();
  judete.forEach((judet) => {
    getData(judet, final_sectii); 
  });
});


