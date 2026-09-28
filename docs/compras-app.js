(function () {
  var STORAGE_KEY = "plan-compras-checked-v1";
  var data = window.COMPRAS || [];
  var checked = load();

  var listEl = document.getElementById("list");
  var progressEl = document.getElementById("progress");
  var resetBtn = document.getElementById("btn-reset");

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }

  function allIds() {
    var ids = [];
    data.forEach(function (sec) {
      sec.items.forEach(function (it) {
        ids.push(it.id);
      });
    });
    return ids;
  }

  function updateProgress() {
    var ids = allIds();
    var done = ids.filter(function (id) {
      return checked[id];
    }).length;
    progressEl.textContent = done + " / " + ids.length;
  }

  function render() {
    listEl.innerHTML = "";
    data.forEach(function (sec) {
      var wrap = document.createElement("section");
      wrap.className = "section";
      wrap.innerHTML = "<h2>" + sec.title + "</h2>";

      sec.items.forEach(function (it) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "item" + (checked[it.id] ? " done" : "");
        btn.dataset.id = it.id;

        var meta = it.meta
          ? '<span class="meta">' + it.meta + "</span>"
          : "";

        btn.innerHTML =
          '<span class="box" aria-hidden="true">' +
          (checked[it.id] ? "✓" : "") +
          "</span>" +
          '<span class="text"><span class="name">' +
          it.name +
          "</span>" +
          meta +
          "</span>";

        btn.setAttribute(
          "aria-pressed",
          checked[it.id] ? "true" : "false"
        );

        btn.addEventListener("click", function () {
          checked[it.id] = !checked[it.id];
          if (!checked[it.id]) delete checked[it.id];
          save();
          btn.classList.toggle("done", !!checked[it.id]);
          btn.setAttribute(
            "aria-pressed",
            checked[it.id] ? "true" : "false"
          );
          btn.querySelector(".box").textContent = checked[it.id] ? "✓" : "";
          updateProgress();
        });

        wrap.appendChild(btn);
      });

      listEl.appendChild(wrap);
    });
    updateProgress();
  }

  resetBtn.addEventListener("click", function () {
    if (!confirm("¿Desmarcar toda la lista?")) return;
    checked = {};
    save();
    render();
  });

  render();
})();
