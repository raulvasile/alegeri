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

let total = [];
let count = 0;
let total_voturi_v = [];
let total_nule = [];

// const total_prezenta = 9565155;
const total_prezenta = 9661773;


const getData = (url) => {
  return new Promise((resolve, reject) => {
    let baza_judet = url.split('/');
    let baza_judet_el = baza_judet.slice(-1)[0];
    let judet = baza_judet_el.split('_');

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let total_votes = 0;
        let total_voturi_valide = 0;
        let total_voturi_nule = 0;
        const table = data.stages.PROV?.scopes?.PRCNCT?.categories?.EUP?.table;

        if (table) {
          Object.keys(table).forEach((item) => {
            let voturi_nicu = table[item].votes.filter((tab) => tab.candidate == 'ȘTEFĂNUȚĂ NICOLAE-BOGDĂNEL');
            // let voturi_nicu = table[item].votes.filter((tab) => tab.candidate == 'GHEORGHE VLAD-DAN');
            total_votes += parseInt(voturi_nicu[0].votes, 10);

            let voturi_valide = table[item].fields.filter((tab) => tab.name == 'e');
            total_voturi_valide += parseInt(voturi_valide[0].value);

            let voturi_nule = table[item].fields.filter((tab) => tab.name == 'f');
            total_voturi_nule += parseInt(voturi_valide[0].value);

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

          console.log('TOTAL VOTURI NS = ', total_voturi.toLocaleString('en-US'));
          console.log('TOTAL VOTURI VALIDE = ', t_v_v.toLocaleString('en-US'));
          console.log(`Procent:  ${parseFloat((total_voturi / t_v_v) * 100).toFixed(4)}%`);
          console.log(`Procent voturi numarate (aproximativ): ${parseFloat((t_v_v / total_prezenta) * 100).toFixed(4)}%`);
          // console.log(`Numar voturi nule: ${total_n}`);
          // console.log(`Procent voturi numarate: ${((t_v_v / (total_prezenta - total_n)) * 100).toFixed(4)}%`);
        }
      });
  });
};


judete.forEach((judet) => {
  getData(judet);
});

