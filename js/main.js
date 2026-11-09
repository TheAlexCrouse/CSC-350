const singers = [
    {
        name: "Glaive",
        song: "Astrid",
        albumArt: "images/astrid.jpg",
        dateOfBirth: "January 20, 2005",
        hometown: "Hendersonville, North Carolina"
    },
    {
        name: "underscores",
        song: "Spoiled little brat",
        albumArt: "images/spoiledlittlebrat.jpg",
        dateOfBirth: "April 21, 2000",
        hometown: "San Francisco, California"
    },
    {
        name: "pupsies",
        song: "Misery",
        albumArt: "images/misery.jpg",
        dateOfBirth: "2006 or 2007",
        hometown: "North Carolina"
    },
    {
        name: "Matt Shultz (Cage the Elephant)",
        song: "Ain't No Rest for the Wicked",
        albumArt: "images/aintnorestforthewicked.jpg",
        dateOfBirth: "October 23, 1983",
        hometown: "Bowling Green, Kentucky"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#singer-table-body");
    const albumArtPreview = document.querySelector("#album-art-preview");
    const albumArtCaption = document.querySelector("#album-art-caption");

    if (!tableBody || !albumArtPreview || !albumArtCaption) {
        console.error("Could not find the singer table or album art preview elements.");
        return;
    }

    const defaultSinger = singers[0];
    const defaultImage = defaultSinger.albumArt;
    const defaultAlt = `Album art for ${defaultSinger.song} by ${defaultSinger.name}`;
    const defaultCaption = `${defaultSinger.song} by ${defaultSinger.name}`;

    const showAlbumArt = (artistButton) => {
        albumArtPreview.src = artistButton.dataset.albumArt;
        albumArtPreview.alt = `Album art for ${artistButton.dataset.song} by ${artistButton.dataset.artist}`;
        albumArtCaption.textContent = `${artistButton.dataset.song} by ${artistButton.dataset.artist}`;
    };

    const resetAlbumArt = () => {
        albumArtPreview.src = defaultImage;
        albumArtPreview.alt = defaultAlt;
        albumArtCaption.textContent = defaultCaption;
    };

    singers.forEach((singer) => {
        const row = document.createElement("tr");
        row.dataset.artist = singer.name;
        row.dataset.song = singer.song;
        row.dataset.albumArt = singer.albumArt;

        const artistCell = document.createElement("td");
        const artistButton = document.createElement("button");
        artistButton.type = "button";
        artistButton.className = "btn btn-link p-0 text-start text-decoration-none";
        artistButton.textContent = singer.name;
        artistButton.setAttribute("aria-label", `Preview album art for ${singer.name}'s song ${singer.song}`);
        artistCell.appendChild(artistButton);
        row.appendChild(artistCell);

        [singer.song, singer.dateOfBirth, singer.hometown].forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    tableBody.addEventListener("pointerover", (event) => {
        const artistRow = event.target.closest("tr[data-album-art]");
        if (artistRow && !artistRow.contains(event.relatedTarget)) {
            showAlbumArt(artistRow);
        }
    });

    tableBody.addEventListener("pointerout", (event) => {
        const artistRow = event.target.closest("tr[data-album-art]");
        if (artistRow && !artistRow.contains(event.relatedTarget)) {
            resetAlbumArt();
        }
    });

    tableBody.addEventListener("focusin", (event) => {
        const artistRow = event.target.closest("tr[data-album-art]");
        if (artistRow) {
            showAlbumArt(artistRow);
        }
    });

    tableBody.addEventListener("focusout", (event) => {
        const artistRow = event.target.closest("tr[data-album-art]");
        if (artistRow && !artistRow.contains(event.relatedTarget)) {
            resetAlbumArt();
        }
    });
});