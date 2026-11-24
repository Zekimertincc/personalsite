import type { Lang } from '../i18n/ui';

type Group = { group: string; items: [string, string][] };

/** How well I know each tool, said as a sentence I can defend in an interview. */
export const skills: Record<Lang, Group[]> = {
  en: [
    { group: 'Method', items: [
      ['Design documents', 'Use cases, activity and sequence diagrams, data models (MCD/MLD), API specs — written for every SAE.'],
      ['Maintainable, tested code', 'Layered routes → services → repositories, written decision records, a refusal test for every access rule (144 tests on the tournament API).'],
      ['AI-assisted development', 'Claude Code with project rules (CLAUDE.md), a read-only reviewer sub-agent and parallel sessions; every diff reviewed before commit.'],
    ]},
    { group: 'Programming languages', items: [
      ['TypeScript · JavaScript', 'Front and back: React, Express, React Native.'],
      ['Java', 'The Cabinet Phénix tool and a 2D game, both in JavaFX.'],
      ['Python', 'Flask APIs and scripting in TouchDesigner.'],
      ['SQL', 'Hand-written queries and schemas, without an ORM, in the tournament platform.'],
    ]},
    { group: 'Frameworks & libraries', items: [
      ['React', 'Used in shipped projects (tournament platform, open-days app, Quizmo).'],
      ['React Native · Expo', 'Building Climat Fitness with it now.'],
      ['Node.js · Express · Socket.io', 'The tournament API and its real-time layer.'],
      ['Flask', 'The open-days app API and Quizmo.'],
      ['JavaFX · Apache POI', 'Desktop apps and Excel processing.'],
    ]},
    { group: 'Databases', items: [
      ['PostgreSQL · SQLite', 'SQLite in the tournament platform; PostgreSQL in Quizmo and course work.'],
      ['MongoDB', 'Used in shipped projects.'],
      ['Neo4j', 'Course labs.'],
    ]},
    { group: 'Tools & infra', items: [
      ['Git · Linux · SSH', 'Daily use, tmux sessions on remote machines.'],
      ['Docker', 'In my homelab and in IUT labs.'],
      ['Vercel · Caddy · Proxmox', 'Vercel for deploys; Caddy and Proxmox in my homelab.'],
      ['Kubernetes', 'Learning it at school.'],
    ]},
  ],
  fr: [
    { group: 'Méthode', items: [
      ['Dossiers de conception', 'Cas d’utilisation, diagrammes d’activité et de séquence, modèles de données (MCD/MLD), spécifications d’API — rédigés pour chaque SAÉ.'],
      ['Code maintenable et testé', 'Architecture en couches routes → services → repositories, décisions documentées, un test de refus pour chaque règle d’accès (144 tests sur l’API de tournois).'],
      ['Développement assisté par IA', 'Claude Code avec des règles de projet (CLAUDE.md), un sous-agent de relecture en lecture seule et des sessions en parallèle ; chaque diff relu avant le commit.'],
    ]},
    { group: 'Langages', items: [
      ['TypeScript · JavaScript', 'Front et back : React, Express, React Native.'],
      ['Java', 'L’outil du Cabinet Phénix et un jeu 2D, tous deux en JavaFX.'],
      ['Python', 'API Flask et scripts dans TouchDesigner.'],
      ['SQL', 'Requêtes et schémas écrits à la main, sans ORM, dans la plateforme de tournois.'],
    ]},
    { group: 'Frameworks & bibliothèques', items: [
      ['React', 'Utilisé dans des projets livrés (plateforme de tournois, application JPO, Quizmo).'],
      ['React Native · Expo', 'Utilisé en ce moment pour développer Climat Fitness.'],
      ['Node.js · Express · Socket.io', 'L’API de tournois et sa couche temps réel.'],
      ['Flask', 'L’API de l’application JPO et Quizmo.'],
      ['JavaFX · Apache POI', 'Applications desktop et traitement de fichiers Excel.'],
    ]},
    { group: 'Bases de données', items: [
      ['PostgreSQL · SQLite', 'SQLite dans la plateforme de tournois ; PostgreSQL dans Quizmo et en cours.'],
      ['MongoDB', 'Utilisé dans des projets livrés.'],
      ['Neo4j', 'TP de cours.'],
    ]},
    { group: 'Outils & infra', items: [
      ['Git · Linux · SSH', 'Au quotidien, sessions tmux sur des machines distantes.'],
      ['Docker', 'Dans mon homelab et en TP à l’IUT.'],
      ['Vercel · Caddy · Proxmox', 'Vercel pour les déploiements ; Caddy et Proxmox dans mon homelab.'],
      ['Kubernetes', 'En cours d’apprentissage à l’IUT.'],
    ]},
  ],
  tr: [
    { group: 'Yöntem', items: [
      ['Tasarım dokümanları', 'Kullanım senaryoları, aktivite ve sekans diyagramları, veri modelleri (MCD/MLD), API şartnameleri — her SAÉ için yazıldı.'],
      ['Bakımı kolay, test edilmiş kod', 'Katmanlı routes → services → repositories, yazılı karar kayıtları, her erişim kuralı için bir ret testi (turnuva API’sinde 144 test).'],
      ['AI destekli geliştirme', 'Proje kurallarıyla (CLAUDE.md) Claude Code, salt okunur bir reviewer alt-ajanı ve paralel oturumlar; her diff commit’ten önce incelenir.'],
    ]},
    { group: 'Programlama dilleri', items: [
      ['TypeScript · JavaScript', 'Front ve back: React, Express, React Native.'],
      ['Java', 'Cabinet Phénix aracı ve bir 2D oyun, ikisi de JavaFX ile.'],
      ['Python', 'Flask API’leri ve TouchDesigner’da script.'],
      ['SQL', 'Turnuva platformunda ORM olmadan elle yazılmış sorgular ve şemalar.'],
    ]},
    { group: 'Framework’ler ve kütüphaneler', items: [
      ['React', 'Teslim edilen projelerde (turnuva platformu, açık kapı günleri uygulaması, Quizmo).'],
      ['React Native · Expo', 'Şu an Climat Fitness’ı bununla geliştiriyorum.'],
      ['Node.js · Express · Socket.io', 'Turnuva API’si ve gerçek zamanlı katmanı.'],
      ['Flask', 'Açık kapı günleri uygulamasının API’si ve Quizmo.'],
      ['JavaFX · Apache POI', 'Masaüstü uygulamaları ve Excel işleme.'],
    ]},
    { group: 'Veritabanları', items: [
      ['PostgreSQL · SQLite', 'Turnuva platformunda SQLite; Quizmo’da ve derslerde PostgreSQL.'],
      ['MongoDB', 'Teslim edilen projelerde.'],
      ['Neo4j', 'Ders uygulamaları.'],
    ]},
    { group: 'Araçlar ve altyapı', items: [
      ['Git · Linux · SSH', 'Her gün; uzak makinelerde tmux oturumları.'],
      ['Docker', 'Homelab’imde ve IUT uygulamalarında.'],
      ['Vercel · Caddy · Proxmox', 'Deploy için Vercel; homelab’imde Caddy ve Proxmox.'],
      ['Kubernetes', 'Okulda öğreniyorum.'],
    ]},
  ],
};
